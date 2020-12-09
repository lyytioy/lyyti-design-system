import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="laptop-lock-1_svg__a"
      x={9}
      y={9.5}
      width={6}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="laptop-lock-1_svg__a"
      d="M12 6.5a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2zM12 11.77a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="laptop-lock-1_svg__a"
      d="M8.5 16.5c0 1.1 1.567 2 3.5 2s3.5-.9 3.5-2h5V5.167A1.667 1.667 0 0018.833 3.5H5.167A1.667 1.667 0 003.5 5.167V16.5z"
    />,
    <path
      className="laptop-lock-1_svg__a"
      d="M15.5 16.5c0 1.1-1.567 2-3.5 2s-3.5-.9-3.5-2h-8a5.281 5.281 0 005.123 4h12.754a5.281 5.281 0 005.123-4z"
    />
  );

export default SvgLaptopLock1;
