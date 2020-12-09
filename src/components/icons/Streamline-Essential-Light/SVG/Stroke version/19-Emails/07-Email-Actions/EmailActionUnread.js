import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionUnread = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-unread_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="email-action-unread_svg__a"
      x={0.5}
      y={3.954}
      width={23}
      height={16}
      rx={2}
      ry={2}
    />,
    <path
      className="email-action-unread_svg__a"
      d="M22.911 4.536L12 13.454 1.089 4.536"
    />
  );

export default SvgEmailActionUnread;
