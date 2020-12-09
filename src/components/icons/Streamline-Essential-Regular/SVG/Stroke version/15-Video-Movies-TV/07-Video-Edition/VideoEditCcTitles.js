import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCcTitles = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-cc-titles_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-edit-cc-titles_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="video-edit-cc-titles_svg__a"
      d="M10.5 8.25H8.25a3 3 0 00-3 3v1.5a3 3 0 003 3h2.25M18 8.25h-2.25a3 3 0 00-3 3v1.5a3 3 0 003 3H18"
    />
  );

export default SvgVideoEditCcTitles;
