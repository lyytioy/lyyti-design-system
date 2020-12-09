import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-search_svg__a"
      d="M17.5 15.5H19s4.5-.586 4.5-5a4.991 4.991 0 00-5.18-4.991A6.988 6.988 0 005.022 8.08 3.751 3.751 0 00.5 11.75a3.491 3.491 0 003.018 3.636"
    />,
    <circle
      className="cloud-search_svg__a"
      cx={10.529}
      cy={16.029}
      r={4.529}
    />,
    <path className="cloud-search_svg__a" d="M17 22.5l-3.248-3.248" />
  );

export default SvgCloudSearch;
