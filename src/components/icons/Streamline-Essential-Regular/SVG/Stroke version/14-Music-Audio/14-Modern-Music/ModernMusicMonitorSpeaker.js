import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicMonitorSpeaker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-monitor-speaker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={18}
      cy={18}
      r={2.25}
    />,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={18}
      cy={11.25}
      r={1.5}
    />,
    <rect
      className="modern-music-monitor-speaker_svg__a"
      x={12.75}
      y={6}
      width={10.5}
      height={17.25}
      rx={2}
      ry={2}
    />,
    <path
      className="modern-music-monitor-speaker_svg__a"
      d="M9.75 17.25h-7.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5M8.25 21v-3.75M7.5 21h2.25"
    />,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={6.75}
      cy={9.75}
      r={1.5}
    />,
    <path
      className="modern-music-monitor-speaker_svg__a"
      d="M13.673 3.739a1.5 1.5 0 00-1.287-.273l-3 .75A1.5 1.5 0 008.25 5.671V9.75M.75 14.25h9"
    />
  );

export default SvgModernMusicMonitorSpeaker;
