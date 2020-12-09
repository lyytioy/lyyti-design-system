import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="add-circle-1_svg__a" cx={14.5} cy={12} r={9} />,
    <path
      className="add-circle-1_svg__a"
      d="M14.5 7.092v9.818M19.409 12H9.591M5.032 19.814A9 9 0 015.044 4.18"
    />
  );

export default SvgAddCircle1;
