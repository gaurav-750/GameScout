import {
  Card,
  CardHeader,
  Heading,
  Image,
  Text,
  CardBody,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformList from "./PlatformIconList";

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

          <HStack justifyContent="space-between">
            <PlatformList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
