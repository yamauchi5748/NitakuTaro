<template>
  <div class="login">
    <transition name="modal">
      <div class="modal-mask" @click.self="goHome">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h1 class="modal-title">LOGIN</h1>
            <p class="login-id">
              <span>ID</span>
              <input v-model="id" type="text" name="id">
            </p>
            <p class="login-password">
              <span>PASSWORD</span>
              <input v-model="password" type="password" name="password">
            </p>
            <input @click="onClick" class="login-submit" type="submit" value="LOGIN">
            <router-link class="register-link" to="/register">register</router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: ""
    };
  },
  methods: {
    onClick() {
      //this.reqLogin();
      this.reqLoginListener({
        response:{
          id:this.id
        }
      })
    },
    reqLogin() {
      let xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.addEventListener("load", this.reqLoginListener);
      xhr.open("POST", "/api/login/", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(`id=${this.id}&password=${this.password}`);
    },
    reqLoginListener({ response }) {
      if (!response) throw new Error("respone is undefined");
      this.$root.id = response.id;
      this.goHome()
    },
    goHome: function() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang='scss' scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: flex;
  width: 360px;
  height: 460px;
  border-radius: 50px;
  background-color: white;
}
.modal-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
}
.login-id,
.login-password {
  display: flex;
  margin: 0;
  flex-direction: column;
}
.login-submit {
  padding: 5px 10px;
  appearance: none;
  border: none;
  border: solid 1px #707070;
  border-radius: 8px;
  background-color: white;
}
.register-link {
  display: block;
  text-decoration: none;
  color: black;
}
</style>
