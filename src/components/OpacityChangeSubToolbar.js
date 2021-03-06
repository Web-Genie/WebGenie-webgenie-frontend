import React from "react";

import { OPACITY_RANGE } from "../constants/constants";
import SelectDetail from "./SelectDetailSubToolbar";
import SubToolbarTitle from "./SubToolbarTitle";

function OpacityChangeSubToolbar() {
  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Edit Opacity" />
      <SelectDetail
        title="opacity"
        className="opacity"
        detailValue={OPACITY_RANGE}
      />
    </div>
  );
}

export default OpacityChangeSubToolbar;
