import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderLesbian = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-lesbian_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gender-lesbian_svg__cls-1"
      d="M12 6.569a6 6 0 11-7.165-.256M8.25 17.25v6"
    />,
    <path
      className="gender-lesbian_svg__cls-1"
      d="M9.634 13.824a6.058 6.058 0 01-.448-8.759l.071-.073a6 6 0 018.976 7.932M17.743 4.992L21.75.75M5.25 20.25h6M21.75 4.5L18 .75"
    />
  );

export default SvgGenderLesbian;
