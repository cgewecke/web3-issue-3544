# web3-issue-3544

Attempt to reproduce events bytes param decoding bug


## Install
```
yarn
```

## Run
```
npx truffle test
```

## Example Output
```
cgewecke$ npx truffle version

Truffle v5.1.27 (core: 5.1.27)
Solidity v0.5.16 (solc-js)
Node v10.15.3
Web3.js v1.2.1

cgewecke$ npx truffle test

Compiling your contracts...
===========================
> Compiling ./contracts/Simple.sol
> Artifacts written to /var/folders/_p/1jdl7zfx1473cwzhqsz8gx4r0000gn/T/test-2020428-60487-up3dfg.hlbjc
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



  Contract: Simple
web3 version: 1.2.8
decoding log!
log.data --> 0x0000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000004abe985cb00000000000000000000000000000000000000000000000000000000
    ✓ fires (2220ms)


  1 passing (2s)


```
