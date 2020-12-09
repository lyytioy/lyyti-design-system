import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiTransferHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-transfer-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-transfer-hand_svg__a"
      d="M14.5 23.5H8A1.505 1.505 0 016.5 22V8A1.505 1.505 0 018 6.5h7A1.5 1.5 0 0116.5 8v8M11.5 21.25"
    />,
    <path
      className="wifi-transfer-hand_svg__a"
      d="M11.5 21.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.5 19.5h7M3 6a3 3 0 013-3M.5 6A5.5 5.5 0 016 .5M20 6a3 3 0 00-3-3M22.5 6A5.5 5.5 0 0017 .5M16.5 11l2.4 1.8a4 4 0 011.6 3.2v3.5l3 4M18 23.5l-.9-1.2a3 3 0 01-.6-1.8v-1l-2.714-3.166a1.188 1.188 0 01-.286-.773 1.061 1.061 0 011.811-.75L18 17.5"
    />
  );

export default SvgWifiTransferHand;
