const api = process.env.NODE_ENV == 'production' ? '' : '/api'
export default {
//   target: 'http://cms.haiguimall.com',  // 本地开发 mock 的时候配置
  target: '',  // 本地开发，调用本地后端的时候配置



  platformLogin: api + '/member/login',                     // 登录
  getMenuListByrole: api+'/member/getMenuListByrole',       //获取该角色下的menu列表




  platformLogout: api + '/LoginApi/v1/loginOut',                 //退出登录
  userList: api + '/member/v1/getList',                           // 用户数据列表
  getUserDetails: api + '/member/v1/getDetailInfo',               // 用户详情
  getProductList: api + '/goods/v1/pageAdmin',                    // 商品列表
  updateProductStatus: api + '/goods/v1/updateStatus',             //更新商品状态
  getProductDetails: api + '/goods/v1/getDetails',                 //商品详情
  getListAllCategory: api + '/goodsCategory/v1/listAllCategory',    //商品分类
  getCircleSettingList: api + '/setting/v1/getCircleSetting',       //方圆配置列表
  isOpenExchange: api + '/setting/v1/isOpenExchange',               //配置是否启动兑换方圆
  updateRate: api + '/setting/v1/updateRate',                        //配置兑换方圆比例


  getRoleList: api + '/RoleApi/v1/findRoleByPage',                       //根据条件获取 角色列表
  addRoles: api + '/RoleApi/v1/addRoles',                                         //新增角色
  delRoles: api + '/RoleApi/v1/delRoles',                                          //删除角色
  findPermisbyrole: api + '/RoleApi/v1/findRolesPermisByRole',                     //查角色的权限
  findBasePermission: api + '/PermisApi/v1/findBasePermission',                        //全部的权限列表
  findallroles: api + '/RoleApi/v1/findAllRoles',                                   //查全部角色列表  
  addrolespermis: api + '/RoleApi/v1/addRolesPermis',                                //角色添加权限


  getAdminUserList: api + '/UserApi/v1/findUserByPage',                            //获取后台用户列表
  addAdminUser: api + '/UserApi/v1/addUser',                                       //添加后台用户
  delAdminUser: api + '/UserApi/v1/delUsers',                                       //删除后台用户
  updateAdminUseInfo: api + '/UserApi/v1/editUserInfo',                            //修改后台用户
  updateAdminUserStatus: api + '/UserApi/v1/editUserStatus',                        //修改后台用户状态

  addMenuItem: api + '/PermisApi/v1/addPermissions',                        //增加菜单
  delMenuItem: api + '/PermisApi/v1/delPermis',                             //删除菜单
  BindingMenuItem: api + '/PermisApi/v1/findBasePermission',                //绑定树形菜单
  getMenuList: api + '/PermisApi/v1/findLastPermissionByType',             //查询父级菜单为0的所有菜单
  getMenuItemList: api + '/PermisApi/v1/findPermissionByPage',             //查询菜单
  updateMenuList: api + '/PermisApi/v1/updatePermissions',                 //更新菜单

 

  



  

  


  







};
