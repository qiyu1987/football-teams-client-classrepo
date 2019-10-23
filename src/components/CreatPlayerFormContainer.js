import React from "react";
import { connect } from "react-redux";
import { createPlayer } from "../actions/teams";
import PlayerForm from "./PlayerForm";

class CreatePlayerFormContainer extends React.Component {
  state = {
    name: "",
    number:"",
    teamId:null
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      teamId: this.props.teamId
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createPlayer(this.state);
    this.setState({
      name: "",
      number:"",
    });
  };

  render() {
    return (
      <PlayerForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
const mapStateToProps = state => ({
    teamId: state.team.id
});
export default connect(
  mapStateToProps,
  { createPlayer }
)(CreatePlayerFormContainer);
