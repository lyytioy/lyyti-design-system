import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferSquareVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-square-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-square-vertical_svg__a"
      d="M9.5 3.5v10M14.5 10.5v10M12.5 6.5l-3-3-3 3M17.5 17.5l-3 3-3-3"
    />,
    <rect
      className="data-transfer-square-vertical_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgDataTransferSquareVertical;
