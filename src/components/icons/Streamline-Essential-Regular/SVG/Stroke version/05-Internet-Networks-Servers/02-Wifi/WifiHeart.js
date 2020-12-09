import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-heart_svg__a"
      d="M8.21 11.284a5.25 5.25 0 017.417 0M5.32 7.822a9.75 9.75 0 0113.165-.029M3 3.885a14.252 14.252 0 0117.991.126M16.8 14.982a2.361 2.361 0 00-3.418 0L11.918 16.5l-1.464-1.515a2.361 2.361 0 00-3.418 0 2.56 2.56 0 000 3.535l4.362 4.51a.72.72 0 001.041 0l4.362-4.51a2.56 2.56 0 00-.001-3.538z"
    />
  );

export default SvgWifiHeart;
