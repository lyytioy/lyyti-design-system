import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleTyping1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-typing-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-typing-1_svg__a"
      cx={6.002}
      cy={10.501}
      r={1.5}
    />,
    <circle
      className="messages-bubble-typing-1_svg__a"
      cx={12.002}
      cy={10.501}
      r={1.5}
    />,
    <circle
      className="messages-bubble-typing-1_svg__a"
      cx={18.002}
      cy={10.501}
      r={1.5}
    />,
    <path
      className="messages-bubble-typing-1_svg__a"
      d="M12 1C5.649 1 .5 5.253.5 10.5a8.738 8.738 0 003.4 6.741L1.5 23l6.372-3.641A13.608 13.608 0 0012 20c6.351 0 11.5-4.253 11.5-9.5S18.351 1 12 1z"
    />
  );

export default SvgMessagesBubbleTyping1;
