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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_1 = __importDefault(require("web3"));
var eth_1 = require("../eth");
var abi_1 = require("./abi");
var ETHMULTISIGTxProvider = (function (_super) {
    __extends(ETHMULTISIGTxProvider, _super);
    function ETHMULTISIGTxProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ETHMULTISIGTxProvider.prototype.getMultisigContract = function (multisigContractAddress) {
        var web3 = new web3_1.default();
        var contract = new web3.eth.Contract(abi_1.MultisigAbi, multisigContractAddress);
        return contract;
    };
    ETHMULTISIGTxProvider.prototype.create = function (params) {
        var multisigContractAddress = params.multisigContractAddress;
        var recipients = [{ address: multisigContractAddress, amount: '0' }];
        var newParams = __assign({}, params, { recipients: recipients });
        return _super.prototype.create.call(this, newParams);
    };
    ETHMULTISIGTxProvider.prototype.instantiateEncodeData = function (params) {
        var addresses = params.addresses, requiredConfirmations = params.requiredConfirmations, multisigGnosisContractAddress = params.multisigGnosisContractAddress, dailyLimit = params.dailyLimit;
        var requiredConfirmationsStr = Number(requiredConfirmations).toLocaleString('en', { useGrouping: false });
        var dailyLimitStr = Number(dailyLimit).toLocaleString('en', { useGrouping: false });
        var data = this.getMultisigContract(multisigGnosisContractAddress)
            .methods.create(addresses, requiredConfirmationsStr, dailyLimitStr)
            .encodeABI();
        return data;
    };
    ETHMULTISIGTxProvider.prototype.addOwnerEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, newOwnerAddress = params.newOwnerAddress;
        var data = this.getMultisigContract(multisigContractAddress)
            .methods.addOwner(newOwnerAddress)
            .encodeABI();
        return this.submitEncodeData({
            recipients: [
                {
                    address: multisigContractAddress,
                    amount: '0'
                }
            ],
            multisigContractAddress: multisigContractAddress,
            data: data
        });
    };
    ETHMULTISIGTxProvider.prototype.removeOwnerEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, newOwnerAddress = params.newOwnerAddress;
        var data = this.getMultisigContract(multisigContractAddress)
            .methods.removeOwner(newOwnerAddress)
            .encodeABI();
        return this.submitEncodeData({
            recipients: [
                {
                    address: multisigContractAddress,
                    amount: '0'
                }
            ],
            multisigContractAddress: multisigContractAddress,
            data: data
        });
    };
    ETHMULTISIGTxProvider.prototype.replaceOwnerEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, newOwnerAddress = params.newOwnerAddress, oldOwnerAddress = params.oldOwnerAddress;
        var data = this.getMultisigContract(multisigContractAddress)
            .methods.removeOwner(oldOwnerAddress, newOwnerAddress)
            .encodeABI();
        return this.submitEncodeData({
            recipients: [
                {
                    address: multisigContractAddress,
                    amount: '0'
                }
            ],
            multisigContractAddress: multisigContractAddress,
            data: data
        });
    };
    ETHMULTISIGTxProvider.prototype.changeRequirementEncodedData = function (params) {
        var requiredConfirmations = params.requiredConfirmations, multisigContractAddress = params.multisigContractAddress;
        var data;
        var requiredConfirmationsStr = Number(requiredConfirmations).toLocaleString('en', { useGrouping: false });
        data = this.getMultisigContract(multisigContractAddress)
            .methods.changeRequirement(requiredConfirmationsStr)
            .encodeABI();
        return this.submitEncodeData({
            recipients: [
                {
                    address: multisigContractAddress,
                    amount: '0'
                }
            ],
            multisigContractAddress: multisigContractAddress,
            data: data
        });
    };
    ETHMULTISIGTxProvider.prototype.changeDailyLimitEncodedData = function (params) {
        var requiredConfirmations = params.requiredConfirmations, multisigContractAddress = params.multisigContractAddress;
        var data;
        var requiredConfirmationsStr = Number(requiredConfirmations).toLocaleString('en', { useGrouping: false });
        data = this.getMultisigContract(multisigContractAddress)
            .methods.changeDailyLimit(requiredConfirmationsStr)
            .encodeABI();
        return this.submitEncodeData({
            recipients: [
                {
                    address: multisigContractAddress,
                    amount: '0'
                }
            ],
            multisigContractAddress: multisigContractAddress,
            data: data
        });
    };
    ETHMULTISIGTxProvider.prototype.confirmTransactionEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, transactionId = params.transactionId;
        var data = this.getMultisigContract(multisigContractAddress)
            .methods.confirmTransaction(transactionId)
            .encodeABI();
        return data;
    };
    ETHMULTISIGTxProvider.prototype.revokeConfirmationEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, transactionId = params.transactionId;
        var data = this.getMultisigContract(multisigContractAddress)
            .methods.revokeConfirmation(transactionId)
            .encodeABI();
        return data;
    };
    ETHMULTISIGTxProvider.prototype.executeTransactionEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, transactionId = params.transactionId;
        var data = this.getMultisigContract(multisigContractAddress)
            .methods.executeTransaction(transactionId)
            .encodeABI();
        return data;
    };
    ETHMULTISIGTxProvider.prototype.submitEncodeData = function (params) {
        var multisigContractAddress = params.multisigContractAddress, data = params.data;
        var _a = params.recipients[0], address = _a.address, amount = _a.amount;
        var amountStr = Number(amount).toLocaleString('en', { useGrouping: false });
        var contract = this.getMultisigContract(multisigContractAddress);
        return contract.methods.submitTransaction(address, amountStr, data).encodeABI();
    };
    return ETHMULTISIGTxProvider;
}(eth_1.ETHTxProvider));
exports.ETHMULTISIGTxProvider = ETHMULTISIGTxProvider;
//# sourceMappingURL=index.js.map