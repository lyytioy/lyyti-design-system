import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-download_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="messages-bubble-download_svg__a"
      d="M17.25 14.25v6M17.25 20.25L15 18M17.25 20.25L19.5 18M23.213 10.5a10.5 10.5 0 10-19.391 6.275L.75 23.25l6.464-3.084a10.576 10.576 0 001.772.884"
    />
  );

export default SvgMessagesBubbleDownload;
