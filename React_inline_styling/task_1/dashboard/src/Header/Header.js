import React from 'react';
import logo from "../assets/logo.jpg"
import {StyleSheet, css} from "aphrodite";

function Header() {
    return (
        <>
            <div className={css(styles.header)}>
                <img className={css(styles.image)} src={logo} alt="" />
                <h1 className={css(styles.h1)}>School dashboard</h1>
            </div>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
    },

    image: {
        width: "220px",
    },
    h1: {
        color: "#E0344B",
        fontSize: "35px"
    }
})

export default Header