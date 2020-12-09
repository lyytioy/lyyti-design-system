import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-typing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-typing_svg__a"
      cx={4.5}
      cy={19.5}
      r={1.5}
    />,
    <path
      className="messages-bubble-typing_svg__a"
      d="M16 .5a7.29 7.29 0 00-6.49 4.075A5.6 5.6 0 006.212 3.5 5.773 5.773 0 00.5 9.333a5.773 5.773 0 005.712 5.833c.069 0 .136-.008.205-.01a5.632 5.632 0 008.325 1.178 7.718 7.718 0 001.589.166c4.327 0 7.169-3.582 7.169-8s-3.173-8-7.5-8z"
    />,
    <path
      className="messages-bubble-typing_svg__a"
      d="M7 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M.75 23a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleTyping;
