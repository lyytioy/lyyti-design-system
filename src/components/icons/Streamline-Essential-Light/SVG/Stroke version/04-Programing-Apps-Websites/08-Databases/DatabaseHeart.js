import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-heart_svg__a"
      cx={10.022}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-heart_svg__a"
      d="M10.022 12.5c-5.246 0-9.5-1.79-9.5-4M8.522 16.95c-4.533-.3-8-1.955-8-3.949"
    />,
    <path
      className="database-heart_svg__a"
      d="M9.022 21.48c-4.776-.211-8.5-1.912-8.5-3.979V4.5M19.522 4.501v4.5M17.52 23.5l-5.114-5.335a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.835.836.835-.835a3.024 3.024 0 014.844.786 3.028 3.028 0 01-.566 3.493z"
    />
  );

export default SvgDatabaseHeart;
