import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="network-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="network-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="network-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M12 23.25a11.25 11.25 0 1110.61-15"
    />,
    <path
      className="network-share_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M2.999 5.25H21M2.048 17.25H8.25"
    />,
    <path
      className="network-share_svg__a"
      d="M14.711 1.079c1.437 2.108 2.424 5.843 2.53 10.154v.017H.775"
    />
  );

export default SvgNetworkShare;
