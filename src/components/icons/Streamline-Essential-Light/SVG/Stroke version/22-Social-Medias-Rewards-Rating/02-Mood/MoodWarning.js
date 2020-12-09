import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mood-warning_svg__a"
      d="M12.503 14V7M12.5 17a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="mood-warning_svg__a"
      d="M23.5 12a4 4 0 00-2.523-3.718 4 4 0 00-5.258-5.259 4 4 0 00-7.436 0 4 4 0 00-5.259 5.259 4 4 0 000 7.436 4 4 0 005.258 5.259 4 4 0 007.436 0 4 4 0 005.258-5.259A4 4 0 0023.5 12z"
    />
  );

export default SvgMoodWarning;
