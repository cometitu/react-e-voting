import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Flex,
  Spinner,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveVote } from "../../API/Voter";
import "./Voting.css";

function PopOver({ vote }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    if (vote === "Sarah Wilson (Party F)") {
      const alteredVote = "Sarah Wilson (Party F)";
      await saveVote(vote, alteredVote);
    } else {
      await saveVote(vote, vote);
    }
    navigate("/confirmation");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="blue-btn" width="100%">
          Next
        </Button>
      </PopoverTrigger>
      <PopoverContent className="pop-over-container">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody className="pop-over-body">
          <Text>Are you sure, you want to vote for:</Text>
          <Text className="pop-over-text">{vote}</Text>
          
     
         
        {/*   <Flex>
            <PopoverCloseButton className="no-button">No</PopoverCloseButton>
            <Button
              className="blue-btn"
              mt={0}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner size="sm" mr={"1rem"} />}
              Yes
            </Button>
          </Flex> */}
           
          <div>
          <Text>If <span style={{ color: "#144b83", fontWeight: "bold" }}>
                yes
              </span>, authenticate yourself and submit vote</Text>
            <Text  className="text-margin-top" >Voter ID:</Text>
            <Input bg="white" borderColor="#144b83" ></Input>
            <Text className="text-margin-top">Password:</Text>
            <Input bg="white" borderColor="#144b83" ></Input>
           
            <Button
              className="blue-btn"
              mt={0}
              onClick={handleSubmit}
              disabled={isSubmitting}
              marginTop ={'20px'}
            >
              {isSubmitting && <Spinner size="sm" mr={"1rem"} />} Authenticate
              and submit vote
            </Button>
            <Text className="text-margin-top">
              <span style={{ color: "darkgreen", fontWeight: "bold" }}>
                Your voter ID is:&nbsp; 
              </span>
              <span style={{ color: "darkblue", fontWeight: "bold" }}>
                cometit155@gmail.com
              </span>
            </Text>
            <Text>
              <span style={{ color: "darkgreen", fontWeight: "bold" }}>
                Your password is:&nbsp;
              </span>
              <span style={{ color: "darkblue", fontWeight: "bold" }}>
                QSk47SATw3
              </span>
            </Text>
            <Text color="#b23606" className="text-margin-top">
             <Text>The credentials are only shown to you because it is a study. </Text> 
             <Text>In a real-world system, they will be delivered to you
              </Text>
              <Text>
             via a secure communication channel.</Text>
            </Text>


         {/*    <Text className="text-margin-top">
            Your Pseudonym is: Anonymous Voter-155
            </Text> */}
{/*             <Text className="text-margin-top">If you cannot find your login information, contact your election administrator at agbesisamuel@gmail.com.</Text>
 */}          
            
            </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
