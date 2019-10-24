import React from "react";
import { connect } from "react-redux";
import { changeTeamName } from "../actions/teams"
import TeamForm from "./TeamForm"
class ChangeTeamNameFormContainer extends React.Component {
    state = {
        name: "",
        id: this.props.teamId
    };
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            id: this.props.teamId
        });
    };
    
    onSubmit = event => {
        event.preventDefault();
        this.props.changeTeamName(this.state);
        this.setState({
            name: ""
        });
    };
    render(){
        return <TeamForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        />
    }
}
const mapStateToProps = state => ({
    teamId: state.team.id
});

export default connect(mapStateToProps,{ changeTeamName })(ChangeTeamNameFormContainer)