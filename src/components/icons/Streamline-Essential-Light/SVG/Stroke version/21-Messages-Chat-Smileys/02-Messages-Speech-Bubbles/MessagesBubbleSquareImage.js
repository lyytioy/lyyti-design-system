import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-image_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-image_svg__a"
      d="M7 14.5l2.451-3.151a1 1 0 011.273-.206L12.5 12.5l1.663-2.14a1 1 0 011.587.067L18.5 14.5z"
    />,
    <circle
      className="messages-bubble-square-image_svg__a"
      cx={8.503}
      cy={7}
      r={1.5}
    />
  );

export default SvgMessagesBubbleSquareImage;
