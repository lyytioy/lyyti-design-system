import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain-3_svg__a"
      d="M.75 23.25V.75M.75 17.708l3.154-.97a9.61 9.61 0 017.864 1 9.615 9.615 0 007.679 1.062l2.987-.854a1.125 1.125 0 00.816-1.082V5.137a1.126 1.126 0 00-1.434-1.082l-2.369.677a9.615 9.615 0 01-7.679-1.056 9.61 9.61 0 00-7.864-1L.75 3.645"
    />
  );

export default SvgFlagPlain3;
