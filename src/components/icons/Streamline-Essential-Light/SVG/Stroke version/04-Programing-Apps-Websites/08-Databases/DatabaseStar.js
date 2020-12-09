import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-star_svg__a"
      cx={10.022}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-star_svg__a"
      d="M10.022 12.5c-5.246 0-9.5-1.79-9.5-4M8.522 16.95c-4.533-.3-8-1.955-8-3.949"
    />,
    <path
      className="database-star_svg__a"
      d="M9.022 21.48c-4.776-.211-8.5-1.912-8.5-3.979V4.5M19.522 4.501v4.5M18.225 11.931l1.539 3.569h3a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.121.982l-3.481-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.315a.735.735 0 01.514-1.284h3l1.541-3.569a.8.8 0 011.408 0z"
    />
  );

export default SvgDatabaseStar;
