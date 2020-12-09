import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-shield_svg__a"
      d="M1.898 17.499H9.5M2.512 5.499h18.984M9.5 11.5l-8.989-.001M11.378 23.483A11.5 11.5 0 1123.338 10M11.269.525c-6 6.5-5.891 14.958.109 22.958M12.73.525A16.127 16.127 0 0117 9.006M17.5 13.5v6M20.5 16.5h-6"
    />,
    <path
      className="network-shield_svg__a"
      d="M18.035 23.4l.553-.21c2.63-1 4.912-3.524 4.912-6.338v-3.396a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.521 15.521 0 00-5.35 1 1.044 1.044 0 00-.628.958v3.393c0 2.814 2.238 5.336 4.868 6.338l.553.21a1.561 1.561 0 001.114.003z"
    />
  );

export default SvgNetworkShield;
