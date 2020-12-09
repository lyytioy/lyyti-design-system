import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-triangle_svg__a"
      d="M10.174 20.086H3.43a1.581 1.581 0 01-1.369-2.371l3.008-5.109M18.931 10.6l4.105 7.116a1.581 1.581 0 01-1.369 2.371H14.92M7.077 9.021l4.1-7.111a1.582 1.582 0 012.739 0l2.949 5.107"
    />,
    <path
      className="synchronize-arrows-triangle_svg__a"
      d="M18.081 16.925l-3.161 3.161 3.161 3.161M18.024 2.698l-1.157 4.319-4.318-1.157M.75 13.763l4.319-1.157 1.157 4.319"
    />
  );

export default SvgSynchronizeArrowsTriangle;
