import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="hierarchy-2_svg__a"
      x={0.5}
      y={0.499}
      width={13}
      height={3}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-2_svg__a"
      x={10.5}
      y={12.499}
      width={13}
      height={3}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-2_svg__a"
      x={10.5}
      y={20.499}
      width={13}
      height={3}
      rx={1}
      ry={1}
    />,
    <path
      className="hierarchy-2_svg__a"
      d="M17.5 15.499v5M7.5 3.5V8A1.5 1.5 0 009 9.5h7a1.5 1.5 0 011.5 1.5v1.5"
    />
  );

export default SvgHierarchy2;
