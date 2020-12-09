import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="add-circle-1_svg__a" d="M6 3.816a9 9 0 000 16.366" />,
    <circle className="add-circle-1_svg__a" cx={14.25} cy={12} r={9} />,
    <path className="add-circle-1_svg__a" d="M14.25 7.5v9M9.75 12h9" />
  );

export default SvgAddCircle1;
