import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardAsterisk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-asterisk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-asterisk_svg__a"
      d="M12 .997v22M23 11.997H1M19.778 4.219L4.222 19.775M19.778 19.775L4.222 4.219"
    />
  );

export default SvgKeyboardAsterisk;
