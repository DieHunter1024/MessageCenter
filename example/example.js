/*
 * @Author: Hunter
 * @Date: 2022-04-27 11:10:07
 * @LastEditTime: 2022-04-27 21:26:45
 * @LastEditors: Hunter
 * @Description:
 * @FilePath: \message-center\example\example.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const funcC = async (args) => {
  await syncFn();
  return args.reduce((pre, next) => (pre += next));
};
// 异步函数
const syncFn = () => {
  return new Promise((res) => {
    setTimeout(res, 1000);
  });
};
class Example {
  constructor(messageCenter) {
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
    messageCenter.watch("c", funcC);

    // invoke
    messageCenter.invoke("c", [1, 2, 3, 4]).then((result) => {
      console.log(result);
    });
  }
}

if (typeof define === "function" && define.amd) {
  // amd环境
  define(Example);
} else if (typeof exports === "object") {
  // cmd环境
  exports.Example = Example;
} else if (Window) {
  // 浏览器环境下
  window.Example = Example;
}
function funcA(args) {
  console.log(args);
}
function funcB(args) {
  const { num1, num2 } = args;
  //   console.log(args);
  return num1 + num2;
}
