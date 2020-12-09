import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferVerticalDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-vertical-diamond_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-vertical-diamond_svg__a"
      d="M9 9l3-3 3 3M9 15l3 3 3-3M12 6v12"
    />,
    <path
      className="data-transfer-vertical-diamond_svg__a"
      d="M1.28 13.281a1.812 1.812 0 010-2.561l9.44-9.439a1.808 1.808 0 012.56 0l9.44 9.439a1.812 1.812 0 010 2.561l-9.44 9.439a1.811 1.811 0 01-2.56 0z"
    />
  );

export default SvgDataTransferVerticalDiamond;
