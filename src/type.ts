/*
 * @Author: Hunter
 * @Date: 2022-04-14 15:33:17
 * @LastEditTime: 2022-04-14 19:09:13
 * @LastEditors: Hunter
 * @Description: 
 * @FilePath: \message-center\src\type.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
export declare interface Handlers {
    [key: string]: Array<Function>
}
export declare interface IMessageCenter {
    events: Handlers
    _instance?: IMessageCenter
    on: (type: string, handler: Function) => this
    emit: (type: string, data?: any) => this
    un: (type: string, handler?: Function) => this
    once: (type: string, handler: Function) => this
    clear: () => this
    has: (type: string) => boolean
    handlerLength: (type: string) => number
    watch: (type: string, handler: Function) => this
    invoke: (type: string, data?: any) => Promise<void>
}