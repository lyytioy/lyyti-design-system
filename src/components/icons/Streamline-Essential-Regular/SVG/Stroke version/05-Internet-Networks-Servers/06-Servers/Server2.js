import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServer2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-2_svg__a"
      d="M4.5 7.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M4.5 16.125a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-2_svg__a"
      d="M18.751 3a4.5 4.5 0 010 9h-13.5a4.5 4.5 0 010-9zM18.751 12a4.5 4.5 0 110 9h-13.5a4.5 4.5 0 010-9zM10.501 7.5h8.25M10.501 16.5h8.25"
    />
  );

export default SvgServer2;
