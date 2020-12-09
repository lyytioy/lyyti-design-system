import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleThree = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-three_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="module-three_svg__a"
      d="M10.5 14a1 1 0 00-1-1h-8a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1zM23.5 14a1 1 0 00-1-1h-8a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1zM17.5 2a1 1 0 00-1-1h-8a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1z"
    />
  );

export default SvgModuleThree;
