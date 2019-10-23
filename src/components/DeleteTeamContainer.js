import React from 'react'
import { connect } from 'react-redux'
import { deleteTeam } from '../actions/teams'

class DeleteTeamContainer extends React.Component {
    onClick = () => {
        this.props.deleteTeam(this.props.teamId)
        this.props.redirect()
    }
    render(){
        return <button onClick={this.onClick}>DELETE TEAM</button>
    }
}
const mapStateToProps = state => ({
    teamId: state.team.id
});
export default connect(mapStateToProps,{deleteTeam})(DeleteTeamContainer)