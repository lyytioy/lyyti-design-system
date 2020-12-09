import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-shield_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23M12 8.004v3M10.5 9.504h3M12.357 13.435l.369-.14A4.878 4.878 0 0016 9.069V6.808a.7.7 0 00-.419-.639 10.529 10.529 0 00-3.595-.669 10.334 10.334 0 00-3.567.665.7.7 0 00-.419.643v2.261a4.848 4.848 0 003.245 4.231l.369.14a1.035 1.035 0 00.743-.005z"
    />,
    <rect
      className="monitor-shield_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorShield;
