import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMegaphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".megaphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="megaphone_svg__a"
      d="M7.5 6.9v8.655a7.192 7.192 0 004 6.445"
    />,
    <path
      className="megaphone_svg__a"
      d="M21.5 4.484a1 1 0 00-1.421-.907C16.244 5.356 12.456 6.964 4.5 7h-1a3 3 0 00-3 3v2a3 3 0 003 3h1c7.956.036 11.744 1.644 15.579 3.423a1 1 0 001.421-.907zM21.5 9h.5a1.5 1.5 0 011.5 1.5v1A1.5 1.5 0 0122 13h-.5"
    />
  );

export default SvgMegaphone;
