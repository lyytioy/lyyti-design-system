import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-warning_svg__a"
      d="M12 7.5v6M12 16.5a.375.375 0 10.375.375A.375.375 0 0012 16.5"
    />,
    <path
      className="mood-warning_svg__a"
      d="M23.25 12a3.751 3.751 0 00-2.618-3.576 3.75 3.75 0 00-5.056-5.056 3.751 3.751 0 00-7.152 0 3.75 3.75 0 00-5.056 5.056 3.751 3.751 0 000 7.152 3.75 3.75 0 005.056 5.056 3.751 3.751 0 007.152 0 3.75 3.75 0 005.056-5.056A3.752 3.752 0 0023.25 12z"
    />
  );

export default SvgMoodWarning;
