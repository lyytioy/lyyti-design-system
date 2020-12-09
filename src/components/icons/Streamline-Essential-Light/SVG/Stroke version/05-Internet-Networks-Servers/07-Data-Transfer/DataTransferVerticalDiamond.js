import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferVerticalDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-vertical-diamond_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="data-transfer-vertical-diamond_svg__a"
      x={4.18}
      y={4.18}
      width={15.556}
      height={15.556}
      rx={1}
      ry={1}
      transform="rotate(-45 11.958 11.958)"
    />,
    <path
      className="data-transfer-vertical-diamond_svg__a"
      d="M11.988 6.985v10M8.988 9.985l3-3 3 3M14.988 13.985l-3 3-3-3"
    />
  );

export default SvgDataTransferVerticalDiamond;
