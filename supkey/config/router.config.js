exports.Routes= [
    {
      path: "/",
      component: "../layouts/index.tsx",
    },
    {
      path: "/admin",
      routes: [
        {
          path: "/admin",
          // Routes: ['./src/userStatus.js'],
          component: "../pages/admin"
        }
      ]
    },
    {
      path: "/menuList",
      routes: [
        {
          path: "/menuList",
          // Routes: ['./src/userStatus.js'],
          component: "../pages/menuList"
        }
      ]
    },
    {
      path: '/login',
      routes: [
        { path: '/login', component: '../pages/login/index.js' },
      ]
    }
  ]