import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-star_svg__a"
      d="M1.898 17.501h7.603M2.512 5.501h18.984M12.001 11.501H.511M11.378 23.485A11.5 11.5 0 1123.5 11.5M11.269.527c-6 6.5-5.891 14.958.109 22.958M12.73.527A16.127 16.127 0 0117 9"
    />,
    <path
      className="network-star_svg__a"
      d="M18.208 11.93l1.538 3.57h3a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L17.5 21.433l-3.481 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.518-1.283h2.994l1.546-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgNetworkStar;
