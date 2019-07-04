<template>
  <div class="register">
    <transition name="modal">
      <div class="modal-mask" @click.self="goHome">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h1 class="modal-title">REGISTER</h1>
            <p class="register-id">
              <span>ID</span>
              <input v-model="id" type="text">
            </p>
            <p class="register-password">
              <span>PASSWORD</span>
              <input v-model="password" type="password">
            </p>
            <input @click="onClick" class="register-submit" type="submit" value="REGISTER">
            <router-link class="login-link" to="/login">login</router-link>
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
      this.reqRegister();
    },
    reqRegister() {
      let xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.addEventListener("load", this.reqRegisterListener);
      xhr.open("POST", `http://${location.host}/api/register/`,true);
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      xhr.send(`id=${this.id}&password=${this.password}`);
    },
    reqRegisterListener(event) {
      if (event.target.status!==201) throw new Error("respone is undefined");
      this.$router.push("/login");
    },
    goHome: function() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang='scss' scoped>
.register {
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
.register-id,
.register-password {
  display: flex;
  margin: 0;
  flex-direction: column;
}
.register-submit {
  padding: 5px 10px;
  appearance: none;
  border: none;
  border: solid 1px #707070;
  border-radius: 8px;
  background-color: white;
}
.login-link {
  display: block;
  text-decoration: none;
  color: black;
}
</style>