import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-cash_svg__a"
      d="M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.588l2.064.825a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle className="network-cash_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-cash_svg__a"
      d="M11.232 23.224a11.25 11.25 0 1111.913-12.769M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25h9.523M2.999 5.25H21M2.048 17.25H8.25M14.711 1.079a16.961 16.961 0 012.3 7.113"
    />
  );

export default SvgNetworkCash;
