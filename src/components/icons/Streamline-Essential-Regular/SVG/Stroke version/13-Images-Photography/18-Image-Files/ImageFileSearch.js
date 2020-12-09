import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-search_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />,
    <path
      className="image-file-search_svg__a"
      d="M5.25 5.625A.375.375 0 114.875 6a.375.375 0 01.375-.375M11.25 8.25a.749.749 0 00-1.238-.014l-2 2.851L6.78 10.1a.75.75 0 00-1.093.169L3.75 14.25H7.5"
    />,
    <circle
      className="image-file-search_svg__a"
      cx={15.764}
      cy={15.764}
      r={5.25}
    />,
    <path className="image-file-search_svg__a" d="M23.25 23.25l-3.774-3.774" />
  );

export default SvgImageFileSearch;
