import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorTarget1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-target-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-target-1_svg__a"
      d="M12.002 17.247v6M12.002.747v6M6.752 11.997h-6M23.252 11.997h-6"
    />,
    <circle
      className="cursor-target-1_svg__a"
      cx={12.002}
      cy={11.998}
      r={8.25}
    />
  );

export default SvgCursorTarget1;
