import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSend2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-send-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-send-2_svg__a"
      d="M12.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v9.5"
    />,
    <path
      className="email-action-send-2_svg__a"
      d="M21.068.946L11 9 .933.946"
    />,
    <circle className="email-action-send-2_svg__a" cx={18.5} cy={18.5} r={5} />,
    <path
      className="email-action-send-2_svg__a"
      d="M20.5 18.5h-4M18.5 16.5l2 2-2 2"
    />
  );

export default SvgEmailActionSend2;
