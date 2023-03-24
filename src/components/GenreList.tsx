import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";

const GenreList = () => {
  const { genres, isLoading } = useGenres();

  return (
    <>
      {isLoading && (
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="lg"
        />
      )}

      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
