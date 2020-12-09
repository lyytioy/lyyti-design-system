import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardButtonDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-button-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-button-direction_svg__a"
      x={0.5}
      y={13.497}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <rect
      className="keyboard-button-direction_svg__a"
      x={13.5}
      y={13.497}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <rect
      className="keyboard-button-direction_svg__a"
      x={7.5}
      y={1.497}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="keyboard-button-direction_svg__a"
      d="M12.5 9.482V3.497M10 5.997l2.5-2.5 2.5 2.5M8.5 18.497h-6M5 20.997l-2.5-2.5 2.5-2.5M15.5 18.497h6M19 20.997l2.5-2.5-2.5-2.5"
    />
  );

export default SvgKeyboardButtonDirection;
