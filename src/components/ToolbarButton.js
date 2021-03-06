import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function ToolbarButton({ children, name, handleClick }) {
  return (
    <ToolbarButtonBody onClick={handleClick} name={name}>
      {children}
    </ToolbarButtonBody>
  );
}

ToolbarButton.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

const ToolbarButtonBody = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.name === "backgroundColorChoice" ? "6px 25px" : "8px"};
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  width: ${(props) => (props.name === "link" ? "150px" : null)};
  margin: ${(props) => (props.name === "link" ? "0px 20px" : null)};
  color: #344054;
  background: #ffffff;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;

  .text {
    margin-left: 4px;
  }

  :hover {
    opacity: 0.7;
  }
`;

export default ToolbarButton;
