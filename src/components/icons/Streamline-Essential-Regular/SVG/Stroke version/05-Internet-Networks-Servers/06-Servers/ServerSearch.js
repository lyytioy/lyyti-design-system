import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-search_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-search_svg__a"
      d="M9.751 9.75h-4.5a4.5 4.5 0 010-9h12A4.5 4.5 0 0120.3 8.562M7.5 18.75H5.251a4.5 4.5 0 010-9h4.5M10.501 5.25h6.75"
    />,
    <circle className="server-search_svg__a" cx={15.751} cy={15.75} r={5.25} />,
    <path className="server-search_svg__a" d="M23.251 23.25l-3.788-3.788" />
  );

export default SvgServerSearch;
