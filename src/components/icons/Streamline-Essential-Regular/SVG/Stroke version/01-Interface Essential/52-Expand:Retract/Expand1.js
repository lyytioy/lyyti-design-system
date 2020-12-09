import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-1_svg__a"
      d="M9.75 14.248l-9 9M23.25 7.498V.748H16.5M.75 16.498v6.75H7.5M23.25.748l-9 9M14.25 14.248l9 9M.75 7.498V.748H7.5M23.25 16.498v6.75H16.5M.75.748l9 9"
    />
  );

export default SvgExpand1;
