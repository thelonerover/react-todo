/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

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

export default RemoveCompleted;