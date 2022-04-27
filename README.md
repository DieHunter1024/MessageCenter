# MessageCenter

#### 介绍

基于
https://gitee.com/DieHunter/myCode/tree/master/%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F&%E5%8F%91%E5%B8%83%E8%80%85%E8%AE%A2%E9%98%85%E8%80%85%E6%A8%A1%E5%BC%8F/PubSubPattern
发布订阅模式实现的一个消息中心
参考：https://www.npmjs.com/package/message-center.js

#### 软件架构

软件架构说明

#### 安装教程

1.  pnpm i
2.  pnpm build

#### 使用说明

1.  pnpm build（构建）
2.  pnpm example（示例）

    # 注册事件至调度中心

    ## messageCenter.on("a", funcA);

    # 触发调度中心的某个或者某些该事件类型下注册的函数

    ## messageCenter.emit("a", { state: "stop" });

    # 销毁监听

    ## messageCenter.un("a", funcA);

    ## messageCenter.un("a");

    # 只注册一次监听，执行即销毁

    ## messageCenter.once("a", funcA);

    # 重置调度中心

    ## messageCenter.clear();

    # 判断事件是否被订阅

    ## messageCenter.has("a");

    # 同一个事件被绑定了多少函数

    ## messageCenter.handlerLength("a");

    # 监听 invoke 的消息，若 handler 中进行了计算或者异步操作，会反馈给 invoke

    ## messageCenter.watch("b", funcB);

    # 触发 watch 事件，并且接收 watch 处理结果

    ## messageCenter.invoke("b", { num1: 1, num2: 2 }).then((result) => {

    ## console.log(result);

    ## });

