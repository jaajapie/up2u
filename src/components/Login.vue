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
          <b-input placeholder="Username" ref="username" icon-pack="fas" icon="user" v-model="user.username"> </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Password" type="password" icon-pack="fas" v-model="user.password" icon="lock">
          </b-input>
        </b-field>
        <p class="control">
          <button class="button is-primary" @click="PostLogin">
            SIGN IN
          </button>
        </p>
      </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '',
        user: {
          username: '',
          password: ''
        }
      }
    },
    created() {
      console.log('I am created')
      window.sessionStorage.clear()
      // `this` points to the vm instance
      this.testCreated()
    },
    methods: {
      testCreated: function () {
        this.msg = 'Welcome'
      },
      sum(a, b) {
        return a + b
      }, async PostLogin() {
        try {
          const { data } = await axios.post('http://localhost:5000/api/v1/login', this.user)
          if (data.status === 200) {
            window.sessionStorage.setItem('currlogin', this.user.username)
            this.$router.push('/Home')

          }

        } catch (error) {
          console.log(error.message)
        }
      }
    },
    computed: {
      testCoumputed() {
        return console.log('I am computed')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logbody {
    text-align: left;
    margin-top: 150px;
    margin-left: 70px;
    margin-right: 70px;
  }

  .h3,
  h3 {
    font-size: 1.56rem;
  }

  .mb-5 {
    margin-bottom: 15px;
  }
</style>