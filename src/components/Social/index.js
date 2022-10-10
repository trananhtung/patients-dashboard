import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";

export default function Social() {
  return (
    <Box maxW="286px" height="156px" bg="white" p="20px">
      <VStack spacing="3" alignItems="start">
        <HStack>
          <AiFillInstagram fontSize="50px" />
          <Text size="16px" color="#6D728E" noOfLines={1}>
            Instagram
          </Text>
        </HStack>
        <Text color="#2D3779" fontSize="22px" fontWeight="700">
          9,854,205
        </Text>
        <Text color="#6D728E" fontSize="14px">
          Influencers since last month
        </Text>
      </VStack>
    </Box>
  );
}
