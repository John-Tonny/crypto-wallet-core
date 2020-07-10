"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vcl_1 = require("./vcl");
var validation = {
    VCL: new vcl_1.VclValidation()
};
var ValidationProxy = (function () {
    function ValidationProxy() {
    }
    ValidationProxy.prototype.get = function (chain) {
        var normalizedChain = chain.toUpperCase();
        return validation[normalizedChain];
    };
    ValidationProxy.prototype.validateAddress = function (chain, network, address) {
        return this.get(chain).validateAddress(network, address);
    };
    ValidationProxy.prototype.validateUri = function (chain, addressUri) {
        return this.get(chain).validateUri(addressUri);
    };
    return ValidationProxy;
}());
exports.ValidationProxy = ValidationProxy;
exports.default = new ValidationProxy();
//# sourceMappingURL=index.js.map