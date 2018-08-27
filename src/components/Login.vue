<template>
<div class="columns">
 <div class="column is-two-fifths">
  <div class="card">
<div class="card-image">
   <img src="http://www.urbanui.com/chroma/images/auth/login_2.jpg" alt="Placeholder image">
</div>
</div>
  </div>
  <div class="column logbody">
    <h3 class="mr-auto">{{msg}}</h3>
    <p class="mb-5 mr-auto">Enter your details below.</p>
    <section>
       <b-field>
            <b-input placeholder="Username" id="username" icon-pack="fas"
                icon="user"></b-input>
      </b-field>
        <b-field>
            <b-input placeholder="Password" type="password" id="password" icon-pack="fas"
                icon="lock"></b-input>
      </b-field>
       <p class="control">
                <button class="button is-primary">
                  SIGN IN
                </button>
            </p>
    </section>
   </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    // `this` points to the vm instance
    this.testCreated()
  },
  methods: {
    testCreated: function () {
      this.msg = 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logbody {
  text-align: left;
  margin-top: 150px;
  margin-left:70px;
  margin-right: 70px;
}
.h3, h3 {
    font-size: 1.56rem;
}
.mb-5 {
  margin-bottom: 15px;
}
</style>
