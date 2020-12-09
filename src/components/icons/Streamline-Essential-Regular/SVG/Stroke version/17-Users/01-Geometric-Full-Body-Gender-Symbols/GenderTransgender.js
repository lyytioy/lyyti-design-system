import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderTransgender = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-transgender_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gender-transgender_svg__cls-1"
      d="M12 17.25v6M18.75.75h3.75V4.5M5.25.75H1.5V4.5M9 20.25h6"
    />,
    <circle
      className="gender-transgender_svg__cls-1"
      cx={12}
      cy={11.25}
      r={6}
    />,
    <path
      className="gender-transgender_svg__cls-1"
      d="M6.75 3l-3 3M1.5.75l6.257 6.257M22.5.75l-6.258 6.257"
    />
  );

export default SvgGenderTransgender;
