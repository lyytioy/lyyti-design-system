import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-close_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="focus-close_svg__a" cx={9} cy={12.5} r={6.5} />,
    <path
      className="focus-close_svg__a"
      d="M20.964 8.6a5.106 5.106 0 01-.9 2.306M17.718 12.689a5.062 5.062 0 01-2.208.285M11.263 6.405a5.031 5.031 0 01.83-1.519M14.036 3.406a4.953 4.953 0 012.443-.381M19.206 4.163a5.109 5.109 0 011.447 2.007M.5 4V2a1 1 0 011-1h2M23.5 4V2a1 1 0 00-1-1h-2M.5 20v2a1 1 0 001 1h2M23.5 20v2a1 1 0 01-1 1h-2"
    />
  );

export default SvgFocusClose;
