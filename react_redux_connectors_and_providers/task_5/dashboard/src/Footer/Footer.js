import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import {connect} from "react-redux";

import PropTypes from "prop-types";

function Footer({ user }) {
  return (
    <div className="footer">
      <p className={css(styles.copyright)}>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user && 
        <p className={css(styles.copyright)}>
          <a href="#">Contact US</a>
        </p>
      }
    </div>
  );
}

const styles = StyleSheet.create({
  copyright: {
    fontSize: "18px",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});

Footer.defaultProps = {
    user: null
}

Footer.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        user: state.ui.get("user")
    }
}

export default connect(mapStateToProps, null)(Footer);
