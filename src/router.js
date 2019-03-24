import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About')
    },


    {
      path: '/books',
      name: 'BookList',
      component: () => import('@/views/BookList')
    },

    {
      path: '/examples',
      name: 'Example',
      component: {render: h => <router-view/>},
      children: [
        {
          path: 'chart',
          name: 'ExampleChart',
          component: () => import('@/views/ChartSample')
        },

        {
          path: 'sass',
          name: 'ExampleSass',
          component: () => import('@/views/ScssSample')
        },

        {
          path: 'waterfall',
          name: 'WaterfallExample',
          component: () => import('@/views/WaterfallExample')
        },

        {
          path: 'waterfall-css3',
          name: 'WaterfallCSS3Example',
          component: () => import('@/views/WaterfallCSS3Example')
        },

        {
          path: 'waterfall-masonry',
          name: 'WaterfallMasonryExample',
          component: () => import('@/views/WaterfallMasonryExample')
        },

        // {
        //   path: '',
        //   name: '',
        //   component: () => import('@/views/')
        // },
      ],
    },


  ]
})
