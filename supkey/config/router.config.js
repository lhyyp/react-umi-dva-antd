exports.Routes = [
  {
    path: "/",
    component: "../layouts/index.js",
  },
  
  {
    path: '/login',
    routes: [
      { path: '/login', component: '../pages/login/index.js' },
    ]
  },
  {
    path: "/admin",
    Routes: ['src/userStatus'],
    component: "../layouts/index.js",
    routes: [
      {
        path: "/admin",
        component: "../pages/admin"
      }
    ]
  },
  {
    path: "/userList",
    component: "../layouts/index.js",
    Routes: ['src/userStatus'],
    routes: [
      {
        path: "/userList",
        component: "../pages/userList"
      }
    ]
  },
  {
    path: "/menuList",
    component: "../layouts/index.js",
    Routes: ['src/userStatus'],
    routes: [
      {
        path: "/menuList",
        component: "../pages/menuList"
      }
    ]
  },
  {
    path: "/roleList",
    component: "../layouts/index.js",
    Routes: ['src/userStatus'],
    routes: [
      {
        path: "/roleList",
        component: "../pages/roleList"
      }
    ]
  },
]