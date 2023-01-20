import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaHome, FaList, FaUsers } from "react-icons/fa";
import "../Styles/main.css";
import voting from './voting.png';
import icon from './icon.png';

const VotingList = () => {


  return (
    <nav>
      <div className="page">
        <header>
          <h3><img src={voting} height="40" width="40" style={{ position: 'relative' }} alt="login" /></h3>

          <Link to="navbar"><button className="button"><FaHome />  Overview</button></Link>

          <Link to="votinglist"><button className="button"><FaList />  Ballot</button></Link>
          <Link to="users"><button className="button"><FaUsers />  Voters</button></Link>
          <Link to="/loginform"><button className="nav-btn">
            <FaLock />
          </button>
          </Link>
        </header>
        <br></br>
        <br></br>
        <div className="p1">&nbsp; &nbsp; &nbsp; &nbsp;<FaList />  Ballot</div>
        <br></br>

        <div className="cover">
          <form className="myform">

            <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />

            <p className="vote-count"></p>
            <center>
              <button
                class="vote-btn"
                data-default-text="Vote This Dish Up!"
                data-alt-text="Thanks for Voting">
                Vote
              </button>
            </center>
            <br></br>
            <br></br>
            <br></br>
            <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />

            <p className="vote-count"></p>
            <center>
              <button
                class="vote-btn"
                data-default-text="Vote This Dish Up!"
                data-alt-text="Thanks for Voting">
                Vote
              </button>
            </center>

            <br></br>
            <br></br>
            <br></br>
            <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />

            <p className="vote-count"></p>
            <center>
              <button
                class="vote-btn"
                data-default-text="Vote This Dish Up!"
                data-alt-text="Thanks for Voting">
                Vote
              </button>
            </center>

          </form>

          <div className="cover1">
            <form className="myform">

              <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />

              <p className="vote-count"></p>
              <center>
                <button
                  class="vote-btn"
                  data-default-text="Vote This Dish Up!"
                  data-alt-text="Thanks for Voting">
                  Vote
                </button>
              </center>
              <br></br>
              <br></br>
              <br></br>
              <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />

              <p className="vote-count"></p>
              <center>
                <button
                  class="vote-btn"
                  data-default-text="Vote This Dish Up!"
                  data-alt-text="Thanks for Voting">
                  Vote
                </button>
              </center>

              <br></br>
              <br></br>
              <br></br>
              <img src={icon} height="120" width="120" style={{ position: 'relative' }} alt="login" />

              <p className="vote-count"></p>
              <center>
                <button
                  class="vote-btn"
                  data-default-text="Vote This Dish Up!"
                  data-alt-text="Thanks for Voting">
                   Vote
                </button>
              </center>

            </form>
          </div>
        </div>
      </div>

    </nav>

  );
};

export default VotingList;