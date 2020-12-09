import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-text_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      cx={12}
      cy={12}
      r={11.5}
      strokeDasharray="7.505 2.814"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      className="messages-bubble-text_svg__b"
      d="M19.513 10.793c0 2.929-2.911 5.3-6.5 5.3a7.821 7.821 0 01-2.278-.334L7 17.5l1.463-2.92a4.871 4.871 0 01-1.95-3.787c0-2.93 2.91-5.3 6.5-5.3s6.5 2.37 6.5 5.3zM10.459 8.5h5M10.459 10.5h5M10.459 12.5h5"
    />
  );

export default SvgMessagesBubbleText;
