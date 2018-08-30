<template>
  <div>
    <nav class="navbar navbarColor" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <a class="navbar-item txtHead" href="/#/home">
          <span class="icon ">
            <i class="fas fa-home"></i>
          </span>
          <span>Up2u</span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-danger" href="/#/">
            <span class="icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>
              LogOut
            </span>
          </a>
        </div>
      </div>
    </nav>
    <div class="container isfluid setContain">

      <div class="box">
        <span class="icon" style="margin-top: 50px">
          <i class="fas fa-user-astronaut fa-w-14 fa-9x"></i>
        </span>
        <hr>
        <label class="label is-large">Welcome to Up2u world.</label>
        <label class="label is-medium">Hello {{name}} </label>

      </div>
    </div>
  </div>
</template>

<script>  
  export default {
    date() {
      return {
        name: ''
      }

    },
    created() {

      this.name = window.sessionStorage.getItem('currlogin')
    }
  }
</script>
<style>
  .navbarColor {
    background-color: #139b36;
    margin-top: 5px;

  }

  .txtHead {
    padding-left: 10px;
    font-size: 20px;
    color: #ffffff;
  }

  .setContain {
    margin-top: 10px;
  }
</style>