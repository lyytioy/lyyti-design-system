import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaginateFilterPicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paginate-filter-picture_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="paginate-filter-picture_svg__a"
      x={3.75}
      y={0.746}
      width={19.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="paginate-filter-picture_svg__a"
      d="M20.25 23.246h-18a1.5 1.5 0 01-1.5-1.5v-18M8.624 6.746A.375.375 0 109 7.121a.375.375 0 00-.375-.375"
    />,
    <path
      className="paginate-filter-picture_svg__a"
      d="M20.25 15.746L16.38 9.91a.749.749 0 00-1.238-.01l-1.995 2.85-1.237-.989a.75.75 0 00-1.092.17l-2.546 3.815z"
    />
  );

export default SvgPaginateFilterPicture;
