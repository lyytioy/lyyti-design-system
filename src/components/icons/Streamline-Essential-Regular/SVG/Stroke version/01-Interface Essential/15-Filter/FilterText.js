import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilterText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".filter-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="filter-text_svg__a"
      d="M14.247 5.25h7.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5h-13.5a1.5 1.5 0 01-1.5-1.5v-6M12.747 9.75h7.503M10.497 14.25h9.753M10.5 18.75h9.75M8.25 9.75v-3l4.189-4.189a1.061 1.061 0 00-.75-1.811H1.811a1.061 1.061 0 00-.75 1.811L5.25 6.75v6z"
    />
  );

export default SvgFilterText;
