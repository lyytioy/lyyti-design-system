import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-refresh_svg__a"
      cx={10.021}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-refresh_svg__a"
      d="M10.021 12.5c-5.246 0-9.5-1.79-9.5-4M9.021 16.979c-4.776-.21-8.5-1.911-8.5-3.979"
    />,
    <path
      className="database-refresh_svg__a"
      d="M9.021 21.479c-4.776-.21-8.5-1.911-8.5-3.978V4.5M19.521 4.501v5M19.02 15.501h4.5v-4.5M23.178 15.5a6 6 0 10-.968 5.742"
    />
  );

export default SvgDatabaseRefresh;
