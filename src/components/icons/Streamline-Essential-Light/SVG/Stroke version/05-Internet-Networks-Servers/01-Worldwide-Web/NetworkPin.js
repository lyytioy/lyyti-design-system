import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-pin_svg__a"
      d="M2.001 17.516h10.116M2.615 5.516h18.984M12.603 11.516H.614M11.481 23.5A11.5 11.5 0 1123.44 10.019M11.372.542c-6 6.5-5.891 14.958.109 22.958M12.833.542A16.123 16.123 0 0117.1 9.017"
    />,
    <circle className="network-pin_svg__a" cx={18.5} cy={15.295} r={1.5} />,
    <path
      className="network-pin_svg__a"
      d="M23 15.3c0 3-4.5 7.5-4.5 7.5S14 18.3 14 15.3a4.5 4.5 0 019 0z"
    />
  );

export default SvgNetworkPin;
