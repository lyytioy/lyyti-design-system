import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="focus-landscape_svg__a"
      d="M23.25 20.25a3 3 0 01-3 3M20.25.75a3 3 0 013 3M.75 3.75a3 3 0 013-3M3.75 23.25a3 3 0 01-3-3M3.75 15.75h16.5M7.5 15.75l4.7-6.468a1.5 1.5 0 012.479.077l4.071 6.391"
    />,
    <circle className="focus-landscape_svg__a" cx={6.75} cy={6.75} r={1.5} />
  );

export default SvgFocusLandscape;
