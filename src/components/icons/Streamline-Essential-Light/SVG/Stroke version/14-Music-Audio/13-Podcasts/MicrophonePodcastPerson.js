import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcastPerson = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast-person_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone-podcast-person_svg__a"
      d="M6.5 17.5a3 3 0 01-6 0v-6a3 3 0 016 0zM.5 12.5h2M.5 14.5h2M.5 16.5h2M6.5 12.5h-2M6.5 14.5h-2M6.5 16.5h-2M3.5 20.5v3M1.5 23.5h4"
    />,
    <circle
      className="microphone-podcast-person_svg__a"
      cx={19.5}
      cy={12.5}
      r={4}
    />,
    <path
      className="microphone-podcast-person_svg__a"
      d="M19.5 6.5v2M21.5 4.5a2 2 0 01-4 0v-3a1 1 0 011-1h2a1 1 0 011 1z"
    />,
    <circle
      className="microphone-podcast-person_svg__a"
      cx={19.5}
      cy={12.5}
      r={2}
    />,
    <path
      className="microphone-podcast-person_svg__a"
      d="M17.5 3.676c-3.18.64-6.135 3-6.135 6.7 0 .7-1.96 3.093-1.86 4.49.032.442.043.789.606.814s1.324-.005 1.324-.005-.034 3.3.747 4.076c.611.611 1.579.736 3.318.728V23.5M23.5 4.642a8.348 8.348 0 00-2-.84"
    />
  );

export default SvgMicrophonePodcastPerson;
