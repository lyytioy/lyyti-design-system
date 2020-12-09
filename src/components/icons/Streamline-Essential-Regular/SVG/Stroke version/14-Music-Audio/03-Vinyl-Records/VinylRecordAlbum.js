import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecordAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vinyl-record-album_svg__a"
      d="M.75 22.5h13.5a1.5 1.5 0 001.5-1.5V3a1.5 1.5 0 00-1.5-1.5H.75"
    />,
    <circle
      className="vinyl-record-album_svg__a"
      cx={3.375}
      cy={15.375}
      r={1.875}
    />,
    <circle
      className="vinyl-record-album_svg__a"
      cx={10.875}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="vinyl-record-album_svg__a"
      d="M5.25 15.375V8.75a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0112.75 7.5v5.625M15.75 14.112a2.227 2.227 0 00.75.138 2.25 2.25 0 000-4.5 2.227 2.227 0 00-.75.138"
    />,
    <path
      className="vinyl-record-album_svg__a"
      d="M15.75 18.674a6.614 6.614 0 00.75.076 6.75 6.75 0 000-13.5 6.614 6.614 0 00-.75.076"
    />
  );

export default SvgVinylRecordAlbum;
