"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var VircleLib = require('vircle-lib');
var AbstractVircleLibDeriver = (function () {
    function AbstractVircleLibDeriver() {
    }
    AbstractVircleLibDeriver.prototype.deriveAddress = function (network, pubKey, addressIndex, isChange) {
        var xpub = new this.vircleLib.HDPublicKey(pubKey, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        return this.vircleLib.Address(xpub.derive(path).publicKey, network).toString();
    };
    AbstractVircleLibDeriver.prototype.derivePrivateKey = function (network, xPriv, addressIndex, isChange) {
        var xpriv = new this.vircleLib.HDPrivateKey(xPriv, network);
        var changeNum = isChange ? 1 : 0;
        var path = "m/" + changeNum + "/" + addressIndex;
        var privKey = xpriv.derive(path).privateKey;
        var pubKey = privKey.publicKey;
        var address = this.vircleLib.Address(pubKey, network).toString();
        return { address: address, privKey: privKey.toString(), pubKey: pubKey.toString() };
    };
    return AbstractVircleLibDeriver;
}());
exports.AbstractVircleLibDeriver = AbstractVircleLibDeriver;
var VclDeriver = (function (_super) {
    __extends(VclDeriver, _super);
    function VclDeriver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vircleLib = VircleLib;
        return _this;
    }
    return VclDeriver;
}(AbstractVircleLibDeriver));
exports.VclDeriver = VclDeriver;
//# sourceMappingURL=index.js.map