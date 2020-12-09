import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-cash_svg__a"
      d="M1.898 17.5H9.5M2.512 5.5h18.984M11 11.5H.511M11.378 23.484A11.5 11.5 0 1123.5 11.5M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526A16.126 16.126 0 0116.994 9"
    />,
    <path
      className="network-cash_svg__a"
      d="M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 21.501v-1M17.5 14.501v-1"
    />,
    <circle className="network-cash_svg__a" cx={17.5} cy={17.501} r={6} />
  );

export default SvgNetworkCash;
