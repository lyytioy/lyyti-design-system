import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-lock_svg__a"
      d="M7 10.5V13M2 17.5h-.5a1 1 0 01-1-1v-8a1 1 0 011-1h11a1 1 0 011 1V13M11.5 7.5V5a4.5 4.5 0 00-9 0v2.5"
    />,
    <rect
      className="password-lock_svg__a"
      x={4.5}
      y={15.5}
      width={19}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="password-lock_svg__a"
      d="M7 18l3 3M10 18l-3 3M12.5 18l3 3M15.5 18l-3 3M17.5 21.5h4M7 10.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPasswordLock;
