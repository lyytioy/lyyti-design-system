import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileJs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-js_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-js_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-js_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M10.5 12.5V17a1.5 1.5 0 01-3 0M15.5 12.5h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0114.2 18.5h-1.7"
    />
  );

export default SvgFileJs;
