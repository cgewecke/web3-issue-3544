/**
 * Source contract for Basic.json
 */
pragma solidity ^0.4.24;

contract Simple {

    event lockCallback(uint256 amount, uint256 allowance, bytes data);

    function public_fireEvent(bytes sig) public {
      emit lockCallback(5,5, sig);
    }

    function external_fireEvent(bytes sig) external {
        emit lockCallback(5,5, sig);
    }
}
