import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-search_svg__a"
      d="M18.5 9.5a8.967 8.967 0 00-2.293-6M.5 11.5v3A9 9 0 006 22.794M14 1.706A9 9 0 00.514 9M7 4.044a6 6 0 018.5 5.42"
    />,
    <path
      className="touch-id-search_svg__a"
      d="M10.971 20.319A6.007 6.007 0 013.5 14.5v-5a5.977 5.977 0 011.528-4"
    />,
    <path
      className="touch-id-search_svg__a"
      d="M12.5 12.026V9.5a3 3 0 00-6 0v3M6.5 14.5a3 3 0 003 3M9.5 9.5v3M9.5 14.5v1M9.5 23.5a9.017 9.017 0 002.523-.358"
    />,
    <circle
      className="touch-id-search_svg__a"
      cx={17.029}
      cy={17.03}
      r={4.529}
    />,
    <path className="touch-id-search_svg__a" d="M23.5 23.5l-3.268-3.268" />
  );

export default SvgTouchIdSearch;
