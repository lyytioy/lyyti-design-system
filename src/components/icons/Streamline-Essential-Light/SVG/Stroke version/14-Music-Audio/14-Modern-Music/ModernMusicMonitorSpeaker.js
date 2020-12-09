import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicMonitorSpeaker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-monitor-speaker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-music-monitor-speaker_svg__a"
      x={13.5}
      y={5.5}
      width={10}
      height={18}
      rx={2}
      ry={2}
    />,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={18.5}
      cy={10}
      r={1.5}
    />,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={18.5}
      cy={17.5}
      r={3}
    />,
    <path
      className="modern-music-monitor-speaker_svg__a"
      d="M11.5 17.5h-9a2 2 0 01-2-2v-13a2 2 0 012-2h14a2 2 0 012 2v1M9.5 17.5v3M7.5 20.5h4"
    />,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={5.25}
      cy={10.25}
      r={1.25}
    />,
    <circle
      className="modern-music-monitor-speaker_svg__a"
      cx={10.25}
      cy={8.75}
      r={1.25}
    />,
    <path
      className="modern-music-monitor-speaker_svg__a"
      d="M6.5 10.25V5.721a1 1 0 01.684-.949l3-.833a1 1 0 011.316.948V8.75M.5 14.5h11"
    />
  );

export default SvgModernMusicMonitorSpeaker;
