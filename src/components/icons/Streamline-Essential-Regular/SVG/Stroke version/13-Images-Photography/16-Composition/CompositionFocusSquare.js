import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionFocusSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-focus-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="composition-focus-square_svg__a"
      d="M5.25 5.25h13.5v13.5H5.25z"
    />,
    <rect
      className="composition-focus-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-focus-square_svg__a"
      d="M12 5.25V.75M18.75 12h4.5M12 18.75v4.5M5.25 12H.75"
    />
  );

export default SvgCompositionFocusSquare;
