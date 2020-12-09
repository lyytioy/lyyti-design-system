import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-search_svg__a"
      d="M15.122 10.5l3.22-3.286a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.005a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007L9.732 16"
    />,
    <circle className="tags-search_svg__a" cx={15.542} cy={3.998} r={1.5} />,
    <circle className="tags-search_svg__a" cx={16.571} cy={17.027} r={4.529} />,
    <path className="tags-search_svg__a" d="M23.042 23.498l-3.248-3.248" />
  );

export default SvgTagsSearch;
