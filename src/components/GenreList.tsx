import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./../hooks/useGenres";

interface Props {
  handleGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ handleGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

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

      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                noOfLines={1}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                colorScheme={genre.id === selectedGenre?.id ? "green" : "gray"}
                variant="link"
                onClick={() => handleGenre(genre)}
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
