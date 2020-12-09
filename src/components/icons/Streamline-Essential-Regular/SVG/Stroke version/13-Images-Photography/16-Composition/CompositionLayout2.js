import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionLayout2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-layout-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="composition-layout-2_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-layout-2_svg__a"
      d="M12 .75v7.5M12 15.75v7.5M.75 8.25h22.5M23.25 15.75H.75"
    />
  );

export default SvgCompositionLayout2;
