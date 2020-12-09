import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTablet1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tablet-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="tablet-1_svg__a"
      x={3.5}
      y={0.5}
      width={17}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="tablet-1_svg__a"
      d="M20.498 19.5H3.502M20.498 4.5H3.502M12 21a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25A.25.25 0 0112 21M12 2.5a.25.25 0 01.25.25A.25.25 0 0112 3a.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 2.5"
    />
  );

export default SvgTablet1;
