import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="cd-player_svg__a" d="M20.5 22.5v1M3.5 22.5v1" />,
    <rect
      className="cd-player_svg__a"
      x={3.5}
      y={17.491}
      width={11}
      height={3.009}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="cd-player_svg__a" cx={10.5} cy={9.5} r={1} />,
    <rect
      className="cd-player_svg__a"
      x={0.5}
      y={15.5}
      width={23}
      height={7}
      rx={2}
      ry={2}
    />,
    <circle className="cd-player_svg__a" cx={10.5} cy={9.5} r={3} />,
    <path
      className="cd-player_svg__a"
      d="M20.75 18.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.75 18.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="cd-player_svg__a" cx={17.25} cy={6.863} r={1.25} />,
    <circle className="cd-player_svg__a" cx={22.25} cy={5.363} r={1.25} />,
    <path
      className="cd-player_svg__a"
      d="M18.5 6.863v-4.53a1 1 0 01.684-.948l3-.834A1 1 0 0123.5 1.5v3.863M18.553 13.5a8.97 8.97 0 00.917-3.5M16.5 2.805A8.987 8.987 0 002.447 13.5"
    />
  );

export default SvgCdPlayer;
