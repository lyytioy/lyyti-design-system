import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle
      cx={12}
      cy={12}
      r={9.5}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgControlsRecord;
