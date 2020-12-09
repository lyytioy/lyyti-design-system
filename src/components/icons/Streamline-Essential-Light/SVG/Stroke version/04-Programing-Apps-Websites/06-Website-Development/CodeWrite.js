import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCodeWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".code-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="code-write_svg__a"
      d="M16 22.5l-3.5 1 1-3.5 7.147-7.148a.5.5 0 01.708 0l1.792 1.792a.5.5 0 010 .708zM19.001 14.499l2.5 2.5M13.5 20.001l2.5 2.5"
    />,
    <rect
      className="code-write_svg__a"
      x={3.5}
      y={7.5}
      width={5}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="code-write_svg__a"
      x={3.5}
      y={12.5}
      width={5}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="code-write_svg__a"
      x={3.5}
      y={17.5}
      width={5}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="code-write_svg__a"
      d="M10 23.5H1.5a1 1 0 01-1-1v-21a1 1 0 011-1h9.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V13"
    />,
    <path
      className="code-write_svg__a"
      d="M11.5.59V5.5a1 1 0 001 1h4.91M8.5 8.5h2a1 1 0 011 1v8a1 1 0 01-1 1h-2M8.5 13.5H14"
    />
  );

export default SvgCodeWrite;
