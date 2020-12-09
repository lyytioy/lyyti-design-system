import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-user_svg__a"
      d="M1.898 17.5h10.117M2.512 5.5h18.984M12 11.5H.511M11.378 23.484A11.5 11.5 0 1122.969 8.505M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526A16.249 16.249 0 0116.908 8.5M23.5 23.5a5 5 0 00-10 0z"
    />,
    <circle className="network-user_svg__a" cx={18.5} cy={14.001} r={3} />
  );

export default SvgNetworkUser;
