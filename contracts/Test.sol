pragma solidity ^0.8.18;

contract Test {
    function add(uint256 x, uint256 y) public pure returns (uint256){
        return x + y;
    }
    
    function subtract(uint256 x, uint256 y) public pure returns (uint256){
        return x - y;
    }
}