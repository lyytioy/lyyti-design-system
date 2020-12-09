import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesHumanMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-human-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones-human-music_svg__a"
      d="M12.5 5.123a7.457 7.457 0 00-2.5-.607M13 23.5v-3c3.63.015 4-1.87 4-4.5h1.222c1-.044.872-2.118-1.222-4a7.523 7.523 0 00-.149-1.5M7 4.927A7.493 7.493 0 005 17.99v5.51"
    />,
    <path
      className="headphones-human-music_svg__a"
      d="M10 8.837V3.5a1 1 0 00-1-1H8a1 1 0 00-1 1v5.337a3.5 3.5 0 103 0zM7.5 12.5h2"
    />,
    <circle
      className="headphones-human-music_svg__a"
      cx={15.75}
      cy={6.863}
      r={1.25}
    />,
    <circle
      className="headphones-human-music_svg__a"
      cx={20.75}
      cy={5.363}
      r={1.25}
    />,
    <path
      className="headphones-human-music_svg__a"
      d="M17 6.863v-4.53a1 1 0 01.684-.948l3-.834A1 1 0 0122 1.5v3.863"
    />
  );

export default SvgHeadphonesHumanMusic;
