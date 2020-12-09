import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paginate-filter-camera_svg__a"
      d="M19.5 7.5l-3 1v-1A1.5 1.5 0 0015 6H9a1.5 1.5 0 00-1.5 1.5v6A1.5 1.5 0 009 15h6a1.5 1.5 0 001.5-1.5v-1l3 1z"
    />,
    <rect
      className="paginate-filter-camera_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-camera_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />
  );

export default SvgPaginateFilterCamera;
