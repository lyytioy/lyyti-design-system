import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardButtonDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-button-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-button-direction_svg__a"
      d="M6 20.247l-2.25-2.25L6 15.747M3.75 17.997h4.5M18 20.247l2.25-2.25-2.25-2.25M20.25 17.997h-4.5M14.25 5.997L12 3.747l-2.25 2.25M12 3.747v4.5"
    />,
    <rect
      className="keyboard-button-direction_svg__a"
      x={1.5}
      y={13.497}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="keyboard-button-direction_svg__a"
      x={13.5}
      y={13.497}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="keyboard-button-direction_svg__a"
      x={7.5}
      y={1.497}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgKeyboardButtonDirection;
