import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgXml1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".xml-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="xml-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="xml-1_svg__a"
      d="M4.5 19.504l4-8M8.5 19.504l-4-8M10.5 19.504v-8l2 4 2-4v8M16.5 11.5V18a1.5 1.5 0 001.5 1.5h2.5"
    />
  );

export default SvgXml1;
