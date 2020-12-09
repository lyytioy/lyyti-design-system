import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceIdSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="face-id-smartphone_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="face-id-smartphone_svg__a"
      d="M12 9.5v2.935a.978.978 0 01-.978.978H10.7M8.5 9.5v1.63M15.5 9.5v1.63M9.217 15.37a3.575 3.575 0 004.914 0M14.5.5v1a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1"
    />
  );

export default SvgFaceIdSmartphone;
