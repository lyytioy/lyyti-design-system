import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcastPerson = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast-person_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-podcast-person_svg__a"
      d="M6.76 17.427a2.908 2.908 0 01-2.985 2.823 2.909 2.909 0 01-3-2.8L.75 11.823A2.908 2.908 0 013.735 9a2.908 2.908 0 013.005 2.8zM.753 13.5h2.996M.76 16.5h2.989M3.749 20.25l.011 2.993M2.249 23.25h3"
    />,
    <circle
      className="microphone-podcast-person_svg__a"
      cx={19.499}
      cy={12.75}
      r={3}
    />,
    <path
      className="microphone-podcast-person_svg__a"
      d="M19.499 6.75l-.01 3M18.249.75h2.5a1 1 0 011 1v3.5a1.5 1.5 0 01-1.5 1.5h-1.5a1.5 1.5 0 01-1.5-1.5v-3.5a1 1 0 011-1zM17.249 3.41C12.941 4.823 11.871 9.7 9.749 15h3v3.3a2.7 2.7 0 002.7 2.7H16.5v2.25M23.249 3.628a8.511 8.511 0 00-1.5-.457"
    />
  );

export default SvgMicrophonePodcastPerson;
