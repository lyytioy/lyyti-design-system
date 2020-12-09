import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-2_svg__a"
      d="M23.25.748l-22.5 22.5M23.25 7.498V.748H16.5M.75 16.498v6.75H7.5M.75.748l22.5 22.5M.75 7.498V.748H7.5M23.25 16.498v6.75H16.5"
    />
  );

export default SvgExpand2;
