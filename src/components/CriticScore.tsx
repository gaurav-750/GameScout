import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
