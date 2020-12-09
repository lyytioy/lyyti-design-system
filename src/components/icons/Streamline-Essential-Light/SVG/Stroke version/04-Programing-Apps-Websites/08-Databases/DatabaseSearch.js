import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-search_svg__a"
      cx={10.021}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-search_svg__a"
      d="M11.521 12.45c-.489.033-.99.051-1.5.051-5.246 0-9.5-1.79-9.5-4M10.021 17c-5.246 0-9.5-1.79-9.5-4"
    />,
    <path
      className="database-search_svg__a"
      d="M10.021 21.5c-5.246 0-9.5-1.79-9.5-4v-13M19.521 4.501v5.5"
    />,
    <circle
      className="database-search_svg__a"
      cx={17.049}
      cy={17.03}
      r={4.529}
    />,
    <path className="database-search_svg__a" d="M23.52 23.501l-3.248-3.248" />
  );

export default SvgDatabaseSearch;
