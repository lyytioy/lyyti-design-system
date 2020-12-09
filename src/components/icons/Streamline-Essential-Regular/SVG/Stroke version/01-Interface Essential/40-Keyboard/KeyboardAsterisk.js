import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardAsterisk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-asterisk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-asterisk_svg__a"
      d="M12 1.497v21M22.5 11.997h-21M19.424 4.572L4.576 19.421M19.424 19.421L4.576 4.572"
    />
  );

export default SvgKeyboardAsterisk;
