// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BasicTrust is Ownable {
    uint public unlockTime;

    event Withdrawal(uint amount, uint when);
    event Revoked(uint when);

    receive() external payable onlyOwner {}

    constructor( uint _unlockTime, address _beneficiary) payable {
        require( block.timestamp < _unlockTime, "Unlock time should be in the future" );
        unlockTime = _unlockTime;   
        transferOwnership(_beneficiary);
    }

    function withdraw() public onlyOwner {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");

        uint amount = address(this).balance;

        (bool sent, ) = owner().call{value: amount}("");
        require(sent, "Failed to send Ether");

        emit Withdrawal(amount, block.timestamp);
    }
}
