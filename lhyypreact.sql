/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50562
Source Host           : localhost:3306
Source Database       : lhyypreact

Target Server Type    : MYSQL
Target Server Version : 50562
File Encoding         : 65001

Date: 2019-03-22 18:41:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for menulist
-- ----------------------------
DROP TABLE IF EXISTS `menulist`;
CREATE TABLE `menulist` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parentId` int(10) unsigned zerofill NOT NULL COMMENT '上级菜单Id,0代表第一级菜单',
  `founder` int(11) NOT NULL COMMENT '创建人',
  `createTime` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menulist
-- ----------------------------
INSERT INTO `menulist` VALUES ('0000000001', 'null', 'user', '权限管理', '0000000000', '1', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('0000000002', '/userList', 'null', '用户列表', '0000000001', '1', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('0000000003', '/menuList', 'null', '菜单列表', '0000000001', '1', '2019-03-22 16:13:56');
INSERT INTO `menulist` VALUES ('0000000004', '/roleList', 'null', '角色列表', '0000000001', '1', '2019-03-22 16:16:11');

-- ----------------------------
-- Table structure for menulistbyrole
-- ----------------------------
DROP TABLE IF EXISTS `menulistbyrole`;
CREATE TABLE `menulistbyrole` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `roleId` int(11) NOT NULL COMMENT '角色id',
  `menuId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menulistbyrole
-- ----------------------------
INSERT INTO `menulistbyrole` VALUES ('00000000001', '1', '1');
INSERT INTO `menulistbyrole` VALUES ('00000000002', '1', '2');
INSERT INTO `menulistbyrole` VALUES ('00000000003', '1', '3');
INSERT INTO `menulistbyrole` VALUES ('00000000004', '1', '4');

-- ----------------------------
-- Table structure for rolelist
-- ----------------------------
DROP TABLE IF EXISTS `rolelist`;
CREATE TABLE `rolelist` (
  `id` int(11) NOT NULL,
  `roleName` varchar(255) NOT NULL COMMENT '角色名',
  `founder` int(11) NOT NULL COMMENT '创建者',
  `createTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rolelist
-- ----------------------------
INSERT INTO `rolelist` VALUES ('1', '超管', '1', '2019-03-22 16:18:36');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `RegistrationTime` datetime NOT NULL COMMENT '注册时间',
  `loginTime` datetime NOT NULL COMMENT '最近登录时间',
  `status` int(11) NOT NULL COMMENT '用户状态0 禁用1允许登录',
  `roleId` int(11) NOT NULL COMMENT '角色',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0000000001', 'admin', '123456', '2019-03-22 10:41:35', '2019-03-22 18:24:22', '1', '1');
