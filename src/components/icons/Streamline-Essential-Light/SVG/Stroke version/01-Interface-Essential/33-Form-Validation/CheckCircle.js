import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="check-circle_svg__a"
      d="M23.5.499l-14.5 18-5-5M18.273 12.493A8.993 8.993 0 1113.5 6.435"
    />
  );

export default SvgCheckCircle;
