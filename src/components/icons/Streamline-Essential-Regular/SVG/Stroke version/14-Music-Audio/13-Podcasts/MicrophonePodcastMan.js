import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcastMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-podcast-man_svg__a"
      d="M6.75 17.427a2.909 2.909 0 01-2.985 2.823 2.917 2.917 0 01-3.015-2.8v-5.627A2.9 2.9 0 013.725 9a2.927 2.927 0 013.025 2.8zM.75 13.5h2.989M.75 16.5h2.989M3.75 20.25l.01 2.993M2.25 23.25h3M11.25 17.25h-1.5a6.751 6.751 0 0112.626-3.324M12.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="microphone-podcast-man_svg__a"
      cx={16.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="microphone-podcast-man_svg__a"
      d="M14.75 15.75h5a.5.5 0 01.5.5v4.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4.5a.5.5 0 01.5-.5zM20.25 17.25h1.5a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgMicrophonePodcastMan;
