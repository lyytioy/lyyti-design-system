import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="retouch-triangle_svg__a"
      d="M2.5 22.995L12 6.005l9.5 16.99h-19zM12 3.505v-2.5M14.514 4.869l2.096-1.364M9.486 4.869L7.39 3.505"
    />
  );

export default SvgRetouchTriangle;
