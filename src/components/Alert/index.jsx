import React, { Component } from 'react'
import { connect } from 'react-redux';

import { show_alert, close_alert } from '../../actions'

import AlertLayout from './AlertLayout'

export class Alert extends Component {
    render() {
        // console.log(this.props);
        
        return (
            <AlertLayout
                is_show={this.props.is_show}
                message={this.props.message}
                close_alert={this.props.close_alert}
            />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        is_show: state.alert.is_show,
        message: state.alert.message,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        close_alert: () => dispatch(close_alert()),
        show_alert: (message) => dispatch(show_alert(message)),
    }
}
Alert = connect(mapStateToProps, mapDispatchToProps)(Alert);
export default Alert