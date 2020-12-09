import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lens-vertical_svg__a"
      d="M7.5.5a2 2 0 00-2 2v7.586a3.415 3.415 0 001 2.414h11a3.415 3.415 0 001-2.414V2.5a2 2 0 00-2-2zM15.5 21.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1zM19.5 2.5h-15M16.5 4.5v5M7.5 4.5v5M13.5 4.5v5M10.5 4.5v5M17.5 14a1.206 1.206 0 01-.353.853l-.647.647h-9l-.647-.647A1.206 1.206 0 016.5 14v-1.5h11zM7.5 15.5h9v5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-5z"
    />
  );

export default SvgLensVertical;
