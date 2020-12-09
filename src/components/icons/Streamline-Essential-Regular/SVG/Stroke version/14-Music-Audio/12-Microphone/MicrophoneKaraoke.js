import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneKaraoke = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-karaoke_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="microphone-karaoke_svg__a" cx={18} cy={6} r={5.25} />,
    <path
      className="microphone-karaoke_svg__a"
      d="M13.227 1.227l9.546 9.546M17.941 11.25l-10.63 8.821a1.5 1.5 0 01-2-.106l-1.276-1.272a1.5 1.5 0 01-.106-2L12.75 6.059"
    />,
    <path
      className="microphone-karaoke_svg__a"
      d="M12.6 11.568a.375.375 0 11-.53 0 .377.377 0 01.53 0M4.671 19.329L.75 23.25"
    />
  );

export default SvgMicrophoneKaraoke;
