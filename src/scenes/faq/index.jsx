import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is this Application Useable?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, it is simply a presentation of a react dashboard that could be
            used for any other website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is all the code that allows this site to function following industry
            practices?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. All the code that runs this site is all up-to-date and industry
            standard as of Early March 2023.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What dependancies does this application use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This site uses React, Material UI, Nivo Charts, Formik,
            Fullcalendar, Data Grid and Yup.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why does your profile-user img appear to be blank?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It was originally meant to be an image of Mark Zuckerberg, but I decided not to.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why does the data appear to be nonsensical?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The data has no relation to any actual data. It is all Mock, and
            most of the code for the charts was copied over directly from Nivo
            Charts. Some of said Nivo code had some minor color changes applied
            to them.
          </Typography>
        </AccordionDetails>
        <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is there any issues with the application that I should be aware of?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The only problem you may expect to see, aside from the profile image, is
            how the Github Pages generates the URL. That may mean that reloading the
            page may lead to a 404. Simply return to the page that you started on
            when opening the application.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Accordion>
    </Box>
  );
};

export default FAQ;
