import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-add_svg__a"
      cx={10.022}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-add_svg__a"
      d="M10.022 12.5c-5.246 0-9.5-1.79-9.5-4M8.522 16.95c-4.533-.3-8-1.955-8-3.949"
    />,
    <path
      className="database-add_svg__a"
      d="M9.022 21.479c-4.776-.21-8.5-1.911-8.5-3.978V4.5M19.522 4.501v4.5"
    />,
    <circle className="database-add_svg__a" cx={17.519} cy={17.501} r={6} />,
    <path
      className="database-add_svg__a"
      d="M17.519 14.501v6M20.519 17.501h-6"
    />
  );

export default SvgDatabaseAdd;
