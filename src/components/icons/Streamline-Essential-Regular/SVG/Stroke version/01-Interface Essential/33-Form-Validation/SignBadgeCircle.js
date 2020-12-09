import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignBadgeCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle
      cx={12}
      cy={12}
      r={11.25}
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgSignBadgeCircle;
