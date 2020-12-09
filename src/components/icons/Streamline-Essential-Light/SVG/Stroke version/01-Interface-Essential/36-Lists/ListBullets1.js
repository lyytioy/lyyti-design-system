import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListBullets1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-bullets-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="list-bullets-1_svg__a"
      d="M8.5 4.498h15M8.5 12.498h15M8.5 20.498h15"
    />,
    <rect
      className="list-bullets-1_svg__a"
      x={0.5}
      y={2.498}
      width={4}
      height={4}
      rx={1}
      ry={1}
    />,
    <rect
      className="list-bullets-1_svg__a"
      x={0.5}
      y={10.498}
      width={4}
      height={4}
      rx={1}
      ry={1}
    />,
    <rect
      className="list-bullets-1_svg__a"
      x={0.5}
      y={18.498}
      width={4}
      height={4}
      rx={1}
      ry={1}
    />
  );

export default SvgListBullets1;
