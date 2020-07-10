"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vcl_1 = require("./vcl");
var providers = {
    VCL: new vcl_1.VCLTxProvider(),
};
var TransactionsProxy = (function () {
    function TransactionsProxy() {
    }
    TransactionsProxy.prototype.get = function (_a) {
        var chain = _a.chain;
        return providers[chain];
    };
    TransactionsProxy.prototype.create = function (params) {
        return this.get(params).create(params);
    };
    TransactionsProxy.prototype.sign = function (params) {
        return this.get(params).sign(params);
    };
    TransactionsProxy.prototype.getSignature = function (params) {
        return this.get(params).getSignature(params);
    };
    TransactionsProxy.prototype.applySignature = function (params) {
        return this.get(params).applySignature(params);
    };
    TransactionsProxy.prototype.getHash = function (params) {
        return this.get(params).getHash(params);
    };
    return TransactionsProxy;
}());
exports.TransactionsProxy = TransactionsProxy;
exports.default = new TransactionsProxy();
//# sourceMappingURL=index.js.map