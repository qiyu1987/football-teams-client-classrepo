import React from "react";
import TeamDetails from "./TeamDetails";
import CreatePlayerFormContainer from "./CreatPlayerFormContainer"
import DeleteTeamContainer from './DeleteTeamContainer'
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { loadTeam } from "../actions/teams";


class TeamDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadTeam(Number(this.props.match.params.id));
  }
  redirect = () => {
    this.props.history.push('/teams')
  }
  render() {
    console.log(this.props.team);
    return <div>
    <TeamDetails team={this.props.team} />
    {this.props.loggedIn ? (
      <div>
      <CreatePlayerFormContainer />
      <DeleteTeamContainer redirect={this.redirect}/>
      </div>
      ) : (
        <Link to="/login">Please log in to create teams</Link>
        )}
        </div>
      }
    }
    
    const mapStateToProps = state => ({
      team: state.team,
      loggedIn: state.auth !== null
    });
    
    export default connect(
      mapStateToProps,
      { loadTeam }
      )(TeamDetailsContainer);
      