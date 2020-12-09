import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodLockHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-lock-head_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mood-lock-head_svg__a"
      x={7.344}
      y={8.493}
      width={8}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="mood-lock-head_svg__a"
      d="M11.344 11.743a.25.25 0 11-.25.25.249.249 0 01.25-.25M8.344 8.493v-1a3 3 0 016 0v1"
    />,
    <path
      className="mood-lock-head_svg__a"
      d="M15.344 23.493v-3h1a3 3 0 003-3v-3h2.814a.5.5 0 00.473-.652C20.756 8.038 19.4 1.806 13.21.674A9.989 9.989 0 001.386 9.329 9.727 9.727 0 005.344 18.1v5.389"
    />
  );

export default SvgMoodLockHead;
