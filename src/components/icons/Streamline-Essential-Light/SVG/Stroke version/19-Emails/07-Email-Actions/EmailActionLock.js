import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="email-action-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="email-action-lock_svg__a"
      cx={19}
      cy={19.563}
      r={1.25}
    />,
    <path
      className="email-action-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5zM12.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v7.5"
    />,
    <path className="email-action-lock_svg__a" d="M21.067.946L11 9 .933.946" />
  );

export default SvgEmailActionLock;
