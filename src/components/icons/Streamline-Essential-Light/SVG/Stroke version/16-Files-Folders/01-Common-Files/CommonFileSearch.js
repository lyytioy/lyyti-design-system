import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="common-file-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path
      className="common-file-search_svg__a"
      d="M23.5 23.5l-3.248-3.248M11.5 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V9.5"
    />
  );

export default SvgCommonFileSearch;
