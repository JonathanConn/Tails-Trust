// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import "./BasicTrust.sol";
import "./RevokableTrust.sol";
import "./TontineTrust.sol";

contract TrustFactory {

    event TrustCreated(address trustAddress, address owner, address beneficiary, uint unlockTime, uint checkInFreq);

    function createTontineTrust(address _beneficiary, uint _checkInFreq) public payable {
        TontineTrust trust = new TontineTrust{value: msg.value}(_beneficiary, _checkInFreq);
        emit TrustCreated(address(trust), msg.sender, _beneficiary, 0, _checkInFreq);
    }

    function createRevokableTrust(address _beneficiary, uint _unlockTime) public payable {
        RevokableTrust trust = new RevokableTrust{value: msg.value}(_unlockTime, _beneficiary);
        emit TrustCreated(address(trust), msg.sender, _beneficiary, _unlockTime, 0);
    }

    function createBasicTrust(address _beneficiary, uint _unlockTime) public payable {
        BasicTrust trust = new BasicTrust{value: msg.value}(_unlockTime, _beneficiary);
        emit TrustCreated(address(trust), msg.sender, _beneficiary, _unlockTime, 0);
    }
}