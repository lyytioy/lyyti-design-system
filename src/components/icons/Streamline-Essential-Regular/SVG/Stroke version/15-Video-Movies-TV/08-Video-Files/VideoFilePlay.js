import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFilePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-play_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <path
      className="video-file-play_svg__a"
      d="M10.238 16.41A.856.856 0 019 15.644V9.856a.856.856 0 011.238-.766l5.789 2.895a.855.855 0 010 1.53z"
    />
  );

export default SvgVideoFilePlay;
