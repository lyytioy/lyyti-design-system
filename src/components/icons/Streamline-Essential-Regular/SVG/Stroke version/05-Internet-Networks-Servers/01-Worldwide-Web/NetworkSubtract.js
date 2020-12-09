import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-subtract_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-subtract_svg__a"
      d="M14.25 17.25h6M10.515 23.153a11.251 11.251 0 1112.639-12.632"
    />,
    <path
      className="network-subtract_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H10.5M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a17.03 17.03 0 012.31 7.18"
    />
  );

export default SvgNetworkSubtract;
