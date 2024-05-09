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
        <div className={css(styles.menuItem)}
          onClick={() => this.setState({ displayDrawer: false })}>
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

const translateKeyframes = {
  '0%': {
      transform: 'translateY(0px)',
  },
  '20%': {
      transform: 'translateY(-5px)',
  },
  '60%': {
      transform: 'translateY(5px)',
  },
  '90%': {
      transform: 'translateY(-2px)',
  },
  '100%': {
      transform: 'translateY(0px)',
  },
};

const opacityKeyframes = {
  'from': {
      opacity: 0.5,
  },

  'to': {
      opacity: 1,
  },
}

const styles = StyleSheet.create({
  notification: {
    width: "100%",
    position: "relative",
  },
  notifications: {
    backgroundColor: "white",
    border: "2px dashed red",
    position: " absolute",
    width: "35%",
    right: "0",
    top: "40px",
    padding: "15px",
    "@media (max-width: 900px)": {
      width: "100%",
      height: "100vh",
      border: "none",
      cursor: "pointer",
      padding: "0 0 0 20px"
    },
  },
  menuItem: {
    textAlign: "end",
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    ":hover": {
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: "1s",
      animationIterationCount: "3"
    },
    "@media (max-width: 900px)": {
      textAlign: "start",
      padding: "15px",
    }
  },
  button: {
    display: "flex",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  ul: {
    margin: "20px 0 0 10px",
    "@media (max-width: 900px)": {
      listStyleType: "none",
      padding: "10px",
      margin: "0",
    }
  },
})

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
};

export default Notifications;
