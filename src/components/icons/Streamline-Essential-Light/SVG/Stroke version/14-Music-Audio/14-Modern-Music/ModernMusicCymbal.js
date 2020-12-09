import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicCymbal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-cymbal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-cymbal_svg__a"
      d="M13 23.5v-9.061M11 14.445V23.5M13 4.561V3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.555M12 .5v2"
    />,
    <path
      className="modern-music-cymbal_svg__a"
      d="M17.5 6.5a8.616 8.616 0 00-5.528-2 8.463 8.463 0 00-5.472 2L3.667 7.53a.5.5 0 00.171.97h16.324a.5.5 0 00.171-.97zM17.5 12.5a8.616 8.616 0 01-5.528 2 8.463 8.463 0 01-5.472-2l-2.833-1.03a.5.5 0 01.171-.97h16.324a.5.5 0 01.171.97z"
    />
  );

export default SvgModernMusicCymbal;
