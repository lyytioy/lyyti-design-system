import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmailFly = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email-fly_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="send-email-fly_svg__a"
      x={6}
      y={0.5}
      width={12}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="send-email-fly_svg__a"
      d="M6.336.752L11.4 4.55a1 1 0 001.2 0l5.064-3.8M12 14.5v9M9 12.5v7M15 12.5v7M18 3l3.553-1.776A1 1 0 0123 2.118v.705a1 1 0 01-.629.928L20.5 4.5l.62.414a1 1 0 01.246 1.432L20.8 7.1a1 1 0 01-.8.4M6 3L2.447 1.224A1 1 0 001 2.118v.705a1 1 0 00.629.928L3.5 4.5l-.62.414a1 1 0 00-.246 1.432L3.2 7.1a1 1 0 00.8.4"
    />
  );

export default SvgSendEmailFly;
