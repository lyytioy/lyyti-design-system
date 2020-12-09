import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderMale = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-male_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gender-male_svg__cls-1"
      d="M13.564 10.446L23.239.75M2.958 10.446a7.5 7.5 0 110 10.607 7.5 7.5 0 010-10.607zM16.489.75h6.75V7.5"
    />
  );

export default SvgGenderMale;
