import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-cash_svg__a"
      cx={10.021}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-cash_svg__a"
      d="M10.021 12.5c-5.246 0-9.5-1.79-9.5-4M8.521 16.95c-4.533-.3-8-1.955-8-3.949"
    />,
    <path
      className="database-cash_svg__a"
      d="M9.021 21.48c-4.776-.211-8.5-1.912-8.5-3.979V4.5M19.521 4.501v4.5M19.02 14.5h-2.033a1.342 1.342 0 00-.5 2.588l2.063.825a1.341 1.341 0 01-.5 2.587h-2.03M17.52 21.501v-1M17.52 14.501v-1"
    />,
    <circle className="database-cash_svg__a" cx={17.52} cy={17.501} r={6} />
  );

export default SvgDatabaseCash;
