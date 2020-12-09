import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTap2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-2_svg__a"
      d="M6.487 13.453a6.5 6.5 0 1111.016.014M10.5 9.508a1 1 0 012 0v4.754l3.919 1.169a1.282 1.282 0 01.894 1.52s-.746 4-.85 4.576H10.34l-3.06-4.59c-1.215-1.857 1.836-2.5 3.217.59z"
    />
  );

export default SvgGestureTap2;
