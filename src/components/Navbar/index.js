import {
  Box,
  Flex,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Center,
  Container,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  BellIcon,
  InfoOutlineIcon,
  Search2Icon,
} from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box bg="#2D3779" px={4}>
      <Container maxW="1440px">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading as="h1" size="18px" color="white" noOfLines={1}>
              Dashboard Overview
            </Heading>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <InputGroup
                width="250px"
                border="transparent"
                background="#37428A"
                borderRadius="8px"
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="white" />}
                />
                <Input type="tel" placeholder="Looking for someone?" />
              </InputGroup>
              <Button
                background="#37428A"
                color="white"
                leftIcon={<InfoOutlineIcon />}
                borderRadius="full"
              >
                Help ?
              </Button>
              <IconButton
                background="#37428A"
                color="white"
                aria-label="notification"
                icon={<BellIcon />}
                borderRadius="full"
              ></IconButton>
              <Text as="h1" size="18px" color="white" noOfLines={1}>
                Minhas Asif
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  rightIcon={<ChevronDownIcon />}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
