import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistBuy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-buy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-buy_svg__a"
      d="M20.25 8.25v-6a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle className="playlist-buy_svg__a" cx={6.375} cy={13.125} r={1.875} />,
    <path
      className="playlist-buy_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423V8.25M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle className="playlist-buy_svg__a" cx={17.25} cy={17.25} r={6} />
  );

export default SvgPlaylistBuy;
