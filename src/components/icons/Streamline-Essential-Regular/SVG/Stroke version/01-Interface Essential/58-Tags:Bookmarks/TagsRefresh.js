import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-refresh_svg__a"
      d="M6.879 19.188L1.5 13.81a1.5 1.5 0 010-2.122L12 1.188a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.439 1.06"
    />,
    <path
      className="tags-refresh_svg__a"
      d="M16.189 4.124a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.689 18.749h-3.75v3.75M22.357 19.482a5.572 5.572 0 01-10.74-.733M19.189 15.749h3.75v-3.75M11.522 15.015a5.573 5.573 0 0110.74.734"
    />
  );

export default SvgTagsRefresh;
