import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-arrow_svg__a"
      d="M1.898 17.5H9.5M2.512 5.5h18.984M8.5 11.5H.511M11.269.526c-6 6.5-5.891 14.958.109 22.958M12.73.526A16.127 16.127 0 0117 9M23.5 12A11.5 11.5 0 1012 23.5"
    />,
    <path
      className="network-arrow_svg__a"
      d="M19.965 16.408l2.191-2.192a.5.5 0 00-.217-.834l-10.9-3.106a.5.5 0 00-.617.617l3.1 10.9a.5.5 0 00.835.217l2.05-2.049 3.182 3.181a.5.5 0 00.707 0l2.851-2.842a.5.5 0 000-.707z"
    />
  );

export default SvgNetworkArrow;
