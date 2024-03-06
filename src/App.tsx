import teamsData from "./CollegeBasketballTeams.json";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

// create the TeamProps interface to define the data types
interface TeamProps {
  school: string;
  mascot: string;
  location: string;
}

// set the data set equal to TeamNames variable
const TeamNames = teamsData.teams;

// The heading section at the top introducing the user to what the site is.
function Welcome() {
  return (
    <h1>
      <span style={{ color: "green", fontWeight: "bold" }}>
        Welcome to the Madness. March Madness. <br />
      </span>
      <br />
      This site is to show the name, mascot, and location
      <br />
      for each team that is playing in March Madness.
      <br />
      Enjoy!
      <br />
      <br />
    </h1>
  );
}

// A team “card” that contains the the team name, mascot, and location
class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>Team: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.mascot}</h3>
        <h3>Location: {oneTeam.location}</h3>
      </div>
    );
  }
}

// A list of team cards that shows all the teams on the list.
function TeamList() {
  return (
    <div>
      {TeamNames.map((oneTeam, index) => (
        <div key={oneTeam.tid}>
          <TeamCard
            school={oneTeam.school}
            mascot={oneTeam.name}
            location={`${oneTeam.city}, ${oneTeam.state}`}
          />
          {index < TeamNames.length - 1 && <br />}{" "}
          {/* Add a line break if it's not the last team */}
        </div>
      ))}
    </div>
  );
}

// App function to call the Welcome and TeamList functions
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
