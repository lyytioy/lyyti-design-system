import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanCassette = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-cassette_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="walkman-cassette_svg__a"
      x={0.5}
      y={4.5}
      width={23}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="walkman-cassette_svg__a"
      d="M20 19.5H4l2.707-2.707a1 1 0 01.707-.293h9.172a1 1 0 01.707.293z"
    />,
    <circle className="walkman-cassette_svg__a" cx={5.5} cy={11.51} r={2} />,
    <circle className="walkman-cassette_svg__a" cx={18.5} cy={11.51} r={2} />,
    <path
      className="walkman-cassette_svg__a"
      d="M3.5 6.5h17M5.5 9.51h13M5.5 13.51h13M10.078 13.51a4.95 4.95 0 000-4M13.922 13.51a4.95 4.95 0 010-4"
    />
  );

export default SvgWalkmanCassette;
