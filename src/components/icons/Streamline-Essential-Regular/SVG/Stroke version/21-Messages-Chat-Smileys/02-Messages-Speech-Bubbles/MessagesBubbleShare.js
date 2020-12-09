import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-share_svg__a"
      cx={13.5}
      cy={17.998}
      r={2.25}
    />,
    <circle
      className="messages-bubble-share_svg__a"
      cx={21}
      cy={20.998}
      r={2.25}
    />,
    <circle
      className="messages-bubble-share_svg__a"
      cx={21}
      cy={13.498}
      r={2.25}
    />,
    <path
      className="messages-bubble-share_svg__a"
      d="M15.424 16.843l3.65-2.19M15.588 18.833l3.324 1.33M22.834 8.316a10.5 10.5 0 10-19 8.459L.75 23.25l6.474-3.083A10.725 10.725 0 009 21.05"
    />
  );

export default SvgMessagesBubbleShare;
