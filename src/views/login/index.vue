<template>
  <div class="login-container">
    <el-form class="card-box login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <h3 class="title">系统登录</h3>

      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <icon name="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="邮箱" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <icon name="eye" />
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码" />
        <span class='show-pwd' @click='showPwd'><icon name="eye-slash" /></span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      pwdType: 'password',
      loading: false
    }
  },
  methods: {
    showPwd () {
      this.pwdType = this.pwdType === 'password' ? '' : 'password'
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  /*@import "src/assets/styles/sui/mixin.scss";*/
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light-gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark-gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      color: $light-gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark-gray;
      cursor: pointer;
    }
  }
</style>
