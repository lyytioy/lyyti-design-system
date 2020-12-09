import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-search_svg__a"
      d="M20.5 10.5v-6a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1h8"
    />,
    <circle
      className="folder-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="folder-search_svg__a" d="M23.5 23.5l-3.248-3.248" />
  );

export default SvgFolderSearch;
