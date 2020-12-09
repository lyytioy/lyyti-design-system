import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-browser_svg__a"
      d="M15.75 12l3 3-3 3M8.25 12l-3 3 3 3M13.5 12l-3 6"
    />,
    <rect
      className="programming-browser_svg__a"
      x={0.5}
      y={3}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="programming-browser_svg__a"
      d="M.5 8h23M4 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgProgrammingBrowser;
