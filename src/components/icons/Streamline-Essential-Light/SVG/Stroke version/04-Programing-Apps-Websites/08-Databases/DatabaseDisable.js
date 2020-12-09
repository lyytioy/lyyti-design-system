import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-disable_svg__a"
      cx={10.021}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-disable_svg__a"
      d="M10.021 12.5c-5.246 0-9.5-1.79-9.5-4M8.521 16.95c-4.533-.3-8-1.955-8-3.949"
    />,
    <path
      className="database-disable_svg__a"
      d="M9.021 21.479c-4.776-.21-8.5-1.911-8.5-3.978V4.5M19.521 4.501v4.5"
    />,
    <circle className="database-disable_svg__a" cx={17.52} cy={17.501} r={6} />,
    <path className="database-disable_svg__a" d="M13.278 21.743l8.485-8.485" />
  );

export default SvgDatabaseDisable;
