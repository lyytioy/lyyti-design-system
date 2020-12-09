import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus-landscape_svg__a"
      d="M.5 18.5v2a1 1 0 001 1h2M3.5 2.5h-2a1 1 0 00-1 1v2M23.5 5.5v-2a1 1 0 00-1-1h-2M20.5 21.5h2a1 1 0 001-1v-2M19 17.5l-2.649-7.064c-.193-.515-.6-.562-.906-.1L12 15.5l-1.86-2.232a.666.666 0 00-1.154.089L6.5 17.5"
    />,
    <circle className="focus-landscape_svg__a" cx={8} cy={7} r={1.5} />,
    <path className="focus-landscape_svg__a" d="M20.5 17.5h-17" />
  );

export default SvgFocusLandscape;
