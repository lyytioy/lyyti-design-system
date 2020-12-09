import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sick_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-sick_svg__a"
      d="M14.5 9.392a2.359 2.359 0 004 0M9.5 9.392a2.359 2.359 0 01-4 0M11.5 19.5h-2a1 1 0 01-1-1 2 2 0 012-2M23.5 19.764a3.341 3.341 0 00-3.341-3.341 3.3 3.3 0 00-2.227.861 1.808 1.808 0 01-3.023-1.338.955.955 0 10-1.909 0 7.159 7.159 0 007.159 7.159 3.341 3.341 0 003.341-3.341zM23.091 15a11.6 11.6 0 10-9.591 8.391"
    />
  );

export default SvgSmileySick;
