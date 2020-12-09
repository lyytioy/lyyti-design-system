import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetwork1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-1_svg__a" cx={12} cy={9.75} r={9} />,
    <path
      className="network-1_svg__a"
      d="M.75 23.25h22.5M12 18.75v4.5M12 .75a11.855 11.855 0 00-3.75 9 11.855 11.855 0 003.75 9M12 .75a11.855 11.855 0 013.75 9 11.855 11.855 0 01-3.75 9M3.513 6.75h16.971M3.513 12.75h16.974"
    />
  );

export default SvgNetwork1;
