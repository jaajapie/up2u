import Vue from 'vue'
import Login from '@/components/Login'

describe('Login.vue', () => {
  it('has a created hook', () => {
    expect(typeof Login.created).to.equal('function')
  })
  it('sets the correct default data', () => {
    const vm = new Vue(Login).$mount()
    expect(vm.msg).to.equal('Welcome')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.mb-5').textContent)
      .to.equal('Enter your details below.')
  })
  it('username length incorrect', () => {
    // const Constructor = Vue.extend(Login)
    const vm = new Vue(Login).$mount()
    expect(vm.sum(1, 2)).to.equal(3)
  })
})
