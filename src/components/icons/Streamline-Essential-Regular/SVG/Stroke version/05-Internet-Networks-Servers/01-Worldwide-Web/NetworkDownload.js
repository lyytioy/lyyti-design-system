import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-download_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path
      className="network-download_svg__a"
      d="M17.25 14.251v6M17.25 20.251L15 18.001M17.25 20.251l2.25-2.25M10.465 23.147a11.251 11.251 0 1112.684-12.66"
    />,
    <path
      className="network-download_svg__a"
      d="M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H10.5M2.999 5.251H21M2.048 17.251h5.166M14.711 1.079a16.972 16.972 0 012.3 7.127"
    />
  );

export default SvgNetworkDownload;
