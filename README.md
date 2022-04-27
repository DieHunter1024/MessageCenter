# MessageCenter

#### 介绍

基于发布订阅模式实现的一个事件消息中心

#### 安装教程

1.  pnpm i
2.  pnpm build

#### 使用说明

1.  pnpm build（构建）
2.  pnpm example（示例）
3.  example 文件夹下是使用 demo

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
