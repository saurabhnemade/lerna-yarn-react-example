import React from 'react'

const buttonStyle = {
  padding: '10px 20px'
};

const Button = (props) => {
  return (
    <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={props.handleClick}>{props.label}</button>
  )
}

Button.defaultProps = {
    onClick: () => {},
    label: ''
};

export default Button;