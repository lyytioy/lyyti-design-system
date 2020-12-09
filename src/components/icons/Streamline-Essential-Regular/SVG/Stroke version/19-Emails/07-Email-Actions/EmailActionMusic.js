import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-music_svg__a"
      d="M19.5 12.88V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.63"
    />,
    <path
      className="email-action-music_svg__a"
      d="M21.284 11.465a.75.75 0 011.216.587v9.7a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-9.7a.75.75 0 011.216-.587l7.431 5.894a3 3 0 003.706 0z"
    />,
    <circle
      className="email-action-music_svg__a"
      cx={8.999}
      cy={11.301}
      r={1.5}
    />,
    <circle
      className="email-action-music_svg__a"
      cx={14.999}
      cy={9.801}
      r={1.5}
    />,
    <path
      className="email-action-music_svg__a"
      d="M16.5 9.8V4.972a1.5 1.5 0 00-1.864-1.455l-3 .75A1.5 1.5 0 0010.5 5.722V11.3"
    />
  );

export default SvgEmailActionMusic;
