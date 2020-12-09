import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-search_svg__a"
      d="M1.898 17.5l8.102.001M2.512 5.5h18.984M11 11.5H.511M11.378 23.484A11.5 11.5 0 1123.5 11.5M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526a16.018 16.018 0 014.336 8.979"
    />,
    <circle
      className="network-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="network-search_svg__a" d="M23.5 23.5l-3.248-3.248" />
  );

export default SvgNetworkSearch;
