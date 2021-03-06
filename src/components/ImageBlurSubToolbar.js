import React, { useContext } from "react";
import styled from "styled-components";

import { SubToolbarContext } from "../context/subToolbarContext";
import SubToolbarTitle from "./SubToolbarTitle";

function ImageBlurSubToolbar() {
  const { imageBlur, setImageBlur } = useContext(SubToolbarContext);

  const handleImageBlur = (event) => {
    setImageBlur(event.target.value);
  };

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Blur" />
      <BlurBar>
        <input
          data-testid="blur"
          className="blur"
          type="range"
          min="0"
          max="10"
          step="0.05"
          list="tickmarks"
          value={imageBlur}
          onChange={handleImageBlur}
        />
      </BlurBar>
    </div>
  );
}

const BlurBar = styled.div`
  .blur {
    width: 100%;
    cursor: pointer;
  }
`;

export default ImageBlurSubToolbar;
