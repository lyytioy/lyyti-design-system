import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterAndroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-android_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-android_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-android_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18"
    />,
    <path
      className="paginate-filter-android_svg__a"
      d="M18.75 15.746a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5v-4.5h10.5zM18.75 11.246a5.25 5.25 0 00-10.5 0zM10.663 6.828L9.75 4.439M16.336 6.828l.914-2.389"
    />
  );

export default SvgPaginateFilterAndroid;
