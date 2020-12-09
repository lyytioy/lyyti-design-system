import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocketBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".socket-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="socket-box_svg__a"
      x={5.501}
      y={0.5}
      width={18}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="socket-box_svg__a"
      d="M17.501 6.547V7.5M19.501 6.547V7.5"
    />,
    <circle className="socket-box_svg__a" cx={18.501} cy={7} r={3} />,
    <path
      className="socket-box_svg__a"
      d="M9.501 6.547V7.5M11.501 6.547V7.5"
    />,
    <circle className="socket-box_svg__a" cx={10.501} cy={7} r={3} />,
    <path
      className="socket-box_svg__a"
      d="M17.501 16.547v.953M19.501 16.547v.953"
    />,
    <circle className="socket-box_svg__a" cx={18.501} cy={17} r={3} />,
    <path
      className="socket-box_svg__a"
      d="M9.501 16.547v.953M11.501 16.547v.953"
    />,
    <circle className="socket-box_svg__a" cx={10.501} cy={17} r={3} />,
    <path
      className="socket-box_svg__a"
      d="M.5 7.5a2 2 0 012 2v8a2 2 0 002 2h1"
    />
  );

export default SvgSocketBox;
