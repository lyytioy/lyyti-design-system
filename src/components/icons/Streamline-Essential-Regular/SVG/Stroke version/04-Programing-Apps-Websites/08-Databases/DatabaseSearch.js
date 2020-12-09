import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-search_svg__a"
      d="M9.767 9.662C4.624 9.248.75 7.43.75 5.251c0-2.486 5.037-4.5 11.25-4.5s11.25 2.014 11.25 4.5c0 1.181-1.138 2.256-3 3.059M23.25 11.251v-6"
    />,
    <path
      className="database-search_svg__a"
      d="M.75 5.251v6c0 1.85 2.792 3.439 6.782 4.131"
    />,
    <path
      className="database-search_svg__a"
      d="M.75 11.251v6c0 2.179 3.874 4 9.017 4.411"
    />,
    <circle
      className="database-search_svg__a"
      cx={15.75}
      cy={15.751}
      r={5.25}
    />,
    <path className="database-search_svg__a" d="M23.25 23.251l-3.788-3.788" />
  );

export default SvgDatabaseSearch;
