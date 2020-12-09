import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListBullets1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-bullets-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="list-bullets-1_svg__a"
      d="M8.25 3.748h15M8.25 12.748h15M8.25 21.748h15"
    />,
    <rect
      className="list-bullets-1_svg__a"
      x={0.75}
      y={0.748}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="list-bullets-1_svg__a"
      x={0.75}
      y={9.748}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="list-bullets-1_svg__a"
      x={0.75}
      y={18.748}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgListBullets1;
