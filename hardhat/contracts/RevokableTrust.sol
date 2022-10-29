// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RevokableTrust is Ownable {
    uint public unlockTime;
    address public beneficiary;

    event Withdrawal(uint amount, uint when);
    event Revoked(uint when);

    receive() external payable onlyOwner {}

    constructor( uint _unlockTime, address _beneficiary) payable {
        require( block.timestamp < _unlockTime, "Unlock time should be in the future" );
        unlockTime = _unlockTime;
        beneficiary = _beneficiary;
    }

    function withdraw() public {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == beneficiary, "You aren't the beneficiary");

        uint amount = address(this).balance;

        (bool sent, ) = beneficiary.call{value: amount}("");
        require(sent, "Failed to send Ether");

        emit Withdrawal(amount, block.timestamp);
    }

    function revoke() public onlyOwner {
        (bool sent, ) = owner().call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");

        emit Revoked(block.timestamp);
    }

}
