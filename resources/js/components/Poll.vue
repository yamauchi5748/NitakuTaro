<template>
  <div class="poll">
    <div class="poll-text">{{poll}}</div>
    <button @click="nextPoll" v-show="isAnswer" class="next-poll">Next</button>
    <div class="poll-choices">
      <button @click="onClick(0)" class="choice">
        <span class="choice-text">{{choice[0]}}</span>
        <span v-show="isAnswer" class="rate">{{rate[0]}}</span>
        <span v-show="isAnswer" class="vote">{{vote[0]}}</span>
        <div class="rate-background" :style="pollBackgroundStyle[0]"></div>
      </button>
      <button @click="onClick(1)" class="choice">
        <span class="choice-text">{{choice[1]}}</span>
        <span v-show="isAnswer" class="rate">{{rate[1]}}</span>
        <span v-show="isAnswer" class="vote">{{vote[1]}}</span>
        <div class="rate-background" :style="pollBackgroundStyle[1]"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAnswer: false,
      id: "",
      poll: "",
      choice: ["", ""],
      vote: [0, 0]
    };
  },
  computed: {
    rate() {
      if (!(this.vote[0] && this.vote[1])) return ["0%", "0%"];
      let total = this.vote[0] + this.vote[1];
      let rate = Math.floor((this.vote[0] / total) * 10000) / 100;
      return [rate + "%", 100 - rate + "%"];
    },
    pollBackgroundStyle() {
      let transition = this.isAnswer ? "width 3s" : "";
      return [
        {
          width: this.rate[0],
          backgroundColor: "aquamarine",
          transition
        },
        { width: this.rate[1], backgroundColor: "coral", transition }
      ];
    }
  },
  created() {
    this.reqPoll();
  },
  methods: {
    onClick(index) {
      if (this.isAnswer) return;
      this.isAnswer = true;
      this.reqAnswer(index);
    },
    reqAnswer(index) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.addEventListener("load", this.reqAnswerListener);
      xhr.open("POST", `http://${location.host}/api/poll/${this.id}`);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(`answer=${this.index + 1}`);
    },
    reqAnswerListener(event) {
      if (event.target.status != 200) throw new Error("respone is undefined");
      this.vote = event.target.response.vote;
    },
    reqPoll() {
      let xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.addEventListener("load", this.reqPollListener);
      xhr.open("GET", `http://${location.host}/api/poll`);
      xhr.send();
    },
    reqPollListener(event) {
      if (!event.target.status != 200) throw new Error("respone is undefined");
      this.id = event.target.response.id;
      this.poll = event.target.response.poll;
      this.choice = event.target.response.choice;
    },
    nextPoll() {
      this.isAnswer = false;
      this.vote = [0, 0];
      this.reqPoll();
    }
  }
};
</script>
<style lang='scss' scoped>
.poll {
  display: flex;
  position: relative;
  padding-top: 5vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.poll-text {
  position: absolute;
  top: 10vh;
  font-size: 1.8rem;
}
.poll-choices {
  display: flex;
  position: absolute;
  bottom: 5vh;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  border-top: solid 2px black;
}
.choice {
  display: flex;
  position: relative;
  justify-content: center;
  height: 20vh;
  font-size: 1.5rem;
  cursor: pointer;
  appearance: none;
  border: none;
  background-color: transparent;
  border-bottom: solid 2px black;
  .rate {
    position: absolute;
    bottom: 2vh;
    font-size: 1rem;
  }
  .vote {
    position: absolute;
    bottom: 1vh;
    right: 1vw;
    font-size: 1rem;
  }
  .rate-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
}
.next-poll {
  padding: 1vh 2vh;
  position: absolute;
  top: 40vh;
  font-size: 1.2rem;
  appearance: none;
  border: none;
  background-color: black;
  border-radius: 20px;
  color: white;
}
</style>
