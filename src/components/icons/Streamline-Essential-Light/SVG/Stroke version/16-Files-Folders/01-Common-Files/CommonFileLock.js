import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="common-file-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="common-file-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="common-file-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />,
    <path
      className="common-file-lock_svg__a"
      d="M11.5 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgCommonFileLock;
