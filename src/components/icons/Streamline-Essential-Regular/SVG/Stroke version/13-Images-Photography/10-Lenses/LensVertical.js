import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="lens-vertical_svg__a"
      d="M20.25 3.75H3.75M15.75 6.75v3M12 6.75v3M8.25 6.75v3M17.25 14.379a1.5 1.5 0 01-.439 1.06l-.311.311h-9l-.311-.311a1.5 1.5 0 01-.439-1.06V12.75h10.5zM7.5 15.75h9v3.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-3.5z"
    />,
    <path
      className="lens-vertical_svg__a"
      d="M7.25.75h9.5a2 2 0 012 2v9a1 1 0 01-1 1H6.25a1 1 0 01-1-1v-9a2 2 0 012-2zM8.25 20.219v1.531a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-1.531"
    />
  );

export default SvgLensVertical;
