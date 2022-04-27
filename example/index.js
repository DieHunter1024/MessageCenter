/*
 * @Author: Hunter
 * @Date: 2022-04-15 14:33:05
 * @LastEditTime: 2022-04-27 11:11:02
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \message-center\example\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { messageCenter } = require("../dist/common");
const {Example} = require('./example')

new Example(messageCenter)