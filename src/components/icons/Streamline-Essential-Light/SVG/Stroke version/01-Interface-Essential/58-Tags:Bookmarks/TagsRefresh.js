import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-refresh_svg__a"
      d="M16.542 9.049l1.8-1.837a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.05-1.072"
    />,
    <circle className="tags-refresh_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <path
      className="tags-refresh_svg__a"
      d="M14.542 18.498h-3.5v3.5M22.459 19.731A5.572 5.572 0 0111.645 18.5M19.542 16.498h3.5v-3.5M11.625 15.265A5.572 5.572 0 0122.439 16.5"
    />
  );

export default SvgTagsRefresh;
