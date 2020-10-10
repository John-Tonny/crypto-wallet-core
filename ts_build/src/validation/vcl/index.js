"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vircle = require('vircle-lib');
var VclValidation = (function () {
    function VclValidation() {
    }
    VclValidation.prototype.validateAddress = function (network, address) {
        var Address = Vircle.Address;
        return Address.isValid(address, network);
    };
    VclValidation.prototype.validateUri = function (addressUri) {
        var URI = Vircle.URI;
        return URI.isValid(addressUri);
    };
    return VclValidation;
}());
exports.VclValidation = VclValidation;
//# sourceMappingURL=index.js.map