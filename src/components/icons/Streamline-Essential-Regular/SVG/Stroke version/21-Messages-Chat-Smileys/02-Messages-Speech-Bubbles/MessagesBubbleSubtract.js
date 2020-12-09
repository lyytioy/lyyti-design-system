import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-subtract_svg__a"
      d="M23.224 10.5a10.5 10.5 0 10-19.391 6.275L.75 23.25l6.475-3.084A10.576 10.576 0 009 21.05"
    />,
    <circle
      className="messages-bubble-subtract_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path className="messages-bubble-subtract_svg__a" d="M14.25 17.25h6" />
  );

export default SvgMessagesBubbleSubtract;
