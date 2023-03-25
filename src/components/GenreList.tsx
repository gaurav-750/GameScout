import {
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./../hooks/useGenres";

interface Props {
  handleGenre: (genre: Genre) => void;
}

const GenreList = ({ handleGenre }: Props) => {
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
              <Button
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
