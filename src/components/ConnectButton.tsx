import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";
import { getChainName } from '../utils';

type Props = {
  handleOpenModal: any;
}

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  const chainName = getChainName(chainId);

  return account ? (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        background="gray.700"
        borderRadius="xl"
        height="100%"
        px="3"
        marginEnd="5"
      >
        <Text color="yellow" fontSize="md">
          {chainName}
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        background="gray.700"
        borderRadius="xl"
        py="0"
      >
        <Box px="3">
          <Text color="white" fontSize="md">
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
          </Text>
        </Box>
        <Button
          onClick={handleOpenModal}
          bg="gray.800"
          border="1px solid transparent"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
        >
          <Text color="white" fontSize="md" fontWeight="medium" mr="2">
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </Text>
          <Identicon />
        </Button>
      </Box>
    </Flex>
  ) : (
    <Button onClick={() => activateBrowserWallet()}>Connect to a wallet</Button>
  );
}