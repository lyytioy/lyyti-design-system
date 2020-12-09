import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgXml1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".xml-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="xml-1_svg__a"
      x={0.75}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="xml-1_svg__a"
      d="M4.5 10.504l3 7.5M7.5 10.504l-3 7.5M18 10.5v6a1.5 1.5 0 001.5 1.5H21M15 18.004v-7.5l-2.25 3.75-2.25-3.75v7.5"
    />
  );

export default SvgXml1;
