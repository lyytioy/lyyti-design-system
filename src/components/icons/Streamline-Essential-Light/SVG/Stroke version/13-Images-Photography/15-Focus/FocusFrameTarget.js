import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFrameTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-frame-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="focus-frame-target_svg__a"
      x={1}
      y={3}
      width={22}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="focus-frame-target_svg__a"
      d="M4 9V7a1 1 0 011-1h2M20 9V7a1 1 0 00-1-1h-2M4 15v2a1 1 0 001 1h2M20 15v2a1 1 0 01-1 1h-2M12 6v2M12 16v2M6 12h2M16 12h2"
    />,
    <circle className="focus-frame-target_svg__a" cx={12} cy={12} r={4} />,
    <path
      className="focus-frame-target_svg__a"
      d="M12 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgFocusFrameTarget;
