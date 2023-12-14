import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";
import "./InfoPages.css";

export default function Info2() {
  const navigate = useNavigate();
  return (
    <div className="container-info-pages">
      <div className="inner-box-info centered-info-page">
        {/*  <h2 className="h2-info-pages">
          You have completed the first part of the study!
        </h2> */}
        <Text className="medium-body-text-info">
          Dear participant,
        </Text> 
        <Text className="medium-body-text-info">
          {/* However, since this is a study,  */}
          You have now completed the voting part of the study. You will now be
          forwarded to the page where you would be able to view the election
          results - note, in a real-world election this page will only be
          available after the election has ended. To move to the next stage,
          click “Next” The results are already up.{" "}
          {/*Please
          follow the instruction letter to verify your vote now!*/}
        </Text>
        <Button
          className="red-btn"
          mt={"1rem"}
          onClick={() => navigate("/verification")}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
