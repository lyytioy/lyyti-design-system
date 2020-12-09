import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-lock_svg__a"
      d="M1.898 17.517h9.617M2.512 5.517h18.984M11.5 11.517H.511M11.378 23.5A11.5 11.5 0 1123.335 10M11.269.543c-6 6.5-5.891 14.958.109 22.958M12.73.543A16.019 16.019 0 0117.063 9.5"
    />,
    <rect
      className="network-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="network-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="network-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgNetworkLock;
