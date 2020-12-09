import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-square-upload_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="messages-bubble-square-upload_svg__a"
      d="M17.5 20.5v-6M17.5 14.5l-2.25 2.25M17.5 14.5l2.25 2.25M9.5 14.5h-1l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v8"
    />
  );

export default SvgMessagesBubbleSquareUpload;
