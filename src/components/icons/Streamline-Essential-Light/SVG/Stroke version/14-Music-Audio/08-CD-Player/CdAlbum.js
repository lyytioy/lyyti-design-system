import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cd-album_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={20}
      rx={1}
      ry={1}
    />,
    <circle className="cd-album_svg__a" cx={13.5} cy={12} r={8} />,
    <path className="cd-album_svg__a" d="M3.5 2v20" />,
    <circle className="cd-album_svg__a" cx={13.5} cy={12} r={2} />,
    <path
      className="cd-album_svg__a"
      d="M13.5 11.75a.25.25 0 10.25.25.249.249 0 00-.25-.25"
    />
  );

export default SvgCdAlbum;
