import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouseSmart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mouse-smart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mouse-smart_svg__a"
      d="M12 11.25a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="mouse-smart_svg__a"
      d="M19.5 8.25a7.5 7.5 0 00-15 0v7.5a7.5 7.5 0 0015 0z"
    />
  );

export default SvgMouseSmart;
