import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoPlusMinus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arduino-plus-minus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="arduino-plus-minus_svg__a"
      d="M12 12.25s-2.5 5-6.5 5a4.832 4.832 0 01-5-5 4.832 4.832 0 015-5c4 0 6.5 5 6.5 5zM23.5 12.25a4.832 4.832 0 01-5 5c-4 0-6.5-5-6.5-5s2.5-5 6.5-5a4.832 4.832 0 015 5zM4 12.25h3M17 12.25h3M18.5 10.75v3"
    />
  );

export default SvgArduinoPlusMinus;
