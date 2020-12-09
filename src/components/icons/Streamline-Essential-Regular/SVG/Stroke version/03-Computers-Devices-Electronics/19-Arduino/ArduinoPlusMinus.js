import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoPlusMinus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arduino-plus-minus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="arduino-plus-minus_svg__a"
      d="M12 11.875s2.25 5.25 6 5.25a5.25 5.25 0 000-10.5c-3.75 0-6 5.25-6 5.25zM12 11.875s-2.25 5.25-6 5.25a5.25 5.25 0 010-10.5c3.75 0 6 5.25 6 5.25zM3.75 11.875h4.5M15.75 11.875h4.5M18 9.625v4.5"
    />
  );

export default SvgArduinoPlusMinus;
