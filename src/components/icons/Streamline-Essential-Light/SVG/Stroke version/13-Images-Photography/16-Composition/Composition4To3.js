import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComposition4To3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-4-to-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-4-to-3_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={4}
      ry={4}
    />,
    <path
      className="composition-4-to-3_svg__a"
      d="M8.5 16V8a5 5 0 00-5 5v1h5M15.5 8h3a2 2 0 010 4 2 2 0 010 4h-3M12.5 8.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M12.5 14.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgComposition4To3;
