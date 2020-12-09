import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-warning_svg__a"
      d="M18.707 6.246A9 9 0 003 12.247V13M5.293 18.249a9 9 0 0015.707-6V11.5"
    />,
    <path
      className="synchronize-arrows-warning_svg__a"
      d="M18.75 13.747l2.25-2.25 2.25 2.25M5.25 10.747L3 12.997l-2.25-2.25M12 6.997v6M12 16a.375.375 0 10.375.375A.375.375 0 0012 16"
    />
  );

export default SvgSynchronizeArrowsWarning;
