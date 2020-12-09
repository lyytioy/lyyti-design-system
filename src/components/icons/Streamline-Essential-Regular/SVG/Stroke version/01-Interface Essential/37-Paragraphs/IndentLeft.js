import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIndentLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".indent-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="indent-left_svg__a"
      d="M6.75 11.998h-6M3.75 14.998l3-3-3-3M9.75 1.498v21M12.75 2.998h10.5M12.75 7.498h7.5M12.75 11.998h10.5M12.75 16.498h7.5M12.75 20.998h10.5"
    />
  );

export default SvgIndentLeft;
