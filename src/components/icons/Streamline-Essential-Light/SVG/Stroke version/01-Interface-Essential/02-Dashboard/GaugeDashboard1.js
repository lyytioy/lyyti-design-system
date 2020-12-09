import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGaugeDashboard1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gauge-dashboard-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="gauge-dashboard-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="gauge-dashboard-1_svg__a"
      d="M13.414 13.414a2 2 0 01-2.828-2.828c.781-.781 8.132-5.3 8.132-5.3s-4.518 7.347-5.304 8.128zM3.5 12H5M5.99 5.99l1.06 1.06M12 3.5V5M20.5 12H19M20.633 19.6A14.708 14.708 0 0012 17a14.708 14.708 0 00-8.633 2.6"
    />
  );

export default SvgGaugeDashboard1;
