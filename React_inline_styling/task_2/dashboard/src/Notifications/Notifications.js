import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import {StyleSheet, css} from 'aphrodite';
import close from '../assets/close.png';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsReadonly = this.markAsRead.bind(this)

    this.state = {
      displayDrawer: true,
      prevListLength: 0
    };
  }

  componentDidMount() {
    this.setState({ prevListLength: this.props.listNotifications.length });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listNotifications.length !== this.props.listNotifications.length) {
      this.setState({ prevListLength: prevProps.listNotifications.length });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > nextState.prevListLength;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications } = this.props;
    const { displayDrawer } = this.state;

    return (
      <div className={css(styles.notification)}>
        <div className={css(styles.menuItem)} onClick={() => this.setState({ displayDrawer: !displayDrawer })}>
          Your notifications
        </div>

        {displayDrawer && (
          <div className={css(styles.notifications)}>

            <button className={css(styles.button)}
              onClick={() => this.setState({ displayDrawer: !displayDrawer })}
              aria-label='close'>
              <img style={{ width: "15px" }} src={close} alt="button close" />
            </button>
            <p>Here is the list of notifications</p>

            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={() => this.markAsRead(notification.id)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  notification: {
    width: "30%",
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  button: {
    display: "flex",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    right: "10px",
    top: "10px"
  },
  menuItem: {
    textAlign: "end",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold"
  },
  notifications: {
    border: "2px dashed red",
    position: "relative",
    padding: "15px",
  },
  ul: {
    margin: "20px 0 0 10px"
  },
  default: {
    color: "blue"
  },
  urgent: {
    color: "red"
  }
})

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
};

export default Notifications;
