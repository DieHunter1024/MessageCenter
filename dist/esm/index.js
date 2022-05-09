var MessageCenter = function () {
    function MessageCenter() {
        this.events = {};
    }
    MessageCenter.prototype.on = function (type, handler) {
        this.checkHandler(type, handler);
        if (!this.has(type)) {
            this.events[type] = [];
        }
        this.events[type].push(handler);
        return this;
    };
    MessageCenter.prototype.emit = function (type, data) {
        if (this.has(type)) {
            this.runHandler(type, data);
        }
        return this;
    };
    MessageCenter.prototype.un = function (type, handler) {
        this.unHandler(type, handler);
        return this;
    };
    MessageCenter.prototype.once = function (type, handler) {
        var _this = this;
        this.checkHandler(type, handler);
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.un(type, fn);
            return handler.apply(void 0, args);
        };
        this.on(type, fn);
        return this;
    };
    MessageCenter.prototype.clear = function () {
        this.events = {};
        return this;
    };
    MessageCenter.prototype.has = function (type) {
        return !!this.events[type];
    };
    MessageCenter.prototype.handlerLength = function (type) {
        var _a, _b;
        return (_b = (_a = this.events[type]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    };
    MessageCenter.prototype.watch = function (type, handler) {
        var _this = this;
        this.checkHandler(type, handler);
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.emit(_this.prefixStr(type), handler.apply(void 0, args));
        };
        this.on(type, fn);
        return this;
    };
    MessageCenter.prototype.invoke = function (type, data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.once(_this.prefixStr(type), resolve);
            _this.emit(type, data);
        });
    };
    MessageCenter.prototype.runHandler = function (type, data) {
        for (var i = 0; i < this.events[type].length; i++) {
            this.events[type][i] && this.events[type][i](data);
        }
    };
    MessageCenter.prototype.unHandler = function (type, handler) {
        !handler && (this.events[type] = []);
        handler && this.checkHandler(type, handler);
        for (var i = 0; i < this.events[type].length; i++) {
            if (this.events[type][i] && this.events[type][i] === handler) {
                this.events[type][i] = null;
            }
        }
    };
    MessageCenter.prototype.prefixStr = function (str) {
        return "@".concat(str);
    };
    MessageCenter.prototype.checkHandler = function (type, handler) {
        if ((type === null || type === void 0 ? void 0 : type.length) === 0) {
            throw new Error('type.length can not be 0');
        }
        if (!handler || !type) {
            throw new ReferenceError('type or handler is not defined');
        }
        if (typeof handler !== 'function' || typeof type !== 'string') {
            throw new TypeError("".concat(handler, " is not a function or ").concat(type, " is not a string"));
        }
    };
    MessageCenter.Instance = function (Fn) {
        if (!Fn._instance) {
            Object.defineProperty(Fn, "_instance", {
                value: new Fn()
            });
        }
        return Fn._instance;
    };
    return MessageCenter;
}();
export { MessageCenter };
export var messageCenter = MessageCenter.Instance(MessageCenter);
export default MessageCenter;