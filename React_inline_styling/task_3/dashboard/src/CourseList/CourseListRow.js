import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
  return (
    <>
        <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.rowStyle)}>
            { isHeader && !textSecondCell && (
                <th className={css(styles.greyBottomBorder)}
                colSpan={ 2 }>{ textFirstCell }</th>
            ) }
            { isHeader && textSecondCell && (
                <>
                    <th>{ textFirstCell }</th>
                    <th>{ textSecondCell }</th>
                </>
            ) }
            { !isHeader && (
                <>
                    <td>{ textFirstCell }</td>
                    <td>{ textSecondCell }</td>
                </>
            ) }
        </tr>
    </>
);
};

const styles = StyleSheet.create({
  rowStyle: {
      backgroundColor: '#f5f5f5ab',
  },

  headerRowStyle: {
      backgroundColor: '#deb5b545',
  },

  greyBottomBorder: {
      borderBottom: '1px solid grey',
  }
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
