import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from '../utils/utils';

import CourseList from "../CourseList/CourseList"
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDrawer: false,
            listCourses: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 },
            ],
            listNotifications: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
              ]
        }
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    handleDisplayDrawer = () => {
        this.setState({
            displayDrawer: true
        })
        console.log("handleDisplayDrawer")
    }

    handleHideDrawer = () => {
        this.setState({
            displayDrawer: false
        })
        console.log("handleHideDrawer")
    }

    render() {
        const { isLoggedIn } = this.props;
        const { listCourses, listNotifications } = this.state;

        return (
            <>
                <Notifications 
                    listNotifications={listNotifications}
                    displayDrawer={this.state.displayDrawer}
                    handleDisplayDrawer={this.handleDisplayDrawer}
                    handleHideDrawer={this.handleHideDrawer}
                />
    
                <div className={css(styles.app)}>
                    <Header />
                </div>
                
                <div className={css(styles.body)}>
                    {!isLoggedIn ? <BodySectionWithMarginBottom title="Log in to continue">
                                            <Login />
                                        </BodySectionWithMarginBottom>
                                    : 
                                        <BodySectionWithMarginBottom title="Course list">
                                            <CourseList listCourses={listCourses}/>
                                        </BodySectionWithMarginBottom>
                    }
                
                </div>

                <div className={css(styles.bodySection)}>
                    <BodySection title="News from the School">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat exercitationem necessitatibus voluptatum quae quos adipisci autem repellendus repudiandae dicta consectetur!</p>
                    </BodySection>
                </div>
    
                <div className={css(styles.footerParent)}>
                    <div className={css(styles.footer)}>
                        <Footer />
                    </div>
                </div>
            </>
        );
    }
}

App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    logOut: () => {}
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
}

const styles = StyleSheet.create({
    app: {
        borderBottom : '3px solid red',
    },

    body: {
        display: "flex",
        justifyContent: "center"
    },

    bodySection: {
        margin: "0 10%",
        "@media (max-width: 400px)": {
            border: "none",
        }
    },
    footerParent: {
        position: "relative",
        width: "100%",
        height: "70px"
    },
    footer: {
        width: "100%",
        borderTop: "3px solid red",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "0",
        backgroundColor: "white"
    },
})

export default App;
