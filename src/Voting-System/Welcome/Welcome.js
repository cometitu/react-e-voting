import { Button, Text, Image, Grid, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import VotingOverview from "../../assets/Voting-Overview.png";
import { useEffect } from "react";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text">Welcome</h1>

          <Text>Welcome to the Board Election 2023!</Text>
          <Text className="text-margin-top" marginBottom={"2rem"}>
            This election consists of three parts. First, you will get a unique
            verification code, then you will vote. Later on you can use your
            verification code to verify your vote, i.e. check whether your vote
            has been counted correctly. This is important to ensure the
            correctness of the election result.
          </Text>

          <div>
            <Image src={VotingOverview} />
          </div>
         
          <Button
            onClick={() => navigate("/verification-code")}
            className="blue-btn"
            width={"100%"}
            marginTop={"4rem"}
          >
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
