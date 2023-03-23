import {
  Card,
  CardHeader,
  Heading,
  Image,
  Text,
  CardBody,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = (Props: Props) => {
  const { game } = Props;
  console.log("game", game);

  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading size="md">{game.name}</Heading>
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
