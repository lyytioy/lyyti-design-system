import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-split_svg__a"
      d="M14 21.5h8a1 1 0 001-1v-13a1 1 0 00-1-1h-8M10 6.5H2a1 1 0 00-1 1v13a1 1 0 001 1h8"
    />,
    <path
      className="video-edit-split_svg__a"
      d="M23 18.5h-8v-9h8M19 9.5v-3M15 10V6.5M19 21.5v-3M15 21.5v-3M1 9.5h8v9H1M9 9.5v-3M5 9.5v-3M5 21.5v-3M9 21.5v-3M12 4.5V7M12 10v2.5M12 15.5V18M12 21v2.5M10 .5l2 4 2-4h-4z"
    />
  );

export default SvgVideoEditSplit;
