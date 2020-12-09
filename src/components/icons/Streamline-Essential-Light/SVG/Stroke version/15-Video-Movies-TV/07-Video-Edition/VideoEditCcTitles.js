import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCcTitles = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-cc-titles_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="video-edit-cc-titles_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={21}
      rx={2}
      ry={2}
    />,
    <path
      className="video-edit-cc-titles_svg__a"
      d="M10.5 10.531V10.5a2 2 0 00-2-2h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-.021M19.5 10.531V10.5a2 2 0 00-2-2h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-.021"
    />
  );

export default SvgVideoEditCcTitles;
