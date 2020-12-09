import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-share_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-share_svg__a"
      d="M17.189 9.75H5.251a4.5 4.5 0 010-9h12a4.5 4.5 0 013.388 7.462M8.251 18.75h-3a4.5 4.5 0 010-9H16.5M10.501 5.25h6.75"
    />,
    <circle className="server-share_svg__a" cx={13.501} cy={18} r={2.25} />,
    <circle className="server-share_svg__a" cx={21.001} cy={21} r={2.25} />,
    <circle className="server-share_svg__a" cx={21.001} cy={13.5} r={2.25} />,
    <path
      className="server-share_svg__a"
      d="M15.426 16.845l3.65-2.19M15.589 18.835l3.324 1.33"
    />
  );

export default SvgServerShare;
