"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paths_1 = require("./paths");
var vcl_1 = require("./vcl");
var derivers = {
    VCL: new vcl_1.VclDeriver(),
};
var DeriverProxy = (function () {
    function DeriverProxy() {
    }
    DeriverProxy.prototype.get = function (chain) {
        return derivers[chain];
    };
    DeriverProxy.prototype.deriveAddress = function (chain, network, xpubKey, addressIndex, isChange) {
        return this.get(chain).deriveAddress(network, xpubKey, addressIndex, isChange);
    };
    DeriverProxy.prototype.derivePrivateKey = function (chain, network, privKey, addressIndex, isChange) {
        return this.get(chain).derivePrivateKey(network, privKey, addressIndex, isChange);
    };
    DeriverProxy.prototype.pathFor = function (chain, network, account) {
        if (account === void 0) { account = 0; }
        var normalizedChain = chain.toUpperCase();
        var accountStr = account + "'";
        var chainConfig = paths_1.Paths[normalizedChain];
        if (chainConfig && chainConfig[network]) {
            return chainConfig[network] + accountStr;
        }
        else {
            return paths_1.Paths.default.testnet + accountStr;
        }
    };
    return DeriverProxy;
}());
exports.DeriverProxy = DeriverProxy;
exports.default = new DeriverProxy();
//# sourceMappingURL=index.js.map