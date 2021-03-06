/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 14:45:11
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 15:39:47
 */
module.exports = {
	router: {
    base: '/t03-03-task4-nuxtjs-realworld',
    linkActiveClass: 'active',
		extendRoutes (routes, resolve) {
			routes.splice(0)
			routes.push( ...[
				{
					path: '/',
					component: resolve(__dirname, 'pages/layout'),
					children: [
						{
							path: '',
							name: 'home',
							component: resolve(__dirname, 'pages/home/')
            },
            {
							path: '/login',
							name: 'login',
							component: resolve(__dirname, 'pages/login/')
            },
            {
							path: '/register',
							name: 'register',
							component: resolve(__dirname, 'pages/login/')
            },
            {
							path: '/profile/:username',
							name: 'profile',
							component: resolve(__dirname, 'pages/profile/')
            },
            {
							path: '/profile/:username/favourites',
							name: 'favprofile',
							component: resolve(__dirname, 'pages/profile/')
            },
            {
							path: '/settings',
							name: 'settings',
							component: resolve(__dirname, 'pages/settings/')
            },
            {
							path: '/editor',
							name: 'editor',
							component: resolve(__dirname, 'pages/editor/')
            },
            {
							path: '/editor/:slug',
							name: 'editEditor',
							component: resolve(__dirname, 'pages/editor/')
            },
            {
							path: '/article/:slug',
							name: 'article',
							component: resolve(__dirname, 'pages/article/')
						},
					]
				}
			] )
		}
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}