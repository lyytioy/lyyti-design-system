import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceIdSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="face-id-smartphone_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="face-id-smartphone_svg__a"
      d="M9 .75V3a.75.75 0 00.75.75h4.5A.75.75 0 0015 3V.75M9 17.588a4.454 4.454 0 006 0M8.25 9.75V12M15.75 9.75V12M12 9.75v3.75a1.5 1.5 0 01-1.5 1.5h-.75"
    />
  );

export default SvgFaceIdSmartphone;
