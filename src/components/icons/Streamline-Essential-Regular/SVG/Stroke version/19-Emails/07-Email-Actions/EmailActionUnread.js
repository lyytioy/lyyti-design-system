import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionUnread = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-unread_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="email-action-unread_svg__a"
      x={1.5}
      y={4.75}
      width={21}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="email-action-unread_svg__a"
      d="M22.161 5.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.839 5.3"
    />
  );

export default SvgEmailActionUnread;
