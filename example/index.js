/*
 * @Author: Hunter
 * @Date: 2022-04-15 14:33:05
 * @LastEditTime: 2022-04-15 15:00:08
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \message-center\example\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { messageCenter } = require("../dist/index");

console.log(messageCenter);
messageCenter.on("a", (...args) => {
  console.log(args);
});
messageCenter.emit("aa", { state: "start" });
messageCenter.emit("a", { state: "stop" });
