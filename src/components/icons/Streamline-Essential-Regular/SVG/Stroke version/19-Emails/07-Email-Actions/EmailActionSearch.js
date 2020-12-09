import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="email-action-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="email-action-search_svg__a"
      d="M23.25 23.25l-3.788-3.788M7.5 15.75H2.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v7.5"
    />,
    <path
      className="email-action-search_svg__a"
      d="M21.411 1.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.089 1.3"
    />
  );

export default SvgEmailActionSearch;
