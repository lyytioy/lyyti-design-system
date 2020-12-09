import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-settings_svg__a"
      d="M20.25 6.75v-4.5a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-settings_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-settings_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423V6.75"
    />,
    <circle
      className="playlist-settings_svg__a"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="playlist-settings_svg__a"
      d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548.006z"
    />
  );

export default SvgPlaylistSettings;
