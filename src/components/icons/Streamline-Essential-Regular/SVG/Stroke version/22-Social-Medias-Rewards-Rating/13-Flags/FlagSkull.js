import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-skull_svg__a"
      d="M.75 23.25V.75M.75 20.293l3.154-.97a9.61 9.61 0 017.864 1 9.615 9.615 0 007.679 1.056l2.987-.853a1.126 1.126 0 00.816-1.082V3.637a1.126 1.126 0 00-1.434-1.082l-2.369.677a9.615 9.615 0 01-7.679-1.056 9.61 9.61 0 00-7.864-1L.75 2.145M11.25 10.498"
    />,
    <path
      className="flag-skull_svg__a"
      d="M11.25 10.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.25 10.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M12.75 15.748v-1.5"
    />,
    <path
      className="flag-skull_svg__a"
      d="M17.25 11.248a4.5 4.5 0 00-9 0 3.566 3.566 0 001.5 2.582V15a.75.75 0 00.75.75H15a.75.75 0 00.75-.75v-1.17a4.232 4.232 0 001.5-2.582z"
    />
  );

export default SvgFlagSkull;
