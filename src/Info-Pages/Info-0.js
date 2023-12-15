import React from "react";
import "./InfoPages.css";
import { useState } from "react";
import {
  Button,
  List,
  Text,
  Spinner,
  Box,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { getNumberOfVoters } from "../API/Voter";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
/*   const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); */

/*   function handleChangeCheckbox() {
    if (checked) {
      setChecked(false);
      setDisabled(true);
    } else {
      setChecked(true);
      setDisabled(false);
    }
  } */

  const assignARandomRepository = () => {
    const totalParticipants = 200;
    const participantsIndex = Math.floor(Math.random() * totalParticipants);
      if (participantsIndex < totalParticipants / 2) {
        window.location.href =
        "https://app6.res50.itu.dk/info-1";
      }
      else{
        window.location.href =
        "https://app1.res50.itu.dk/instruction";
      }
};


  return (
    <div className="container-info-pages">
      <Box className="inner-box-info padding-top-info-page" maxW={"35rem"}>
        <Text>
          Dear participant, <br /> <br />
          Thank you for taking part in our study. Your opinion is very important
          to us, and by participating you will make a valuable contribution to
          our research.
        </Text>
        <h3 className="title-margin-top">What this project is about</h3>
        <Text>
          In the study, you will be asked to vote using an Internet voting
          system, then view the final results, and then provide us with feedback
          on the system. The main purpose of this study is to investigate and
          measure users attitudes towards an internet voting system.
          <br />
        </Text>
        This survey will take approximately **15 minutes** to complete. You will
        be reimbursed **£2.25** for your participation. 
        <Text>
          <br />
          You can drop out from the survey participation at any time and your
          collected data will be deleted by the researchers. However, in that
          case you will not get the compensation for your participation from the
          Prolific platform. See this&nbsp;
          <a
            href="https://participant-help.prolific.co/hc/en-gb/articles/360022342094-How-do-I-withdraw-my-participation-in-a-study-"
            target="_blank"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            link
          </a>
          &nbsp; for more information on withdrawing from a study before it is
          completed in Prolific.
        </Text>
        <h3 className="title-margin-top">What I am agreeing to</h3>
        <Text>
          I hereby authorize the researchers mentioned on the page to make use
          of the data I provide for their research project for the purpose
          stated above. I also authorize that my anonymized data can be used and
          analyzed by researchers. I have understood the nature and general
          purpose of the research procedure.
        </Text>
        <h3 className="title-margin-top">How we handle and delete the data</h3>
        <Text>
          If a participant divulges any personal information about themselves or
          other persons while voting or filling out the questionnaire, the
          researchers will remove it from the dataset and replace it with a
          placeholder.
        </Text>
        <h3 className="title-margin-top">What data we collect</h3>
        <Text>We will collect information about you, such as:</Text>
        <UnorderedList className="text-margin-top">
          <ListItem>your age,</ListItem>
          <ListItem>gender,</ListItem>
          <ListItem>country of residence,</ListItem>
          <ListItem>educational level and</ListItem>
          <ListItem>your computer's IP address</ListItem>
        </UnorderedList>
        <h3 className="title-margin-top">How we use the data</h3>
        <Text>
          These data, apart from your computer's IP address, will be used to
          derive statistical measures of users' attitudes towards internet
          voting systems. The data might be referenced or quoted, but not
          printed in full unless it is completely anonymized, in the published
          research reports and other academic publications. Your computer IP
          address is stored seperately from your personal data.
        </Text>
        <h3 className="title-margin-top">Who has access to the data?</h3>
        <Text>
          The researchers have access to the original data until it has been
          edited to replace given personal information with placeholders as to
          anonymize it.
        </Text>
        <h3 className="title-margin-top">Third Parties</h3>
        <UnorderedList>
          <ListItem className="text-margin-top">
            SurveyXact: SurveyXact, a third-party service, is used to conduct
            the survey. Personal information (gender, age, country of residence,
            and level of education) will be collected through the questions and
            stored on the SurveyXact platform. For more information, please see
            SurveyXact's privacy statement &nbsp;
            <a
              href="https://rambollxact.com/cookie-and-privacy-policy"
              target="_blank"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              link
            </a>.
          </ListItem>
          <ListItem className="text-margin-top">
            Cookies: We also use cookies to track your progress through the
            study, and these cookies are deleted at the end of the study.
          </ListItem>
          </UnorderedList>
         <h3 className="title-margin-top">Researchers</h3>
         <Text>For more information about the survey, feel free to contact us.</Text>
         <br />
        <UnorderedList>
          <ListItem>
          Samuel Agbesi, IT University of Copenhagen (sagb@itu.dk)
          </ListItem>
          <ListItem>
          Oksana Kulyk, IT University of Copenhagen (okku@itu.dk)
          </ListItem>
          <ListItem>Jurlind Budurush, IT University of Copenhagen (jurb@itu.dk)</ListItem>
          <ListItem>Asmita Dalela (asmita.dalela@gmail.com)</ListItem>
          <ListItem>Christina Nissen, IT University of Copenhagen (chfn.itu.dk)</ListItem>
        </UnorderedList>
        <br />
         <br />
        <Text>By pressing the <strong>"Next"</strong> button, you freely and knowingly accept that you have read and understood the provided information.</Text>
        <Button
          onClick={() => assignARandomRepository()
          }
          className="red-btn"
       /*    disabled={disabledButton} */
          id="submit-button"
        >
         {/*  {isSubmitting && <Spinner size="sm" mr={"1rem"} />} */}
          Next
        </Button>
      </Box>
    </div>
  );
}
