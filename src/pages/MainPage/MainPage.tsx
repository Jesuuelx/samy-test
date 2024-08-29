import { WrapperMain } from "./MainPage.style";

import Card from "../../components/Card/Card";

import Logo from "/svgs/logo.png.svg";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import useInfiniteScrollFetch from "../../hooks/useInfiniteScrollFetch";

const MainPage = () => {
  const {
    dataImages,
    error,
    loading,
    hasMore,
    value,
    setValue,
    isFiltering,
    page,
  } = useInfiniteScrollFetch();

  return (
    <WrapperMain isfilter={isFiltering}>
      <div className="wrapper__header-main">
        <div className="wrapper__main">
          <div className="main__grid-header">
            <img src={Logo} alt="logo" />
            <Input value={value} setValue={setValue} page={page} />
          </div>
        </div>
      </div>
      <div className="wrapper__main-content">
        <div className="wrapper__main">
          {error.stateError || (dataImages.length == 0 && !loading) ? (
            <div className="main__grid-error">
              <p>{error.message}</p>
            </div>
          ) : (
            <div className="main__grid-images">
              {loading ? (
                <div className="main__grid-loading">
                  <Loader color="#00000" type="bubbles" />
                </div>
              ) : (
                dataImages.map(
                  ({ id, author, img, liked, likesCount, title, price }) => (
                    <Card
                      key={id}
                      author={author}
                      img={img}
                      liked={liked}
                      likesCount={likesCount}
                      title={title}
                      price={price}
                      id={id}
                    />
                  )
                )
              )}
            </div>
          )}
          {hasMore && (
            <div className="main__grid-loading">
              <Loader
                color="#00000"
                type="bubbles"
                width="40px"
                height="40px"
              />
            </div>
          )}
        </div>
      </div>
    </WrapperMain>
  );
};

export default MainPage;
