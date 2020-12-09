import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-search_svg__a"
      d="M8.25 18.75H2.447M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75a1.5 1.5 0 011.45 1.886"
    />,
    <circle
      className="folder-search_svg__a"
      cx={15.764}
      cy={15.764}
      r={5.25}
    />,
    <path className="folder-search_svg__a" d="M23.25 23.25l-3.774-3.774" />
  );

export default SvgFolderSearch;
