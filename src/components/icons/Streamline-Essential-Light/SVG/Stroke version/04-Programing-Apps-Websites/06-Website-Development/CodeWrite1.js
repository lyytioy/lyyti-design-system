import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCodeWrite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".code-write-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="code-write-1_svg__a"
      d="M10.5 22.5h-9a1 1 0 01-1-1v-20a1 1 0 011-1h11.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V13"
    />,
    <path className="code-write-1_svg__a" d="M12.5.5v4a1 1 0 001 1h4" />,
    <rect
      className="code-write-1_svg__a"
      x={3.5}
      y={6.5}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="code-write-1_svg__a"
      x={3.5}
      y={13.5}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="code-write-1_svg__a"
      d="M7.5 8.5h2a1 1 0 011 1v5a1 1 0 01-1 1h-2M14 11.5h-3M16.206 22.5l-3.5 1 1-3.5 7.148-7.148a.5.5 0 01.707 0l1.793 1.792a.5.5 0 010 .708zM19.207 14.499l2.5 2.5M13.706 20.001l2.5 2.5"
    />
  );

export default SvgCodeWrite1;
