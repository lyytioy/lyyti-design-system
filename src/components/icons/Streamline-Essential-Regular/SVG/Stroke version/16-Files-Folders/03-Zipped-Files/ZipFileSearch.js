import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-search_svg__a"
      d="M10.226 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L6.75.75h3zM8.25 9.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 13.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 16.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="zip-file-search_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />,
    <circle
      className="zip-file-search_svg__a"
      cx={15.764}
      cy={15.764}
      r={5.25}
    />,
    <path className="zip-file-search_svg__a" d="M23.25 23.25l-3.773-3.774" />
  );

export default SvgZipFileSearch;
