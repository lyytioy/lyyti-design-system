import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-information_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle
      className="playlist-information_svg__a"
      cx={12.003}
      cy={12}
      r={1.5}
    />,
    <circle
      className="playlist-information_svg__a"
      cx={5.003}
      cy={13}
      r={1.5}
    />,
    <path
      className="playlist-information_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12"
    />,
    <circle
      className="playlist-information_svg__a"
      cx={18.497}
      cy={18.5}
      r={5}
    />,
    <path
      className="playlist-information_svg__a"
      d="M18.5 20.5V19a.5.5 0 00-.5-.5h-.5M17.497 20.5h2M18 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPlaylistInformation;
