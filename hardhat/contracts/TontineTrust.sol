// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Owner needs to miss 2 check ins before the beneficiary can withdraw
contract TontineTrust is Ownable {
    address public beneficiary;
    uint public checkInFreq;
    uint public lastCheckIn;

    event Withdrawal(uint amount, uint when);

    receive() external payable onlyOwner {}

    constructor( address _beneficiary, uint _checkInFreq) payable {
        beneficiary = _beneficiary;
        checkInFreq = _checkInFreq;
        lastCheckIn = block.timestamp;
    }

    function checkIn() external onlyOwner {
        require (block.timestamp - lastCheckIn >= checkInFreq, "You can't check in yet");
        lastCheckIn = block.timestamp;
    }

    function withdraw() public {
        require(msg.sender == beneficiary, "You aren't the beneficiary");
        require(lastCheckIn + (checkInFreq * 2) <= block.timestamp, "Owner lives");

        uint amount = address(this).balance;

        (bool sent, ) = beneficiary.call{value: amount}("");
        require(sent, "Failed to send Ether");

        emit Withdrawal(amount, block.timestamp);
    }


}
