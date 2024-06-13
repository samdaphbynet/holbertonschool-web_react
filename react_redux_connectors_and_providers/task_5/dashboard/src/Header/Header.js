import React, { Component } from 'react';
import logo from "../assets/holberton_logo.jpg"
import { StyleSheet, css } from "aphrodite";
import {logout} from "../actions/uiActionCreators";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AppContext from "../App/AppContext"

export class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {user, logout} = this.props;
        return (
            <>
                <div className={css(styles.header)} id="Header">
                    <img className={css(styles.image)} src={logo} alt="" />
                    <h1 className={css(styles.h1)}>School dashboard</h1>
                </div>
    
                {user && (
                    <div id="logoutSection">
                        <h1>Welcome {user.email} 
                            <a onClick={logout}>
                                <em>(logOut)</em>
                            </a>
                        </h1>
                    </div>
                )}
            </>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        margin: "0 2%",
        alignItems: "center",
    },

    image: {
        width: "220px",
    },
    h1: {
        color: "#E0344B",
        fontSize: "35px",

    }
})

Header.contextType = AppContext;

Header.defaultProps = {
    user: null,
    logout: () => {},
}

Header.propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        user: state.ui.get("user")
    }
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);