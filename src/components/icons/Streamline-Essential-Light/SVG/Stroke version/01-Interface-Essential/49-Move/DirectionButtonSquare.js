import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButtonSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-square_svg__a"
      d="M22.5 21a1 1 0 01-1 1h-19a1 1 0 01-1-1V3a1 1 0 011-1h19a1 1 0 011 1z"
    />,
    <path
      className="direction-button-square_svg__a"
      d="M17 9.765a.627.627 0 011.07-.444l2.247 2.247a.628.628 0 010 .886L18.07 14.7a.627.627 0 01-1.07-.443zM7 9.765a.627.627 0 00-1.07-.444l-2.247 2.247a.628.628 0 000 .886L5.93 14.7A.627.627 0 007 14.257zM14.247 16.5a.627.627 0 01.443 1.07l-2.247 2.247a.626.626 0 01-.885 0l-2.247-2.249a.627.627 0 01.444-1.07zM14.247 7.5a.627.627 0 00.443-1.07l-2.247-2.249a.626.626 0 00-.885 0L9.311 6.428A.627.627 0 009.755 7.5z"
    />
  );

export default SvgDirectionButtonSquare;
