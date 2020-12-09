import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-text_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="messages-bubble-text_svg__a"
      d="M9.75 9.75h4.5M9.75 12.75h4.5M18 11.25C18 8.351 15.313 6 12 6s-6 2.351-6 5.25a5.307 5.307 0 003.75 4.868v2.632l3.15-2.309A5.529 5.529 0 0018 11.25z"
    />
  );

export default SvgMessagesBubbleText;
