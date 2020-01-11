/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import PropTypes from "prop-types"

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span class="link link_active">{children}</span>
  }

  return (
    <a
      class="link"
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;