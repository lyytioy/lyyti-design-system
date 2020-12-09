import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButtonSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="direction-button-square_svg__a"
      x={0.75}
      y={0.748}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="direction-button-square_svg__a"
      d="M14.25 5.998L12 3.748l-2.25 2.25M9.75 17.998l2.25 2.25 2.25-2.25M6 9.748l-2.25 2.25L6 14.248M18 14.248l2.25-2.25L18 9.748"
    />
  );

export default SvgDirectionButtonSquare;
