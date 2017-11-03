import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/parent'
import Index from '@/views/index'
import Children from '@/components/children'
import One from '@/components/one'
import Two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent
    },
    {
      // path: '/Children/:id',
      path: '/Children',
      name: 'Children',
      component: Children,
      children: [
        {
          path: '/Children/one',
          name: 'One',
          component: One
        },
        {
          path: '/Children/two',
          name: 'Two',
          component: Two
        },
      ]
    }
  ]
})
