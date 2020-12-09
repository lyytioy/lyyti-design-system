import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardEject = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-eject_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-eject_svg__a"
      x={0.501}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <rect
      className="keyboard-eject_svg__a"
      x={4.501}
      y={14.497}
      width={15}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="keyboard-eject_svg__a"
      d="M12.365 3.886a.5.5 0 00-.729 0L5.29 10.655a.5.5 0 00.365.842h12.692a.5.5 0 00.364-.842z"
    />
  );

export default SvgKeyboardEject;
