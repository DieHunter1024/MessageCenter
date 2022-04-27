# EventMessageCenter
#### Introduction
An event message center based on publish subscribe mode
#### Installation tutorial
1. pnpm i
2. pnpm build
#### Instructions for use
1. Pnpm build
2. Pnpm example
3. Demo is used under the example folder
# Register the event to the dispatching center
messageCenter.on("a", funcA);
# Trigger one or some functions registered under this event type in the dispatching center
messageCenter.emit("a", { state: "stop" });
# Destroy listening
messageCenter.un("a", funcA);
messageCenter.un("a");
# Only register once to listen and destroy upon execution
messageCenter.once("a", funcA);
# Reset dispatch center
messageCenter.clear();
# Judge whether the event is subscribed
messageCenter.has("a");
# How many functions are bound to the same event
messageCenter.handlerLength("a");
# Listen to the message of invoke.If there is calculation or asynchronous operation in the handler, it will be fed back to invoke
messageCenter.watch("b", funcB);
# Trigger the watch event and receive the watch processing result
messageCenter.invoke("b", { num1: 1, num2: 2 }).then((result) => {
console.log(result);
});