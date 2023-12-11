import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Text, Button, GridItem, Grid } from "@chakra-ui/react";
import "./InfoPages.css";
import Instructions from "../assets/Instructions_e-voting.pdf";
import { downloadFile } from "../utils";
import getCurrentUser, { addVoter, loginVoter } from "../API/Voter";

export default function Info1() {
  const navigate = useNavigate();
  const voter = getCurrentUser();


  const downloadInstructions = () => {
    downloadFile(Instructions, "Board-Election-2023.pdf");
  };

  const submitForm = () => {
      let rndInt = Math.floor(Math.random() * 901) + 100;
    if (voter === null) {
      rndInt = rndInt.toString();
      addVoter(rndInt).then(
        (resolveSignUp) => {
          navigate("/welcome");
          console.log("signup")
        }
      );
    } else {
      rndInt = voter.attributes.username;
      loginVoter(rndInt).then(
        (resolveLogIn) => {
          navigate("/welcome");
          console.log("login")
        }
      );
    }
  };



  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">Study Instructions</h2>
        <br></br>
        <Text className="centered-info-page">
          For the purpose of this study, you are a board member about to vote
          online in the board election. Your task in this study is to cast your
          vote for your preferred candidate for the Board Chairperson and Board
          Secretary positions.
        </Text>
        <br />
        <Text className="centered-info-page">
          During the voting, you will be asked to authenticate using the
          credentials shown to you in the voting interface. Note, in a
          real-world elections the credentials will be issued to you separately
          using secure communication channels and will not be displayed anywhere
          in the system.
        </Text>
        <br />
        <Text className="centered-info-page">
          You can also download these instructions for a later reference by
          clicking on the <strong><span style={{ color: '#7c2503', fontWeight: 'bold' }}>Download</span></strong>&nbsp;below. When you are ready to
          start the study, please click <strong><span style={{ color: '#7c2503', fontWeight: 'bold' }}>Next</span></strong>&nbsp;.
        </Text>
        <div style={{ display: 'flex' }}>
          <Button
            className="red-btn"
            mt="1rem"
            onClick={() => downloadInstructions()}
            style={{ marginRight: '15px' }} // Adjust the margin here
          >
            Download
          </Button>
          <Button
          onClick={()=> submitForm()}
            className="red-btn"
            mt="1rem"
            style={{ marginLeft: '1px' }} // Adjust the margin here
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
