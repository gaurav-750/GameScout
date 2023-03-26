import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullEye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const ratingEmojis: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "good", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <>
      <Image {...ratingEmojis[rating]} marginTop={1} />
    </>
  );
};

export default Emoji;
