import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdAlbumNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-album-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cd-album-note_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path className="cd-album-note_svg__a" d="M3.75 1.5v21" />,
    <circle
      className="cd-album-note_svg__a"
      cx={9.375}
      cy={15.375}
      r={1.875}
    />,
    <circle
      className="cd-album-note_svg__a"
      cx={16.875}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="cd-album-note_svg__a"
      d="M11.25 15.375V8.75a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0118.75 7.5v5.625"
    />
  );

export default SvgCdAlbumNote;
