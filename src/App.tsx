import { Box, Flex, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem pl="2" area={"nav"} paddingBottom={1}>
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} paddingX={4}>
            <GenreList
              handleGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />

            <Flex marginBottom={3}>
              <Box marginRight={3}>
                <PlatformSelector
                  handleSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                  selectedPlatform={gameQuery.platform}
                />
              </Box>
              <SortSelector
                currentSortOrder={gameQuery.ordering}
                handleSelectedSort={(ordering) =>
                  setGameQuery({ ...gameQuery, ordering })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
