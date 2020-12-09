import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanCassette = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-cassette_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="walkman-cassette_svg__a"
      x={0.75}
      y={4.5}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="walkman-cassette_svg__a"
      d="M15 16.5H9a1.5 1.5 0 00-1.2.6L6 19.5h12l-1.8-2.4a1.5 1.5 0 00-1.2-.6z"
    />,
    <circle className="walkman-cassette_svg__a" cx={5.25} cy={12} r={1.5} />,
    <circle className="walkman-cassette_svg__a" cx={18.75} cy={12} r={1.5} />,
    <path className="walkman-cassette_svg__a" d="M6.75 7.5h10.5" />,
    <rect
      className="walkman-cassette_svg__a"
      x={9.75}
      y={10.5}
      width={4.5}
      height={3}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgWalkmanCassette;
