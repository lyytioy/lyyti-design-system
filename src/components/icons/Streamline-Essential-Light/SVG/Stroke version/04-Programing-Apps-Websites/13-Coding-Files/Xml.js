import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgXml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".xml_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="xml_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="xml_svg__a"
      d="M5.5 15.004l3-6M8.5 15.004l-3-6M10.5 15.004v-6l1.5 3 1.5-3v6M15.5 9v5a1 1 0 001 1h2"
    />
  );

export default SvgXml;
