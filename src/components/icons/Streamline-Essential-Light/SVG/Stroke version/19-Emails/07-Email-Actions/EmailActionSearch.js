import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="email-action-search_svg__a" d="M23.5 23.5l-3.578-3.578" />,
    <circle className="email-action-search_svg__a" cx={17} cy={16.5} r={4.5} />,
    <path
      className="email-action-search_svg__a"
      d="M10.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v8.5"
    />,
    <path
      className="email-action-search_svg__a"
      d="M21.067.946L11 9 .933.946"
    />
  );

export default SvgEmailActionSearch;
