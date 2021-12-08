export function getEtherScanUrl(_chainId: number | undefined) {
  if (_chainId) {
    if (_chainId === 1) {
      return 'https://etherscan.io/address/';
    } else if (_chainId === 3) {
      return 'https://ropsten.etherscan.io/address/';
    } else if (_chainId === 4) {
      return 'https://rinkeby.etherscan.io/address/';
    } else if (_chainId === 5) {
      return 'https://goerli.etherscan.io/address/';
    } else if (_chainId === 42) {
      return 'https://kovan.etherscan.io/address/';
    }
  }
  return '';
}

export function getChainName(_chainId: number | undefined) {
  if (_chainId) {
    if (_chainId === 1) {
      return 'Mainnet';
    } else if (_chainId === 3) {
      return 'Ropsten';
    } else if (_chainId === 4) {
      return 'Rinkeby';
    } else if (_chainId === 5) {
      return 'Goerli';
    } else if (_chainId === 42) {
      return 'Kovan';
    }
  }
  return 'Unknown';  
}
