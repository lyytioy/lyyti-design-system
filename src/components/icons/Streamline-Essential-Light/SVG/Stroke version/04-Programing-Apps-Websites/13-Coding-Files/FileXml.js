import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileXml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-xml_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-xml_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-xml_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M5.5 18.504l3-6M8.5 18.504l-3-6M10.5 18.504v-6l1.5 3 1.5-3v6M15.5 12.5v5a1 1 0 001 1h2"
    />
  );

export default SvgFileXml;
