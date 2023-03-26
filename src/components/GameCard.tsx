import { Card, Heading, Image, CardBody, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformList from "./PlatformIconList";
import getOptimizedImage from "./../services/getOptimizedImage";

interface Props {
  game: Game;
}

const GameCard = (Props: Props) => {
  const { game } = Props;

  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={getOptimizedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>

          <Heading fontSize={25}>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
