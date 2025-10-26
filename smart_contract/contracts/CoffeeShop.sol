// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CoffeeShop {
    address owner;
    constructor(){
        owner = msg.sender;
    }

    // Struct to store coffee purchase info
    struct Coffee {
        address sender;
        string[] itemName;
        uint256 timestamp;
        uint256 amount;
    }

    // List of all coffees bought
    Coffee[] private coffees;

    event CoffeePurchased(
        address indexed buyer,
        string[] itemName,
        uint256 amountInETH,
        uint256 timestamp
    );

    // Receive ETH when user buys
    function buyCoffee(string[] calldata itemName) external payable {
        require(msg.value > 0, "Payment must be greater than 0");

        payable(owner).transfer(msg.value);
        coffees.push(Coffee({
            sender: msg.sender,
            itemName: itemName,
            timestamp: block.timestamp,
            amount: msg.value
        }));
        emit CoffeePurchased(msg.sender, itemName, msg.value, block.timestamp);
    }

    // Return all coffees
    function getAllCoffees() public view returns (Coffee[] memory) {
        return coffees;
    }
}
