import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScissors2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scissors-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="scissors-2_svg__a" cx={4.5} cy={19.499} r={3.75} />,
    <circle className="scissors-2_svg__a" cx={4.5} cy={4.499} r={3.75} />,
    <path
      className="scissors-2_svg__a"
      d="M23.25 20.249l-21-12.75M23.25 3.749l-21 12.75"
    />
  );

export default SvgScissors2;
