import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-upload_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="messages-bubble-upload_svg__a"
      d="M17.25 20.25v-6M17.25 14.25L15 16.5M17.25 14.25l2.25 2.25M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.75 23.25l6.474-3.084A10.652 10.652 0 009 21.05"
    />
  );

export default SvgMessagesBubbleUpload;
