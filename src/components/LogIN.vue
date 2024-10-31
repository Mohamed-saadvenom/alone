<template>
  <div class="loginpage">
    <div class="login">
      <div>
        <img src="../assets/logo.png" alt="" />
        <p class="title text-light">Log In</p>
        <input placeholder="Email" required v-model="email" />
          <input
            class="password"
            placeholder="Password"
            type="password"
            required
            v-model="password"
          />

        
        <button class="loader" @click="login">Sign in</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../../router/routes";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((data) => {
          console.log("succfully", data);
          router.push("/dashboardpage");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
<style>
.loginpage {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: fit-content;
  border-radius: 10px;
  background: rgb(31, 109, 195);
  background: linear-gradient(
    0deg,
    rgba(31, 109, 195, 1) 11%,
    rgba(14, 22, 30, 1) 61%,
    rgba(12, 13, 13, 1) 100%
  );
}
.login > div img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}
.login > div {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;

  border: 1px solid rgb(0, 0, 0, 0.1);
}

.login .title {
  color: rgb(30, 30, 30);
  font-size: 18px;
  font-weight: bold;
  margin: 30px auto 20px;
}

.login input {
  width: 300px;
  border-radius: 4px;
  margin: 10px auto;
  padding: 11px 15px;
  background-color: rgb(245, 245, 245);
  outline: none;
  border: 1px solid rgb(0, 0, 0, 0);
  font-size: 15px;
  color: rgb(30, 30, 30);
  transition: 0.3s;
}
.login input::placeholder {
  color: rgb(200, 200, 200);
}
.login input:hover {
  background-color: #f1eff1;
}
.login input:focus {
  background-color: #fff;
  border: 1px solid rgb(87, 126, 219);
  box-shadow: 0 0 4px 2px rgb(50, 50, 50, 0.1);
}
.login input:valid {
  border: 1px solid rgb(220, 220, 220);
}

.login button {
  border-radius: 4px;
  background-color: rgb(87, 126, 219);
  height: 45px;
  padding: 12px;
  width: 260px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 20px auto;
  transition: 0.3s;
}
.login button:hover {
  background-color: #3a6dd8;
}
.login button i {
  font-size: 16px;
}

.login .buttonShadow {
  background-color: #fff;
  color: rgb(100, 100, 100);
  border: 1px solid rgb(50, 50, 50, 0.1);
}
.login .buttonShadow:hover {
  background-color: rgb(50, 50, 50, 0.2);
}

.login .link {
  text-decoration: none;
  color: rgb(160, 160, 160);
  font-size: 12px;
}

.login .text {
  font-size: 15px;
  margin: 40px auto 0;
  color: rgb(20, 20, 20);
}

@media only screen and (max-width: 830px) {
  .login > div {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    padding: 2;
    overflow: auto;
    box-shadow: none;
  }
}
</style>
