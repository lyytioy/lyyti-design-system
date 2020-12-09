import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="image-file-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="image-file-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="image-file-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />,
    <circle className="image-file-lock_svg__a" cx={6.5} cy={7.5} r={2} />,
    <path
      className="image-file-lock_svg__a"
      d="M13.361 12.478l-1.437-2.3a.5.5 0 00-.848 0L8.438 14.4l-1.076-1.722a.5.5 0 00-.848 0L3.5 17.5h8"
    />,
    <path
      className="image-file-lock_svg__a"
      d="M11.5 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgImageFileLock;
