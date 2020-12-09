import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-medal-4_svg__a"
      d="M16.5 18.854l2.146-2.147a.5.5 0 000-.707L16.5 13.854l.4-2.01a.31.31 0 00-.392-.392l-2.01.4L12 9.354l-2.5 2.5-2.01-.4a.31.31 0 00-.392.392l.4 2.01L5.354 16a.5.5 0 000 .707L7.5 18.854l-.4 2.01a.31.31 0 00.392.392l2.01-.4L11.646 23a.5.5 0 00.708 0l2.146-2.146 2.01.4a.31.31 0 00.392-.392zM15.5 5.354a2.484 2.484 0 01-.759 1.651L12 9.354 9.259 7.005A2.484 2.484 0 018.5 5.354v-4.5h7zM12 .854v8.5M5.5.854h13"
    />,
    <circle className="award-medal-4_svg__a" cx={12} cy={16.354} r={2.5} />
  );

export default SvgAwardMedal4;
