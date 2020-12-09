import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionLayout2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-layout-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-layout-2_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-layout-2_svg__a"
      d="M12 1v7M12 16v7M1 8h22M23 16H1"
    />
  );

export default SvgCompositionLayout2;
