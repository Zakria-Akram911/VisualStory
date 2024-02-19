import { Box, Typography ,useMediaQuery} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FrequentlyQuestions = () => {
    const isMobile = useMediaQuery("(max-width:1200px)");
    const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1810px)');
    const fontSize = useMediaQuery('(min-width:1201px) and (max-width:1512px)')

  const questions = [
  { ques: "How does EnchantedPages.Ai work?" ,ans:"ans1"},
    {ques: "Are there any limitations on story creation or image generation?", ans:"ans2"},
   { ques:"What subscription options are available, and what do they include?",ans:"ans3"},
    {ques:"Can I save and share the stories I create?",ans:"ans4"},
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "60px",
        pb:'30px'
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent:"space-evenly",
          alignItems: "center",
          whiteSpace:"nowrap",
          color: "var(--Text, #F8F1E4)",
          fontSize: isMobile ? "20px" : fontSize ?"32px":"48px",
          fontWeight: 400,
          lineHeight: isMobile ?"40px" :"80px",
          width: mediumScreen ? "85%" :"100%"
        }}
      >
        <span>Frequently asked Questions</span>
        {!isMobile &&
         <svg
         xmlns="http://www.w3.org/2000/svg"
         height="2"
         viewBox="0 0 848 2"
         fill="none"
         style={{ marginLeft: isMobile ?"20px" :"120px" }}
       >
         <path d="M0.5 1H847.5" stroke="#F8F1E4" />
       </svg> }
       
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "88%",
          gap: isMobile ? "0vh" :"3vh",
        }}
      >
        {questions.map((question,index) => (
          <Accordion key={index} sx={{ background: "transparent", boxShadow: "none",  '&:before': {
            display: 'none',
        } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  sx={{  color: "var(--Text, #F8F1E4)",}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                m: 0,
                color: "var(--Text, #F8F1E4)",
                fontSize: isMobile ?"16px" : mediumScreen ?"28px":"32px",
                fontWeight: 400,
                lineHeight:  isMobile ?"50px" : mediumScreen?"60px":"80px",
              }}
            >
              {question?.ques}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: 0,
                color: "var(--Text, #F8F1E4)",
                fontSize: isMobile ?"16px" :"22px",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              {question.ans}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FrequentlyQuestions;
