import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="hierarchy-3_svg__a"
      x={0.5}
      y={0.499}
      width={13}
      height={3}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-3_svg__a"
      x={10.5}
      y={11.499}
      width={13}
      height={3}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-3_svg__a"
      x={0.5}
      y={20.499}
      width={13}
      height={3}
      rx={1}
      ry={1}
    />,
    <path
      className="hierarchy-3_svg__a"
      d="M7.5 3.5V7A1.5 1.5 0 009 8.5h3a1.5 1.5 0 011.5 1.5v1.5M18.5 14.5V20a1.5 1.5 0 01-1.5 1.5h-3.5"
    />
  );

export default SvgHierarchy3;
