import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Container, Grid, GridItem, HStack } from "@chakra-ui/react";
import Calendar from "react-calendar";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <Navbar />
      <Container maxW="1440px">
        <Sidebar>
          <Grid templateColumns="9fr 3fr" gap={6}>
            <GridItem w="100%" bg="#F8F9FD" boxShadow="0px 8px 10px 0px #F4F7FF" p="3">
            <Grid templateColumns="1fr 1fr 1fr" gap={4}>
                <Social />
                <Social />
                <Social />
              </Grid>
            </GridItem>
            <GridItem w="100%" bg="white" boxShadow="0px 8px 10px 0px #F4F7FF" p="3">
            <Calendar />
            </GridItem>
          </Grid>
        </Sidebar>
      </Container>
    </div>
  );
}

export default App;
