import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="database-remove_svg__a"
      d="M19.523 4.526c0 2.205-4.255 4-9.5 4s-9.5-1.795-9.5-4S4.777.5 10.023.5s9.5 1.815 9.5 4.026zM10.023 12.526c-5.246 0-9.5-1.795-9.5-4M8.523 16.975c-4.533-.3-8-1.958-8-3.949"
    />,
    <path
      className="database-remove_svg__a"
      d="M9.023 21.5c-4.776-.208-8.5-1.909-8.5-3.975V4.5M19.523 4.501v4.5"
    />,
    <circle className="database-remove_svg__a" cx={17.518} cy={17.501} r={6} />,
    <path
      className="database-remove_svg__a"
      d="M19.639 15.38l-4.242 4.242M19.639 19.622l-4.242-4.242"
    />
  );

export default SvgDatabaseRemove;
