exports.Routes= [
    {
      path: "/",
      component: "../layouts/index.tsx",
    },
    {
      path: "/admin",
      component: "../layouts/index.tsx",
      routes: [
        {
          path: "/admin",
          component: "../pages/admin"
        }
      ]
    },
    {
      path: "/demo",
      component: "../layouts/index.tsx",
      routes: [
        {
          path: "/demo",
          Routes: ['./src/userStatus.js'],
          component: "../pages/index.tsx"
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