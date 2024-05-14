import React, { useRef } from "react";
import {StyleSheet, css} from "aphrodite";
import { useState, useEffect } from "react";

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        enableSubmit: false,
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const focusInput = (ref) => {
        ref.current.focus()
    }

    useEffect(() => {
        if (data.email.length > 0 && data.password.length > 0) {
            setData({...data, enableSubmit: true});
        }else {
            setData({...data, enableSubmit: false});
        }
    }, [ data.email, data.password ])

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <>
            <div className={css(styles.login)} id="Login">
                <p>Login to access the full dashborad</p>

                <form  className={css(styles.form)} onSubmit={handleLoginSubmit}>
                    <label onClick={() => focusInput(emailRef)} htmlFor="email">Email: </label>
                    <input onChange={(e) => {
                            setData({...data, email: e.target.value})
                            }}
                            value={data.email}
                            type="email"
                            id="email"
                            ref={emailRef}
                            className={css(styles.input)} />

                    <label onClick={() => focusInput(passwordRef)} htmlFor="password">Password:</label>
                    <input
                        onChange={(e) => {
                            setData({...data, password: e.target.value})
                        }}
                        value={data.password}
                        type="password"
                        id="pwd"
                        ref={passwordRef}
                        className={css(styles.input)} />

                    <input
                        disabled={!data.enableSubmit}
                        onClick={() => {setIsLoggedIn(true)}}
                        type="submit"
                        id="submit"
                        value="Ok"
                        className={data.enableSubmit ? css(styles.enable) : css(styles.disable)} />
                </form>
            </div>
        </>
    )
};

const styles = StyleSheet.create({
    login: {
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "20px",
        fontWeight: "bold",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "200px",
        width: "100%",
        backgroundColor: "#E7E4E4",
        padding: "50px 20px",
    },
    input: {
        width: "100%",
        border: "none",
        borderRadius: "5px",
        padding: "10px",
        margin: "20px 0",
        fontSize: "18px",
        fontWeight: "bold",
    },
    enable: {
        backgroundColor: "red",
        fontSize: "18px",
        color: "white",
        padding: "10px",
        marginTop: "20px",
        width: "50%",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    },
    disable: {
        backgroundColor: "gray",
        fontSize: "18px",
        color: "white",
        padding: "10px",
        marginTop: "20px",
        width: "50%",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
})

export default Login