import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-warning_svg__a"
      d="M12 13.5v-7M11.991 15.5a.255.255 0 01.259.245.246.246 0 01-.241.255.255.255 0 01-.259-.245.246.246 0 01.241-.255"
    />,
    <path
      className="shield-warning_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />
  );

export default SvgShieldWarning;
