import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTabletTouch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tablet-touch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tablet-touch_svg__a"
      d="M6.5 17.5h-4a2 2 0 01-2-2v-13a2 2 0 012-2h19a2 2 0 012 2V15M4.5 17.499v-17"
    />,
    <path
      className="tablet-touch_svg__a"
      d="M2.75 8.749A.249.249 0 013 9a.25.25 0 01-.25.25A.25.25 0 012.5 9a.249.249 0 01.25-.25M12.653 23.5l-3.806-4.579A1.5 1.5 0 0111.154 17l2.346 2.826V10a1.5 1.5 0 013 0v6.5h3a4 4 0 014 4v3M21.5 7.499v3"
    />
  );

export default SvgTabletTouch;
