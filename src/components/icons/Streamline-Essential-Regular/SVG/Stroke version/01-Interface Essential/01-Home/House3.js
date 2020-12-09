import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="house-3_svg__a"
      d="M1.527 12.463l9.435-9.443a1.5 1.5 0 012.122.008l9.443 9.435"
    />,
    <path className="house-3_svg__a" d="M19.527 9.466v11.997h-15V9.461" />,
    <path
      className="house-3_svg__a"
      d="M15.027 21.463v-4.5a3 3 0 10-6 0v4.5"
    />,
    <circle className="house-3_svg__a" cx={12.027} cy={9.088} r={1.875} />
  );

export default SvgHouse3;
