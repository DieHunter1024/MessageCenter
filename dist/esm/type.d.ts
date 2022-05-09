export declare interface Handlers {
    [key: string]: Array<Function>;
}
export declare interface IMessageCenter {
    events: Handlers;
    _instance?: IMessageCenter;
    on: (type: string, handler: Function) => this;
    emit: (type: string, data?: any) => this;
    un: (type: string, handler?: Function) => this;
    once: (type: string, handler: Function) => this;
    clear: () => this;
    has: (type: string) => boolean;
    handlerLength: (type: string) => number;
    watch: (type: string, handler: Function) => this;
    invoke: (type: string, data?: any) => Promise<void>;
}
