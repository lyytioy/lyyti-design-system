import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-search_svg__a"
      d="M11.5 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V9.5"
    />,
    <path
      className="zip-file-search_svg__a"
      d="M7.255 8a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 10.5a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 13a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.245 15.5a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 18.021a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 20.562a.25.25 0 11.25.25.25.25 0 01-.25-.25M8.989 4.111a1.488 1.488 0 01-.357 1.163 1.467 1.467 0 01-1.1.5H7.47a1.467 1.467 0 01-1.1-.5 1.488 1.488 0 01-.357-1.163L6.37.5H8.5z"
    />,
    <circle
      className="zip-file-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="zip-file-search_svg__a" d="M23.5 23.5l-3.248-3.248" />
  );

export default SvgZipFileSearch;
