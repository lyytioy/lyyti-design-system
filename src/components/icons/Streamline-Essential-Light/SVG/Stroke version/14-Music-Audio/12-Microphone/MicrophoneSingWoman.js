import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneSingWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-sing-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone-sing-woman_svg__a"
      d="M14.5 8.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.484 11.3a2.554 2.554 0 01-.984.2A2.521 2.521 0 0115 11M10.5 6.5a5.938 5.938 0 004.662-2.069"
    />,
    <rect
      className="microphone-sing-woman_svg__a"
      x={2.5}
      y={8.5}
      width={6}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="microphone-sing-woman_svg__a"
      d="M.5 15.5h4M6.5 15.5h4M2.5 11.5h2M8.5 11.5h-2M2.5 13.5h2M8.5 13.5h-2M5.5 8.5V10M5.5 20.5v3M10.5 14.5v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-2M14.5.841c0 8.942 7.622 2.005 3.8 21.215a.5.5 0 00.866.428C23.552 17.5 27.21.5 16.5.5a6 6 0 00-6 6v2a6 6 0 006 6 6.331 6.331 0 002.869-.723"
    />
  );

export default SvgMicrophoneSingWoman;
