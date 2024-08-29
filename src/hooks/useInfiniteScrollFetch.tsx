import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { getImages } from "../services/imagesApi";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

interface DataImagesProps {
  img: string;
  liked: boolean;
  id: number;
  author: string;
  title: string;
  likesCount: number;
  price: number;
}

interface ImagesApiProps {
  img: string;
  liked: boolean;
  id?: number;
  author: string;
  title: string;
  likes_count: number;
  price: number;
  main_attachment: {
    big: string;
    small: string;
  };
}

const PAGE_SIZE = 5;

const useInfiniteScrollFetch = () => {
  const [dataImagesTotal, setDataImagesTotal] = useState<DataImagesProps[]>([]);
  const [dataImages, setDataImages] = useState<DataImagesProps[]>([]);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState({
    stateError: false,
    message: "an error occurred",
  });
  const navigate = useNavigate();
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();
  const { search = "", page: initialPage = 1 } = queryString.parse(
    location.search
  );
  const [page, setPage] = useState<number>(initialPage as number);
  const [value, setValue] = useState<string>(search as string);
  const [isFiltering, setIsFiltering] = useState(false);

  const loadMoreImages = (currentPage: number) => {
    getImages()
      .then(({ data }) => {
        const images = data.map(
          ({
            author,
            id,
            liked,
            likes_count,
            main_attachment,
            title,
            price,
          }: ImagesApiProps) => {
            return {
              author,
              id,
              liked,
              title,
              price,
              likesCount: likes_count,
              img: isDesktop ? main_attachment.big : main_attachment.small,
            };
          }
        );
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        const endIndex = currentPage * PAGE_SIZE;
        const newImages = images.slice(startIndex, endIndex);

        setDataImagesTotal(images);
        setDataImages((prevImages) => [...prevImages, ...newImages]);
        setHasMore(currentPage < 3);
      })
      .catch(() => {
        setError({
          ...error,
          stateError: true,
        });
      });
  };

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      if (!isFiltering) {
        if (hasMore) {
          if (page < 3) {
            setPage((prevPage: number) => {
              if (prevPage < 3) {
                return prevPage + 1;
              } else {
                return prevPage;
              }
            });
          }
        }
      }
    }
  };

  useEffect(() => {
    if (value.length > 3 && dataImagesTotal.length > 0) {
      const filteredImages = dataImagesTotal.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setDataImages(filteredImages);
      setIsFiltering(true);
      setHasMore(false);
      setLoading(false);
      setPage(1);
    } else if (value.length >= 0 && value.length < 3 && isFiltering) {
      setDataImages([]);
      setHasMore(true);
      setLoading(true);
      setIsFiltering(false);

      loadMoreImages(page);
    }
  }, [value]);

  useEffect(() => {
    if (isFiltering) {
      setPage(1);
      return;
    }
    navigate(`?page=${page}&search=${value}`);
    loadMoreImages(page);
  }, [page]);

  useEffect(() => {
    if (dataImages.length > 0) setLoading(false);
  }, [dataImages]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {}, [page]);

  return {
    dataImages,
    loading,
    error,
    value,
    setValue,
    hasMore,
    isFiltering,
    page,
  };
};

export default useInfiniteScrollFetch;
