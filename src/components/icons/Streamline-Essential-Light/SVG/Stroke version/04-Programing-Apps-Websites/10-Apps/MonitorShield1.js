import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShield1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-shield-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-shield-1_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23"
    />,
    <rect
      className="monitor-shield-1_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-shield-1_svg__a"
      d="M11.499 6.004v4M13.499 8.004h-4M11.946 13.918l.46-.175c2.194-.835 4.094-2.937 4.094-5.282V5.634a.869.869 0 00-.523-.8A13.148 13.148 0 0011.481 4a12.915 12.915 0 00-4.459.832.869.869 0 00-.523.8v2.829a6.06 6.06 0 004.057 5.282l.461.175a1.3 1.3 0 00.929 0z"
    />
  );

export default SvgMonitorShield1;
