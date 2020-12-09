import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.999 23.5C5.658 23.5.499 18.341.499 12S5.658.5 11.999.5s11.5 5.159 11.5 11.5-5.159 11.5-11.5 11.5zm0-22c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z" />,
    <path d="M16.241 16.743a.5.5 0 01-.354-.146l-3.889-3.889-3.889 3.889a.5.5 0 11-.708-.707L11.292 12l-3.89-3.888a.5.5 0 01.354-.853.5.5 0 01.354.146l3.889 3.889 3.889-3.889a.498.498 0 01.706 0 .5.5 0 010 .707L12.706 12l3.889 3.889a.5.5 0 01-.354.854z" />
  );

export default SvgRemoveCircle;
