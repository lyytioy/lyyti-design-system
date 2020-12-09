import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGaugeDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gauge-dashboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="gauge-dashboard_svg__a" cx={12} cy={14} r={1.5} />,
    <path
      className="gauge-dashboard_svg__a"
      d="M13.06 12.939l4.951-4.949M2.5 14.5h2M21.5 14.5h-2M20.776 10.365l-1.847.765M15.635 5.223l-.765 1.848M12 4.5v2M8.365 5.223l.765 1.848M5.283 7.282l1.412 1.415M3.224 10.365l1.846.765M12 2.5A11.5 11.5 0 00.5 14v3.5a1 1 0 001 1h21a1 1 0 001-1V14A11.5 11.5 0 0012 2.5z"
    />
  );

export default SvgGaugeDashboard;
