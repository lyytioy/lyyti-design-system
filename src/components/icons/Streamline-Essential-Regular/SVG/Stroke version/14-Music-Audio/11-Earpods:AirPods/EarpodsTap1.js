import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="earpods-tap-1_svg__a" cx={16.5} cy={6} r={3.75} />,
    <path
      className="earpods-tap-1_svg__a"
      d="M9.75 10.745V9M6.75 5.625A.375.375 0 107.125 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-tap-1_svg__a"
      d="M12.75 12v10.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V10.745a5.255 5.255 0 01-6-1.071V2.326a5.249 5.249 0 017.495 0"
    />
  );

export default SvgEarpodsTap1;
