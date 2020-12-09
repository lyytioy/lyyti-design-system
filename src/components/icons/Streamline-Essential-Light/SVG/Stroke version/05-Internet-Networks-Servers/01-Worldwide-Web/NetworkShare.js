import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-share_svg__a"
      d="M1.898 17.5l7.602.001M2.512 5.5h18.984M12 11.501L.511 11.5M11.378 23.484A11.5 11.5 0 1123.114 9M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526A16.127 16.127 0 0117 9"
    />,
    <circle className="network-share_svg__a" cx={13.75} cy={18.251} r={2.25} />,
    <circle className="network-share_svg__a" cx={21.25} cy={21.251} r={2.25} />,
    <circle className="network-share_svg__a" cx={21.25} cy={13.751} r={2.25} />,
    <path
      className="network-share_svg__a"
      d="M15.675 17.096l3.65-2.19M15.838 19.086l3.324 1.33"
    />
  );

export default SvgNetworkShare;
