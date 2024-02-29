import { Box, Button, Grid, useMediaQuery, Typography } from "@mui/material";
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
  const isMobile = useMediaQuery("(max-width: 900px)");
  const mediumScreen = useMediaQuery(
    "(min-width:901px) and (max-width:1501px)"
  );
  const [disableNext, setDisableNext] = React.useState<number>(0)
  const [disablePrev, setDisablePrev] = React.useState<number>(0)
  const bookRef = useRef<any>();

  //Function to flip to next page
  const flipNext = () => {
    bookRef.current.pageFlip().flipNext();
    //setTimeout is used as the pageIndex is updated after the animation is completed
    //so we have to set the time for timeout function equal to flipping time used in 
    //the HTMLFlipBook component. So, the page index would be updated in state 
    //after the library updates it.
    setTimeout(() => {
      setDisableNext(bookRef.current.pageFlip().getCurrentPageIndex());
      setDisablePrev(bookRef.current.pageFlip().getCurrentPageIndex());
    }, 1000);
  };

  //Function to flip to previous page
  const flipPrev = async() => {
    await bookRef.current.pageFlip().flipPrev();
    //setTimeout serves the same purpose as serves in flipNext
    setTimeout(() => {
      setDisablePrev(bookRef.current.pageFlip().getCurrentPageIndex());
      setDisableNext(bookRef.current.pageFlip().getCurrentPageIndex());
    }, 1000);
  };

  return (
    <Box className="story-output-main">
      <Box className="story-output-btns" sx={{display: isMobile? "none": "inherit"}}>
        <Grid container columnGap={5} justifyContent="center" ref={bookRef}>
          <Grid item>
            <Button
              sx={{
                borderRadius: "9px",
                border: "3px solid #A67334",
                background: "#CB9A64",
                p: "2px 2px",
                "&:hover": {
                  bgcolor: "#5C4033",
                },
              }}
              disabled={disablePrev === 0 ? true : false}
              onClick={flipPrev}
            >
              <Box
                sx={{
                  width: isMobile ? "100px" : mediumScreen ? "200px" : "270px",
                  borderRadius: "9px",
                  border: "3px solid #A67334",
                  background: disablePrev === 0 ? "transperant" : "var(--button-gold, linear-gradient(179deg, #E0B65D 25.23%, #F0D191 95.58%, rgba(255, 255, 255, 0.00) 183.3%))"
                }}
              >
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    color: "#47371F",
                    fontSize: isMobile
                      ? "16px"
                      : mediumScreen
                      ? "18px"
                      : "25px",
                    fontWeight: 400,
                    lineHeight: isMobile
                      ? "45px"
                      : mediumScreen
                      ? "40px"
                      : "58px",
                    textTransform: "uppercase",
                  }}
                >
                  Previous
                </Typography>
              </Box>
            </Button>
          </Grid>
          <Grid item>
          <Button
              sx={{
                borderRadius: "9px",
                border: "3px solid #A67334",
                background: "#CB9A64",
                p: "2px 2px",
                "&:hover": {
                  bgcolor: "#5C4033",
                },
              }}
              disabled={disableNext + 2 === pages.length ? true : false}
              onClick={flipNext}
            >
              <Box
                sx={{
                  width: isMobile ? "100px" : mediumScreen ? "200px" : "270px",
                  borderRadius: "9px",
                  border: "3px solid #A67334",
                  background: disableNext + 2 === pages.length  ? "transperant" : "var(--button-gold, linear-gradient(179deg, #E0B65D 25.23%, #F0D191 95.58%, rgba(255, 255, 255, 0.00) 183.3%))"
                }}
              >
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    color: "#47371F",
                    fontSize: isMobile
                      ? "16px"
                      : mediumScreen
                      ? "18px"
                      : "25px",
                    fontWeight: 400,
                    lineHeight: isMobile
                      ? "45px"
                      : mediumScreen
                      ? "40px"
                      : "58px",
                    textTransform: "uppercase",
                  }}
                >
                  Next
                </Typography>
              </Box>
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
        <Box className="story-all-content">
          <HTMLFlipBook
            {...props}
            ref={bookRef}
            width={isMobile ? 350 : 500}
            height={isMobile ? 550 : 733}
            size="stretch"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            mobileScrollSupport={true}
            usePortrait={true}
            flippingTime={isMobile ? 1500 : 1000}
            disableFlipByClick={false}
            useMouseEvents={true}
          >
            {pages.map((item: IPage) => (
              <div
                className="page"
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
                        visibility: isMobile ? "inherit" : "hidden",
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
