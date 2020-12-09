import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkNavigation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-navigation_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-navigation_svg__a"
      d="M1.898 17.5H11.5M2.512 5.5h18.984M8.5 11.5H.511M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526A16.127 16.127 0 0117 9"
    />,
    <path
      className="network-navigation_svg__a"
      d="M23.267 14.274A11.208 11.208 0 0023.5 12 11.5 11.5 0 1012 23.5a11.333 11.333 0 002.376-.251"
    />,
    <path
      className="network-navigation_svg__a"
      d="M17.249 22.24a.5.5 0 01-.935.113l-5.369-10.737a.5.5 0 01.671-.671l10.737 5.369a.5.5 0 01-.113.935l-3.765.849a.5.5 0 00-.377.378z"
    />
  );

export default SvgNetworkNavigation;
