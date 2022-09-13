const { sumTokens2, nullAddress } = require('../helper/unwrapLPs')

const contract = "0xD0A03C69a55b8915e587e5343dfD1A17e8FD83c2"

async function tvl(time, ethBlock, { dogeChain: block }) {
  return sumTokens2({ tokens: [nullAddress], owner: contract, block, chain: 'Dogechain', })
}

module.exports = {
  methodology: `We count the WDOGE on ${contract}`,
  dogeChain: {
    tvl
  }
}