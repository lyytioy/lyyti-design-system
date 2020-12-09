import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderGay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-gay_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gender-gay_svg__cls-1"
      d="M12 6.569a6 6 0 11-7.165-.256M8.25 17.25v6M11.25 20.25l-3 3-3-3"
    />,
    <path
      className="gender-gay_svg__cls-1"
      d="M9.634 13.824a6.05 6.05 0 01-2.028-5.717 6.057 6.057 0 0110.137-3.115 6 6 0 01.49 7.932M17.743 4.992L21.75.75M18 .75h3.75V4.5"
    />
  );

export default SvgGenderGay;
