/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types"

const RemoveCompleted = ({ onClick }) => (
    <a
        href=""
        className="link link_active link_centered"
        onClick={e => {
            e.preventDefault();
            onClick();
        }}
    >
        Remove completed
    </a>
)

RemoveCompleted.propTypes = {
    onClick: PropTypes.func.isRequired
  }

export default RemoveCompleted;