import React from "react";
import { connect } from "react-redux";
import {changeTeamName} from "../actions/teams"
import TeamForm from "./TeamForm"
class ChangeTeamNameFormContainer extends React.Component {
    state = {
        name: ""
    };
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
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

export default connect(null,changeTeamName)(ChangeTeamNameFormContainer)