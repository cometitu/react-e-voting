import "./App.css";
import "./Info-Pages/InfoPages.css";
import "./Voting-System/VotingSystem.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import VoteVerification from "./Voting-System/VoteVerification/VoteVerification";
import Confirmation from "./Voting-System/Confirmation/Confirmation";
import VerificationCode from "./Voting-System/VerificationCode/VerificationCode";
import Voting from "./Voting-System/Voting/Voting";
import Info2 from "./Info-Pages/Info-2";
import Info3 from "./Info-Pages/Info-3";
import Welcome from "./Voting-System/Welcome/Welcome";
import Parse from "parse";
import Info1 from "./Info-Pages/Info-1";
import Info0 from "./Info-Pages/Info-0";
import Reporting from "./Voting-System/Reporting/Reporting";
import Error from "./Voting-System/Error/Error";
import IndividualVoteVerification from "./Voting-System/VoteVerification/IndividualVoteVerification";

const PARSE_APPLICATION_ID = "UVxMd3c4qbO9uVtFvStqUEgJSIjMJWYaVZfKL6sL";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
//const PARSE_HOST_URL = "localhost:3000";
const PARSE_JAVASCRIPT_KEY = "S1tyiUfA5PBsAiER8l8K7YqpPXVg1wpCbQ1F7gty";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <div id="app-main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/start" />} />
            <Route path="/start" element={<Info0 />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/info-1" element={<Info1 />} />
            <Route path="/verification-code" element={<VerificationCode />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/info-2" element={<Info2 />} />
            <Route path="/verification" element={<VoteVerification />} />
            <Route
              path="/verification/:id"
              element={<IndividualVoteVerification />}
            />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/info-3" element={<Info3 />} />
            <Route path="/invalid-url" element={<Error />} />
            <Route path="/*" element={<Navigate to="/invalid-url" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
