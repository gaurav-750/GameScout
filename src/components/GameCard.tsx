import { Card, CardHeader, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = (Props: Props) => {
  const { game } = Props;
  console.log("game", game);

  //
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardHeader>
          <Heading size="md">{game.name}</Heading>
        </CardHeader>
      </Card>
    </>
  );
};

export default GameCard;
