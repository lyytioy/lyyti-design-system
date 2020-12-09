import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="share-2_svg__a" d="M21.75 5.25H13.5a3 3 0 00-3 3V12" />,
    <path
      className="share-2_svg__a"
      d="M17.25 9.75l4.5-4.5-4.5-4.5M18.75 14.25v7.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5H6"
    />
  );

export default SvgShare2;
