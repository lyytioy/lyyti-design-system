import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmailFly = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email-fly_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="send-email-fly_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="send-email-fly_svg__a"
      d="M5.25 2.25L12 6l6.75-3.75M18.75 3l4.5-2.25c0 8.25-4.5 7.5-4.5 7.5M5.25 3L.75.75c0 8.25 4.5 7.5 4.5 7.5M12 15.75v7.5M15.75 14.25v4.5M8.25 14.25v4.5"
    />
  );

export default SvgSendEmailFly;
