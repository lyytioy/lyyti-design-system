import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderMale = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-male_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="gender-male_svg__cls-1" d="M14.172 9.828L23.5.5" />,
    <circle className="gender-male_svg__cls-1" cx={8.5} cy={15.5} r={8} />,
    <path className="gender-male_svg__cls-1" d="M23.5 7.5v-7h-7" />
  );

export default SvgGenderMale;
