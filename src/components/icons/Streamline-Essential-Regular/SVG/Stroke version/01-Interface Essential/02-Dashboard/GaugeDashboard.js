import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGaugeDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gauge-dashboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gauge-dashboard_svg__a"
      d="M12 4.5A11.336 11.336 0 00.75 15.923V18a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-2.08A11.336 11.336 0 0012 4.5z"
    />,
    <path
      className="gauge-dashboard_svg__a"
      d="M9 19.5v-.75a3 3 0 016 0v.75M14.25 9.003L12 15.753M4.875 15a.375.375 0 10.375.375.375.375 0 00-.375-.375M6.375 11.253a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.125 15a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.625 11.253a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.375 8.253a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgGaugeDashboard;
