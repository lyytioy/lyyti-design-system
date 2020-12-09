import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-search_svg__a"
      d="M7.5 20.253H2.247a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061v1.628"
    />,
    <rect
      className="file-code-search_svg__a"
      x={6.747}
      y={5.253}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-search_svg__a"
      d="M3.747 5.253v4.5M12.747 5.253v3"
    />,
    <rect
      className="file-code-search_svg__a"
      x={3.747}
      y={12.753}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <circle
      className="file-code-search_svg__a"
      cx={15.747}
      cy={15.753}
      r={5.25}
    />,
    <path className="file-code-search_svg__a" d="M23.247 23.253l-3.788-3.787" />
  );

export default SvgFileCodeSearch;
