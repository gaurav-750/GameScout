import { Button, Show } from "@chakra-ui/react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem pl="2" bg="white" area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" bg="coral" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem pl="2" bg="yellow.200" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
