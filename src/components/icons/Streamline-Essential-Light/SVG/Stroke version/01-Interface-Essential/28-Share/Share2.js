import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="share-2_svg__a"
      d="M15.5 9.5v13a1 1 0 01-1 1h-13a1 1 0 01-1-1v-13a1 1 0 011-1h4M19.5.499l4 4-4 4"
    />,
    <path className="share-2_svg__a" d="M23.5 4.5H14A5.5 5.5 0 008.5 10v1.5" />
  );

export default SvgShare2;
