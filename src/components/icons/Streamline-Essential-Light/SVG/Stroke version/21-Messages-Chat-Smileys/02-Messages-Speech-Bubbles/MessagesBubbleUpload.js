import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-upload_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="messages-bubble-upload_svg__a"
      d="M17.5 20.5v-6M17.5 14.5l-2.25 2.25M17.5 14.5l2.25 2.25M21.331 10.478A6.974 6.974 0 0021.5 9C21.5 4.307 16.8.5 11 .5S.5 4.307.5 9a7.744 7.744 0 003.018 5.96L1.5 19.5l5.637-2.6a12.626 12.626 0 002.368.5"
    />
  );

export default SvgMessagesBubbleUpload;
