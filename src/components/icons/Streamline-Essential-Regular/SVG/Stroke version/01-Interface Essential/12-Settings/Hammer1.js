import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHammer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hammer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hammer-1_svg__a"
      d="M1.409 21.592a2.249 2.249 0 010-3.182l4.7-4.7a.752.752 0 011.061 0l2.121 2.122a.75.75 0 010 1.061l-4.7 4.7a2.251 2.251 0 01-3.182-.001zM14.325 2.333l5.834 5.834-4.243 4.243-5.833-5.834a1.5 1.5 0 010-2.121L12.2 2.333a1.5 1.5 0 012.125 0z"
    />,
    <rect
      className="hammer-1_svg__a"
      x={14.864}
      y={9.739}
      width={9}
      height={3.75}
      rx={1.5}
      ry={1.5}
      transform="rotate(-44.992 19.364 11.615)"
    />,
    <path className="hammer-1_svg__a" d="M13.265 9.758l-5.131 4.909" />
  );

export default SvgHammer1;
