import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cd-album_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path className="cd-album_svg__a" d="M3.75 1.5v21" />,
    <circle className="cd-album_svg__a" cx={13.5} cy={12} r={6.75} />,
    <circle className="cd-album_svg__a" cx={13.5} cy={12} r={2.25} />
  );

export default SvgCdAlbum;
