import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecordAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record-album_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vinyl-record-album_svg__a"
      x={0.5}
      y={3}
      width={13}
      height={18}
      rx={1}
      ry={1}
    />,
    <path className="vinyl-record-album_svg__a" d="M15.5 15a3 3 0 000-6" />,
    <circle
      className="vinyl-record-album_svg__a"
      cx={4.25}
      cy={14.75}
      r={1.25}
    />,
    <circle
      className="vinyl-record-album_svg__a"
      cx={9.25}
      cy={13.25}
      r={1.25}
    />,
    <path
      className="vinyl-record-album_svg__a"
      d="M5.5 14.75v-4.529a1 1 0 01.684-.949l3-.833a1 1 0 011.316.948v3.863M15.5 20a8 8 0 000-16"
    />
  );

export default SvgVinylRecordAlbum;
