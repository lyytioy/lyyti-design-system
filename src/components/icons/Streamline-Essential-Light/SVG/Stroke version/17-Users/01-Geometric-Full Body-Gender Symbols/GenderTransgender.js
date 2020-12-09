import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderTransgender = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-transgender_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="gender-transgender_svg__cls-1"
      cx={12}
      cy={10.5}
      r={5.5}
    />,
    <path
      className="gender-transgender_svg__cls-1"
      d="M12 16v7M9 20h6M18 1h3.5v3.5M2.5 4.5V1H6M21.5 1L16 6.5M2.5 1L8 6.5M7.75 3.25L5 6"
    />
  );

export default SvgGenderTransgender;
