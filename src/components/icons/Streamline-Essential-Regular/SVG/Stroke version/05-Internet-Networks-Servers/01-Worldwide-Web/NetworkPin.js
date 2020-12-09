import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-pin_svg__a"
      d="M18.75 15.449a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="network-pin_svg__a"
      d="M18.75 11.324a4.5 4.5 0 014.5 4.5c0 1.921-2.688 5.577-3.909 7.138a.75.75 0 01-1.182 0c-1.221-1.562-3.909-5.217-3.909-7.138a4.5 4.5 0 014.5-4.5zM14.248 23.032a11.255 11.255 0 118.769-13.32"
    />,
    <path
      className="network-pin_svg__a"
      d="M9.289 22.921C7.767 20.689 6.75 16.633 6.75 12S7.767 3.312 9.289 1.079M.775 11.25H12.75M2.999 5.25H21M2.048 17.25h9.202M14.711 1.079a17.039 17.039 0 012.309 7.175"
    />
  );

export default SvgNetworkPin;
