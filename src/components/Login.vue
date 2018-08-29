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
          <b-input placeholder="Username" ref="username" icon-pack="fas" icon="user" v-model="users.username" value="test"> </b-input>
        </b-field>
        <b-field>
          <b-input placeholder="Password" type="password" id="password" icon-pack="fas" v-model="users.password" value="1234" icon="lock">
          </b-input>
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
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '',
        users: {
          total: 0,
          username: 'test',
          password: ''
        }
      }
    },
    created() {
      console.log('I am created')
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
        console.log('rrr')
        const { data } = await axios.post('http://localhost:5000//api/v1/login', this.user)
        if (data.status === 200) {
          console.log('complate')
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