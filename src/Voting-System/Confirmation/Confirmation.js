import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text, Link, Grid } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-narrow">
          <h1 className="blue-text">Thank you for voting!</h1>
          <Text>
            Once all votes have been counted, the results are published on our
            offical webpage.{" "}
          </Text>
          <Text className="text-margin-top">
            Please use this webpage to check, if your vote has been stored
            correctly by finding your unique verification code.
          </Text>
          <Button className="blue-btn" onClick={() => navigate("/info-2")}>
            Next
          </Button>
          <Grid className="info-box"> 
          <Text >You can&nbsp;
          <Link
              className="help-link"
              href="mailto:sagb@itu.dk"
              target={"_blank"}
            >
              email for help or report for any issues
            </Link>
          </Text>
           </Grid> 
        </div>
      </div>
    </div>
  );
}
