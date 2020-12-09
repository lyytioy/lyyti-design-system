import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkmanCassette1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman-cassette-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="walkman-cassette-1_svg__a"
      x={0.75}
      y={4.5}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="walkman-cassette-1_svg__a"
      d="M5.25 19.5l1.5-3h10.5l1.5 3M17.25 13.5a3 3 0 000-6H6.75a3 3 0 000 6zM9.353 13.5a4.5 4.5 0 000-6M14.647 13.5a4.5 4.5 0 010-6"
    />
  );

export default SvgWalkmanCassette1;
