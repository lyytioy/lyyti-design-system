import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockPassword = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-password_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="lock-password_svg__a"
      x={3.5}
      y={8.5}
      width={17}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="lock-password_svg__a"
      d="M6.5 6a5.5 5.5 0 0111 0v2.5h-11z"
    />,
    <rect
      className="lock-password_svg__a"
      x={7.5}
      y={11.5}
      width={9}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="lock-password_svg__a"
      d="M7.5 14.5h9M7.5 17.5h9M13.5 11.5v9M10.5 11.5v9"
    />
  );

export default SvgLockPassword;
