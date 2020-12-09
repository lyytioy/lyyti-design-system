import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-share_svg__a"
      cx={13.75}
      cy={18.25}
      r={2.25}
    />,
    <circle
      className="messages-bubble-share_svg__a"
      cx={21.25}
      cy={21.25}
      r={2.25}
    />,
    <circle
      className="messages-bubble-share_svg__a"
      cx={21.25}
      cy={13.75}
      r={2.25}
    />,
    <path
      className="messages-bubble-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.086l3.324 1.329M21.479 9.5c.014-.165.021-.332.021-.5C21.5 4.307 16.8.5 11 .5S.5 4.307.5 9a7.744 7.744 0 003.018 5.96L1.5 19.5l5.637-2.6a12.626 12.626 0 002.368.5"
    />
  );

export default SvgMessagesBubbleShare;
