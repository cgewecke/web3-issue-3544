const Simple = artifacts.require('Simple');
const util = require('util');

const Web3 = require('web3');
const web3 = new Web3();

const abi = web3.eth.abi;
const isAddress = web3.utils.isAddress;

const decodeEvents = ( receipt, contractAbi, eventName) => {
  const eventAbi = contractAbi.filter(abi => abi.name === eventName && abi.type === 'event')[0]
  const eventSignature = abi.encodeEventSignature(eventAbi)
  const eventLogs = receipt.rawLogs.filter(l => l.topics[0] === eventSignature)
  return eventLogs.map(log => {
    log.event = eventAbi.name

    console.log('decoding log!')
    console.log('log.data --> ' + log.data)

    log.args = abi.decodeLog(eventAbi.inputs, log.data, log.topics.slice(1))

    // undo checksumed addresses
    Object.keys(log.args).forEach(arg => {
      const value = log.args[arg]
      if (isAddress(value)) log.args[arg] = value.toLowerCase()
    })

    return log
  })
}

contract('Simple', function(accounts){

  it('fires', async function(){
    console.log('web3 version: ' + web3.version);

    const simple = await Simple.new();
    const r = await simple.fireEvent('0xabe985cb');

    decodeEvents( r.receipt, Simple.abi, 'lockCallback');

  })
})
