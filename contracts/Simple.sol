/**
 * Source contract for Basic.json
 */
pragma solidity ^0.5.1;

contract Simple {

    event lockCallback(uint256 amount, uint256 allowance, bytes data);

    function fireEvent(bytes memory sig) public {
        emit lockCallback(5,5, sig);
    }
}
