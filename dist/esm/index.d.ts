import { IMessageCenter, Handlers } from "./type";
export declare class MessageCenter implements IMessageCenter {
    events: Handlers;
    on(type: any, handler: any): this;
    emit(type: any, data: any): this;
    un(type: any, handler: any): this;
    once(type: any, handler: any): this;
    clear(): this;
    has(type: string): boolean;
    handlerLength(type: string): number;
    watch(type: any, handler: any): this;
    invoke(type: any, data: any): Promise<void>;
    private runHandler;
    private unHandler;
    private prefixStr;
    private checkHandler;
    static Instance(Fn: any): any;
}
export declare const messageCenter: any;
export default MessageCenter;
