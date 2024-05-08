import React, { useRef } from "react";
import {StyleSheet, css} from "aphrodite";

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const focusInput = (ref) => {
        ref.current.focus()
    }
    return (
        <>
            <div className={css(styles.appLogin)}>
                <p>Login to access the full dashborad</p>

                <label onClick={() => focusInput(emailRef)} htmlFor="email">Email: </label>
                <input type="email" ref={emailRef} />

                <label onClick={() => focusInput(passwordRef)} htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />

                <button>OK</button>
            </div>
        </>
    )
};

const styles = StyleSheet.create({
    appLogin: {
        display: "flex",
        flexDirection: "column",
        height: "350px",
        width: "100%",
        backgroundColor: "#eceff3",
        padding: "10px",
    }
})

export default Login