import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-diamond_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-diamond_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-diamond_svg__a"
      d="M12.331 3.875a.432.432 0 00-.662 0l-6.838 7.75a.583.583 0 000 .75l6.838 7.75a.432.432 0 00.662 0l6.838-7.75a.583.583 0 000-.75z"
    />
  );

export default SvgMaskDiamond;
