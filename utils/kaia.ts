import { ethers } from 'ethers';

export const provider = new ethers.JsonRpcProvider('https://rpc.kaiachain.io');

export async function getUSDTBalance(address: string): Promise<string> {
  const usdtContract = new ethers.Contract('0xYourKaiaUSDTAddress', ['function balanceOf(address) view returns (uint256)'], provider);
  const balance = await usdtContract.balanceOf(address);
  return ethers.formatUnits(balance, 6);
}
