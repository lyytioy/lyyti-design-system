import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="database-subtract_svg__a"
      d="M19.522 4.526c0 2.205-4.254 4-9.5 4s-9.5-1.795-9.5-4S4.776.5 10.022.5s9.5 1.815 9.5 4.026zM10.022 12.526c-5.246 0-9.5-1.795-9.5-4M8.522 16.975c-4.533-.3-8-1.958-8-3.949"
    />,
    <path
      className="database-subtract_svg__a"
      d="M9.022 21.493c-4.776-.212-8.5-1.9-8.5-3.967V4.5M19.522 4.501v4.5"
    />,
    <circle
      className="database-subtract_svg__a"
      cx={17.519}
      cy={17.501}
      r={6}
    />,
    <path className="database-subtract_svg__a" d="M20.519 17.501h-6" />
  );

export default SvgDatabaseSubtract;
