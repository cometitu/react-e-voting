import Parse from "parse";

export async function addVoter(ID) {
  let user = new Parse.User();
  user.set("username", ID);
  user.set("password", ID);
  user.set("VerificationCode", "");
  user.set("Vote", "");
  await user.signUp();
}

export async function loginVoter(ID) {
  await Parse.User.logIn(ID, ID);
}

export default function getCurrentUser() {
  let currentUser = Parse.User.current();
  return currentUser;
}

export async function saveVerificationCode(verificationCode) {
  const Voter = getCurrentUser();
  Voter.set("VerificationCode", verificationCode);
  await Voter.save();
}

export async function saveVote(vote, bbVote) {
  const Voter = getCurrentUser();
  Voter.set("Vote", vote);
  Voter.set("BBVote", bbVote);
  try {
    await Voter.save();
  } catch (error) {
    console.log("Error saving vote: " + error);
  }
}

export async function saveReportOfProblem(problem) {
  const Voter = getCurrentUser();
  Voter.set("Problem_Reporting", problem);
  try {
    await Voter.save();
  } catch (error) {
    console.log("Error saving report of problem: " + error);
  }
}

export async function getNumberOfVoters(){
  const query = new Parse.Query('User');
    try {
      const count = await query.count();
      console.log(`ParseObjects found: ${count}`);
      return count;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
}
