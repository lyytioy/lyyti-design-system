import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="drawer-music_svg__a" cx={9.248} cy={10.363} r={1.25} />,
    <circle className="drawer-music_svg__a" cx={14.248} cy={8.863} r={1.25} />,
    <path
      className="drawer-music_svg__a"
      d="M10.5 10.113v-4.28a1 1 0 01.684-.948l3-.834A1 1 0 0115.5 5v3.613"
    />,
    <path
      className="drawer-music_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6"
    />
  );

export default SvgDrawerMusic;
