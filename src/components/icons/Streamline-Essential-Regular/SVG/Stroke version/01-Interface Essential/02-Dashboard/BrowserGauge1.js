import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserGauge1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-gauge-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-gauge-1_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="browser-gauge-1_svg__a"
      d="M.75 6.75h22.5M6.75 2.25v4.5M11.25 2.25v4.5"
    />,
    <circle className="browser-gauge-1_svg__a" cx={12} cy={16.5} r={2.25} />,
    <path
      className="browser-gauge-1_svg__a"
      d="M4.5 17.25H6M6.696 11.946l1.226 1.226M12 9.75v1.5M16.5 12l-2.909 2.909M19.5 17.25H18"
    />
  );

export default SvgBrowserGauge1;
