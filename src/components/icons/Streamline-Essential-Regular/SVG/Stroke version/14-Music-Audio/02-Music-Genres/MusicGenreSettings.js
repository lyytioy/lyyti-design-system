import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-settings_svg__a"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-settings_svg__a"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-genre-settings_svg__a"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />,
    <path
      className="music-genre-settings_svg__a"
      d="M9.235 22.923A1.959 1.959 0 016.2 21.191l.072-1.4a1.96 1.96 0 00-2.062-2.057l-1.4.071A1.959 1.959 0 011.4 14.4l1.042-.941a1.959 1.959 0 000-2.908L1.4 9.606A1.959 1.959 0 012.809 6.2l1.4.072a1.96 1.96 0 002.058-2.061L6.2 2.809A1.959 1.959 0 019.606 1.4l.94 1.041a1.959 1.959 0 002.908 0l.94-1.041a1.959 1.959 0 013.411 1.412l-.072 1.4a1.958 1.958 0 002.057 2.055l1.4-.072a1.959 1.959 0 011.872 2.792M12 16.5a4.5 4.5 0 113.967-6.625"
    />
  );

export default SvgMusicGenreSettings;
