import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-search_svg__a"
      d="M9.064 19.188a1.5 1.5 0 01-2.121 0L1.564 13.81a1.5 1.5 0 010-2.122l10.5-10.5a1.5 1.5 0 011.061-.439H18.5a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.44 1.06"
    />,
    <path
      className="tags-search_svg__a"
      d="M16.254 4.124a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <circle className="tags-search_svg__a" cx={16.125} cy={16.499} r={5.25} />,
    <path className="tags-search_svg__a" d="M22.875 23.249l-3.014-3.014" />
  );

export default SvgTagsSearch;
