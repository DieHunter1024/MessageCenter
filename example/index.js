/*
 * @Author: Hunter
 * @Date: 2022-04-15 14:33:05
 * @LastEditTime: 2022-04-15 17:04:30
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \message-center\example\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { messageCenter } = require("../dist/index");
function funcA(args) {
  console.log(args);
}
function funcB(args) {
  const { num1, num2 } = args;
//   console.log(args);
  return num1 + num2;
}
// on
messageCenter.on("a", funcA);
// emit
messageCenter.emit("a", { state: "stop" });
// un
messageCenter.un("a", funcA);
messageCenter.un("a");
// once
messageCenter.once("a", funcA);
// clear
messageCenter.clear();
// has
messageCenter.has("a");
// handlerLength
messageCenter.handlerLength("a");
// watch
messageCenter.watch("b", funcB);

// invoke
messageCenter.invoke("b", { num1: 1, num2: 2 }).then((result) => {
  console.log(result);
});
