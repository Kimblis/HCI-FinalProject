import { Box, HStack, Radio } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface StarProps{
  rating: number;
  count?: number;
  size?: number;
  onRatingSet?: (rating: number) => void;
  isInput?: boolean
}

export const Star: React.FC<StarProps> = ({ rating, onRatingSet, count = 5, size = 24, isInput = false }) => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <HStack marginTop="-20px">
      {[...Array(count)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            key={index}
            as="label"
            style={{color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}}
            onMouseEnter={() => isInput && setHover(ratingValue)}
            onMouseLeave={() => isInput && setHover(null)}
          >
            <Radio
              name="rating"
              onChange={() => onRatingSet && isInput && onRatingSet(ratingValue)}
              value={ratingValue.toString()}
              hidden={true}
            />
            <FaStar
              cursor={"pointer"}
              size={size || 20}
            />
          </Box>
        );
      })}
    </HStack>
  );
}
