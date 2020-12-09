import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="playlist_svg__a" d="M.75 5.25v15M23.25 5.25v15" />,
    <rect
      className="playlist_svg__a"
      x={3.75}
      y={2.25}
      width={16.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="playlist_svg__a" cx={7.875} cy={16.125} r={1.875} />,
    <circle className="playlist_svg__a" cx={15.375} cy={13.875} r={1.875} />,
    <path
      className="playlist_svg__a"
      d="M9.75 16.125V9.5a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0117.25 8.25v5.625"
    />
  );

export default SvgPlaylist;
