import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-settings_svg__a"
      d="M18.5 9.5v-8a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-settings_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-settings_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-settings_svg__a"
      d="M6.5 13V7.254a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V12"
    />,
    <circle
      className="playlist-settings_svg__a"
      cx={18.5}
      cy={17.875}
      r={1.25}
    />,
    <path
      className="playlist-settings_svg__a"
      d="M19.562 13.039l.368 1.211a.827.827 0 00.978.567l1.227-.284a1.116 1.116 0 011.065 1.849l-.858.925a.836.836 0 000 1.136l.858.925a1.116 1.116 0 01-1.062 1.849l-1.227-.284a.827.827 0 00-.978.567l-.368 1.211a1.109 1.109 0 01-2.124 0L17.07 21.5a.827.827 0 00-.978-.567l-1.227.284a1.116 1.116 0 01-1.065-1.849l.858-.925a.836.836 0 000-1.136l-.858-.925a1.116 1.116 0 011.062-1.849l1.227.284a.827.827 0 00.978-.567l.368-1.211a1.109 1.109 0 012.127 0z"
    />
  );

export default SvgPlaylistSettings;
