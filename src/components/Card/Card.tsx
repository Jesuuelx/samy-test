import { WrapperCard } from "./Card.style";
import IconLike from "/svgs/like.svg";
import IconUnLike from "/svgs/unlike.svg";
import IconReload from "/svgs/reload.svg";
import { useMemo, useState } from "react";
import { padWithZeros, formatPrice } from "../../helpers/utils";
import { useMediaQuery } from "react-responsive";
import Loader from "../Loader/Loader";
import { postImages } from "../../services/imagesApi";

interface CardProps {
  img: string;
  liked: boolean;
  id: number;
  author: string;
  title: string;
  likesCount: number;
  price: number;
}

const Card = ({
  img,
  liked,
  author,
  title,
  likesCount,
  price,
  id,
}: CardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(liked);

  const [loading, setLoading] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(likesCount);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const handleImageLoad = () => {
    setLoading(false);
  };

  const likesWidthZeros = useMemo(() => padWithZeros(counter, 3), [counter]);

  const handleLike = () => {
    postImages(id).then(() => {
      setIsLiked(!isLiked);
      setCounter(isLiked ? counter - 1 : counter + 1);
    });
  };

  return (
    <WrapperCard>
      {isDesktop && (
        <div className="card__likes-absolute">
          <img
            src={isLiked ? IconLike : IconUnLike}
            alt="card-like-unlike"
            onClick={handleLike}
            className="card__likes-like__absolute"
          />
          <p>{likesWidthZeros}</p>
          <img
            src={IconReload}
            alt="icon-reload"
            className="card__likes-unlike__absolute"
          />
          <p>000</p>
        </div>
      )}
      <div className="card__price">
        <span> {formatPrice(price)}</span>
      </div>
      {loading && (
        <div className="card__img">
          <Loader
            type="spinningBubbles"
            color="#439365"
            width="100%"
            height="100%"
          />
        </div>
      )}
      <img
        className="card__img"
        src={img}
        alt="card"
        onLoad={handleImageLoad}
      />
      <div className="card__description">
        <p>{title}</p>
        <span>
          by
          <span>{author}</span>
        </span>
      </div>
      {!isDesktop && (
        <div className="card__likes">
          <div className="card__likes-like">
            <img
              src={isLiked ? IconLike : IconUnLike}
              alt="card-like-unlike"
              onClick={handleLike}
            />
            <p>{likesWidthZeros}</p>
          </div>
          <div className="card__likes-border" />
          <div className="card__likes-dislike">
            <img src={IconReload} alt="" />
            <p>000</p>
          </div>
        </div>
      )}
    </WrapperCard>
  );
};

export default Card;
