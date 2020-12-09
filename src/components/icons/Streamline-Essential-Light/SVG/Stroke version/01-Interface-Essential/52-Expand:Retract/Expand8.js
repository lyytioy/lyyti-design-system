import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand8 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-8_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="expand-8_svg__a"
      x={0.5}
      y={13.499}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="expand-8_svg__a"
      d="M.5 9V1.5a1 1 0 011-1h8M14.5.5h8a1 1 0 011 1v8M23.5 14.5v8a1 1 0 01-1 1H15"
    />
  );

export default SvgExpand8;
