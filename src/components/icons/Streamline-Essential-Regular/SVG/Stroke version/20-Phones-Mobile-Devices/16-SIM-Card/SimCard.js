import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSimCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sim-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sim-card_svg__a"
      d="M21.25 6.555a1.5 1.5 0 00-.361-.976l-4.44-4.3A1.5 1.5 0 0015.31.75H4.75a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5z"
    />,
    <rect
      className="sim-card_svg__a"
      x={7.75}
      y={14.25}
      width={7.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="sim-card_svg__a"
      d="M7.75 17.25h1.5M15.25 17.25h-1.5M7.75.75v4.5M12.25.75v4.5"
    />
  );

export default SvgSimCard;
