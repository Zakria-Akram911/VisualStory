import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import StoryOutputButton from "./StoryOutputButton";
import bookImage from "../../assets/story-output-book.png";
import imageUrl1 from "../../assets/story-output-image1.png";
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../../utility/books.css";

interface IPage {
  id: number;
  pageNumber: number;
  pageContent: string;
  title: string;
  imgUrl: any;
}

const pages: IPage[] = [
  {
    id: 1,
    title: "Jacob's Pirate Quest for the Golden Anchor",
    pageNumber: 1,
    pageContent:
      "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
    imgUrl: imageUrl1,
  },
  {
    id: 2,
    pageNumber: 2,
    title: "Jacob's Pirate Quest for the Golden Anchor",
    pageContent:
      "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
    imgUrl: imageUrl1,
  },
  {
    id: 3,
    pageNumber: 3,
    title: "Jacob's Pirate Quest for the Golden Anchor",
    pageContent:
      "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
    imgUrl: imageUrl1,
  },
  {
    id: 4,
    pageNumber: 4,
    title: "Jacob's Pirate Quest for the Golden Anchor",
    pageContent:
      "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
    imgUrl: imageUrl1,
  },
  {
    id: 5,
    pageNumber: 5,
    title: "Jacob's Pirate Quest for the Golden Anchor",
    pageContent:
      "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
    imgUrl: imageUrl1,
  },
  {
    id: 6,
    pageNumber: 6,
    title: "Jacob's Pirate Quest for the Golden Anchor",
    pageContent:
      "Join Lily's tale of courage as her character embarks on a moonlit quest to save a magical creature. The captivating story unfolds under the glow of an enchanted moon, accompanied by images that vividly bring each scene to life.",
    imgUrl: imageUrl1,
  },
];

const StoryOutputMain = (props: any) => {
  // const [data, setData] = React.useState(apiData);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const mediumScreen = useMediaQuery(
    "(min-width:901px) and (max-width:1501px)"
  );
  const textAreaRefs = useRef<any>([]);
  const bookRef = useRef<any>();

  if (textAreaRefs.current.length !== pages.length) {
    textAreaRefs.current = Array.from(
      { length: pages.length },
      (_, i) => textAreaRefs.current[i] || React.createRef()
    );
  }

  const handleFlip = (index: number) => {
    if (index % 2 === 0) {
      bookRef.current.pageFlip().flipNext("bottom");
    } else {
      bookRef.current.pageFlip().flipPrev("bottom");
    }
  };

  const flipNext = () => {
    bookRef.current.pageFlip().flipNext("top");
  };
  const flipPrev = () => {
    bookRef.current.pageFlip().flipPrev("bottom");
  };

  return (
    <Box className="story-output-main">
      <Box className="story-output-btns">
        <Grid container columnGap={5} justifyContent="center">
          <Grid item>
            <Button onClick={flipPrev}>
              <StoryOutputButton buttontext="Previous" />
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={flipNext}>
              <StoryOutputButton buttontext="Next" />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          maxWidth: "1050px",
          m: "0 auto",
          // background: `url(${bookImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          className="story-all-content"
        >
          <HTMLFlipBook
            {...props}
            ref={bookRef}
            width={isMobile ? 350 : mediumScreen? 480 : 480}
            height={isMobile ? 600 : 733}
            useMouseEvents={false}
          >
            {pages.map((item: IPage) => (
              <div
                className="page"
                onClick={() => {
                  handleFlip(item.pageNumber);
                }}
              >
                {item.pageNumber % 2 === 1 ? (
                  <div className="page-content">
                    <p
                      className="title"
                      style={{
                        fontSize: isMobile
                          ? "24px"
                          : mediumScreen
                          ? "30px"
                          : "40px",
                        color: "#936037",
                      }}
                    >
                      {item.title}
                    </p>
                    <img
                      src={item.imgUrl}
                      alt="cover image"
                      className="page-image"
                    />
                    <p style={{ color: "#936037" }}>{item.pageContent}</p>
                    <p style={{ color: "#936037", textAlign: "left" }}>
                      {item.pageNumber}
                    </p>
                  </div>
                ) : (
                  <div className="page-content">
                    <p
                      className="title"
                      style={{
                        fontSize: isMobile
                          ? "24px"
                          : mediumScreen
                          ? "30px"
                          : "40px",
                        color: "#936037",
                        visibility: isMobile? "inherit" :"hidden",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ color: "#936037" }}>{item.pageContent}</p>
                    <img
                      src={item.imgUrl}
                      alt="cover image"
                      className="page-image"
                    />
                    <p style={{ color: "#936037", textAlign: "right" }}>
                      {item.pageNumber}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </HTMLFlipBook>
        </Box>
      </Box>
    </Box>
  );
};

export default StoryOutputMain;
