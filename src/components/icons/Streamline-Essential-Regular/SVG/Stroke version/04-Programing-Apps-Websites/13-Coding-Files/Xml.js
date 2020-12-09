import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgXml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".xml_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="xml_svg__a"
      d="M.75 3.754h22.5M.75 20.254h22.5M3.75 8.254l3 7.5M6.75 8.254l-3 7.5M17.25 8.254v6a1.5 1.5 0 001.5 1.5h1.5M14.25 15.754v-7.5L12 12.004l-2.25-3.75v7.5"
    />
  );

export default SvgXml;
