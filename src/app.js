import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

import chai from 'chai'

const expect = chai.expect
//单元测试button
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}
//测试loading
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  // console.log(useElement)
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}

//测试order===1？
{
  const div = document.createElement(div)
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  // console.log(svg)
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

//测试order===2？
{
  const div = document.createElement(div)
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  // console.log(svg)
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

//测试click事件？采用mork
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'left'
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    console.log('1')
  })
  let button = vm.$el
  button.click()
  //我期待的是 log 1 被执行
}
