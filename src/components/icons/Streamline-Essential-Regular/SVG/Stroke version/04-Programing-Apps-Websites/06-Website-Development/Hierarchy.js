import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="hierarchy_svg__a"
      x={2.25}
      y={18.75}
      width={13.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="hierarchy_svg__a"
      x={2.25}
      y={11.25}
      width={13.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="hierarchy_svg__a"
      x={2.25}
      y={3.75}
      width={13.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="hierarchy_svg__a"
      d="M15.75 21.75h4.5a1.5 1.5 0 001.5-1.5V.75M15.75 14.25h6M15.75 6.75h6"
    />
  );

export default SvgHierarchy;
