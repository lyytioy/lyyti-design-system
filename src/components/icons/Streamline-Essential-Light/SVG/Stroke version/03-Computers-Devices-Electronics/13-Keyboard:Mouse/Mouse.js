import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mouse_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mouse_svg__a"
      d="M12.5 17.5a6 6 0 01-12 0v-9a3 3 0 013-3h6a3 3 0 013 3zM.5 10.5h12"
    />,
    <path
      className="mouse_svg__a"
      d="M6.5 10.5v-5a5 5 0 0110 0V8a3.5 3.5 0 007 0V.5"
    />
  );

export default SvgMouse;
