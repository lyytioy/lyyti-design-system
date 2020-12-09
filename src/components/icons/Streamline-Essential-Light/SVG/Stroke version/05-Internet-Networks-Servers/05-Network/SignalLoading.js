import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalLoading = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-loading_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="signal-loading_svg__a"
      d="M18.5 7l5 5-5 5M5.5 7l-5 5 5 5"
    />,
    <circle className="signal-loading_svg__a" cx={12} cy={12} r={1} />,
    <circle className="signal-loading_svg__a" cx={17} cy={12} r={1} />,
    <circle className="signal-loading_svg__a" cx={7} cy={12} r={1} />
  );

export default SvgSignalLoading;
