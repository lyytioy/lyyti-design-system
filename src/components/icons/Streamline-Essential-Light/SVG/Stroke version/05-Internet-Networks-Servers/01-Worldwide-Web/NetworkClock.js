import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-clock_svg__a"
      d="M1.898 17.498H9.5M2.512 5.498h18.984M11 11.498H.511M11.378 23.482A11.5 11.5 0 1123.5 11.5M11.269.524c-6 6.5-5.891 14.958.109 22.958M12.73.524A16.127 16.127 0 0117 9.005"
    />,
    <circle className="network-clock_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="network-clock_svg__a" d="M19.5 17.5h-2v-3" />
  );

export default SvgNetworkClock;
