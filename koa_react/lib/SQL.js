const mysql = require('mysql');
const config = require('../config/config.js')
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
  dateStrings: true
});

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        })
      }
    })
  })

}
let user =
  "CREATE TABLE if not exists `user`  (" +
  " `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT," +
  "`userName` varchar(255) NOT NULL COMMENT '用户名'," +
  "`passWord` varchar(255) NOT NULL COMMENT '密码'," +
  "`RegistrationTime` datetime NOT NULL COMMENT '注册时间'," +
  "`loginTime` datetime NOT NULL COMMENT '最近登录时间'," +
  "`status` int(11) NOT NULL COMMENT '用户状态0 禁用1允许登录'," +
  "`roleId` int(11) NOT NULL COMMENT '角色'," +
  " PRIMARY KEY(`id`)" +
  ") ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8";

let menuList =
  "CREATE TABLE if not exists `menulist` (" +
  "`id` int(10)  NOT NULL AUTO_INCREMENT," +
  "`path` varchar(255) NOT NULL," +
  "`icon` varchar(255) NOT NULL," +
  "`name` varchar(255) NOT NULL," +
  "`parentId` int(10) NOT NULL COMMENT '上级菜单Id,0代表第一级菜单'," +
  "`founder` int(11) NOT NULL COMMENT '创建人'," +
  "`createTime` datetime NOT NULL COMMENT '创建时间'," +
  "PRIMARY KEY (`id`)" +
  ") ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8";
let roleList =
  "CREATE TABLE if not exists `rolelist` ( " +
  " `id` int(11) NOT NULL, " +
  "`roleName` varchar(255) NOT NULL COMMENT '角色名',  " +
  "`founder` int(11) NOT NULL COMMENT '创建者', " +
  "`createTime` datetime NOT NULL  COMMENT '创建时间', " +
  "PRIMARY KEY (`id`) " +
  ") ENGINE=InnoDB DEFAULT CHARSET=utf8";
let menulistbyrole =
"CREATE TABLE if not exists `menulistbyrole` ( " +
  "`id` int(11) unsigned NOT NULL AUTO_INCREMENT, " +
  "`roleId` int(11) NOT NULL COMMENT '角色id', " +
  "`menuId` int(11) NOT NULL, " +
  "PRIMARY KEY (`id`) " +
  ") ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 " ;


let createTable = (sql) => {
  if (sql) {

  }
  return query(sql, [])
};

// 建表
createTable(user);
createTable(menuList);
createTable(roleList);
createTable(menulistbyrole);




exports.login = (userName) => {    // 登录
  let _sql = `select * from user where userName='${userName}'`;
  return query(_sql)
}

exports.updateLoginTime = (LoginTime, id) => {    // 跟新登录时间
  let _sql = `update user set loginTime = '${LoginTime}' where id= '${id}'`;
  return query(_sql)
}

exports.getMenuListByrole = (id) => {    // 获取该角色下的列表
  let _sql = `select a.menuId ,a.roleId,b.* from menuListByRole as a LEFT JOIN menuList as b on a.menuId = b.id where a.roleId = '${id}'`;
  return query(_sql)
}