import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="hierarchy_svg__a"
      x={2.5}
      y={5}
      width={13}
      height={4}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy_svg__a"
      x={2.5}
      y={12}
      width={13}
      height={4}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy_svg__a"
      x={2.5}
      y={19}
      width={13}
      height={4}
      rx={1}
      ry={1}
    />,
    <path
      className="hierarchy_svg__a"
      d="M21.5 1v19a1 1 0 01-1 1h-5M15.5 7h6M15.5 14h6"
    />
  );

export default SvgHierarchy;
