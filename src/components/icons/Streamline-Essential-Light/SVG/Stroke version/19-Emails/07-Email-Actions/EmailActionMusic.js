import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-music_svg__a"
      d="M19.5 8.75l4 2.75V22a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 22V11.5l4-2.75"
    />,
    <path
      className="email-action-music_svg__a"
      d="M3.5 20.5l5-4h7l5 4M23.5 11.5l-6 4M.5 11.5l6 4M19.5 14.167V1.5a1 1 0 00-1-1h-13a1 1 0 00-1 1v12.667"
    />,
    <circle
      className="email-action-music_svg__a"
      cx={9.247}
      cy={10.863}
      r={1.25}
    />,
    <circle
      className="email-action-music_svg__a"
      cx={14.247}
      cy={9.363}
      r={1.25}
    />,
    <path
      className="email-action-music_svg__a"
      d="M10.5 10.613V6.334a1 1 0 01.684-.949l3-.833A1 1 0 0115.5 5.5v3.613"
    />
  );

export default SvgEmailActionMusic;
