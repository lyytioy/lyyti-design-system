import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones-man_svg__a"
      d="M19.5 23.5a8.5 8.5 0 00-15 0zM7.276 9.222a9.141 9.141 0 0010.15 2.042"
    />,
    <circle className="headphones-man_svg__a" cx={12} cy={11.998} r={5.5} />,
    <path
      className="headphones-man_svg__a"
      d="M4.5 8a7.5 7.5 0 0115 0M4.5 8a4 4 0 00-.339 7.986.314.314 0 00.339-.312zM19.5 8a4 4 0 01.339 7.986.314.314 0 01-.339-.312z"
    />
  );

export default SvgHeadphonesMan;
