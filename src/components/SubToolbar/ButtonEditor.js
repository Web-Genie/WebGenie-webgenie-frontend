import React from "react";
import { FaLink } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";

function ButtonEditor() {
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Link</p>
        <div>
          <ToolbarButton>
            <FaLink />
          </ToolbarButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonEditor;
