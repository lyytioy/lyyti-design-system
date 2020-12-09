import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="laptop-lock_svg__a"
      x={9}
      y={9.5}
      width={6}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="laptop-lock_svg__a"
      d="M12 6.5a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2zM12 11.77a.25.25 0 11-.25.25.25.25 0 01.25-.25M23.5 19.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-2h9v1h5v-1h9z"
    />,
    <path
      className="laptop-lock_svg__a"
      d="M1.5 17.5v-12a2 2 0 012-2h17a2 2 0 012 2v12"
    />
  );

export default SvgLaptopLock;
