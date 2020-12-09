import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileXml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-xml_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-xml_svg__a"
      d="M3.751 23.254h-1.5a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5H12.88a1.5 1.5 0 011.061.439l5.871 5.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <path
      className="file-xml_svg__a"
      d="M20.251 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M6.751 15.754l3 7.5M9.751 15.754l-3 7.5M20.251 15.754v6a1.5 1.5 0 001.5 1.5h1.5M17.251 23.254v-7.5l-2.25 3.75-2.25-3.75v7.5"
    />
  );

export default SvgFileXml;
