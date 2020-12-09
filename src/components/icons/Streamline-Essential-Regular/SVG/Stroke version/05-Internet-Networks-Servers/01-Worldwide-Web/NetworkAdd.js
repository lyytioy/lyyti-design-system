import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-add_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-add_svg__a"
      d="M17.25 14.25v6M14.25 17.25h6M10.508 23.152A11.251 11.251 0 1123.151 10.5"
    />,
    <path
      className="network-add_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25h9.693M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a17.04 17.04 0 012.31 7.182"
    />
  );

export default SvgNetworkAdd;
