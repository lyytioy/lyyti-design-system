import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-forward_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.475-3.084A10.484 10.484 0 0023.25 11.25M20.249.75l3 3-3 3"
    />,
    <path
      className="messages-bubble-forward_svg__a"
      d="M12.748 9.75a6 6 0 016-6h4.5"
    />
  );

export default SvgMessagesBubbleForward;
