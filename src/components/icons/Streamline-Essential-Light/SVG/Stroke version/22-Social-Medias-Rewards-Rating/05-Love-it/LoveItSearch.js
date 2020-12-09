import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-search_svg__a"
      d="M12 21.432L2.2 11.34a5.669 5.669 0 01-1.088-6.607A5.839 5.839 0 0110.4 3.246L12 4.705l1.6-1.459a5.84 5.84 0 019.287 1.487 5.655 5.655 0 01.192 4.7"
    />,
    <circle
      className="love-it-search_svg__a"
      cx={17.029}
      cy={15.461}
      r={4.529}
    />,
    <path className="love-it-search_svg__a" d="M23.5 21.932l-3.248-3.248" />
  );

export default SvgLoveItSearch;
