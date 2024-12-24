// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BuyMeCoffee {
    
    struct Coffee{
        address sender;
        string message;
        uint256 timestamp;
    }

    uint256 totalCoffee=0;
    address payable owner; // payable address to recieve funds 

    event newCoffee(address indexed sender, string message, uint256 timestamp); //indexed to filter events
    // will be used to dsiplay the coffee messages

    constructor() {
        owner = payable(msg.sender); // owner is the deployer of the contract
    }

    function byMeACoffee(string memory _message) public payable{

        require(msg.value>0,"Please send some ether to buy me a coffee");

        totalCoffee=totalCoffee+1;  // increment the total coffee count

        payable (owner).transfer(msg.value); // transfer the ether to the owner

        emit newCoffee(msg.sender, _message, block.timestamp);
    }

    function getTotalCoffee() public view returns(uint256){
        return totalCoffee;
    }

    //addresss = 0xA6d8d1a79c86165002b08d8250f180063Edc4d0D

}