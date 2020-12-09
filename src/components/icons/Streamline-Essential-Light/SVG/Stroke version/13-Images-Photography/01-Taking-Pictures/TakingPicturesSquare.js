import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="taking-pictures-square_svg__a"
      d="M7.682 7.5a1.488 1.488 0 00.868-.338L10 5.838a1.485 1.485 0 01.868-.338h2.272a1.485 1.485 0 01.86.338l1.45 1.324a1.488 1.488 0 00.868.338H19a1.671 1.671 0 011.5 1.682V16a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 16V9.182A1.671 1.671 0 015 7.5z"
    />,
    <rect
      className="taking-pictures-square_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <circle
      className="taking-pictures-square_svg__a"
      cx={12}
      cy={11.75}
      r={2.75}
    />,
    <path
      className="taking-pictures-square_svg__a"
      d="M18 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgTakingPicturesSquare;
