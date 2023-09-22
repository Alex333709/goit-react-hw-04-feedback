import { Component } from 'react';
import { NotificationMessage } from './Notification.stuled'; // Make sure this matches your filename
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    const { message } = this.props;
    return <NotificationMessage>{message}</NotificationMessage>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
