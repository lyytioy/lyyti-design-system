import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdAlbumNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-album-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cd-album-note_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={20}
      rx={1}
      ry={1}
    />,
    <path className="cd-album-note_svg__a" d="M3.5 2v20" />,
    <circle className="cd-album-note_svg__a" cx={16} cy={14.5} r={1.5} />,
    <circle className="cd-album-note_svg__a" cx={9} cy={15.5} r={1.5} />,
    <path
      className="cd-album-note_svg__a"
      d="M10.5 15.5V9.754a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V14.5"
    />
  );

export default SvgCdAlbumNote;
