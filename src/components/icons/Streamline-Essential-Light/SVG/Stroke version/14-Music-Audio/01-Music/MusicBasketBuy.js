import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicBasketBuy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-basket-buy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-basket-buy_svg__a"
      d="M20.779 21.579a2 2 0 01-1.973 1.671H5.194a2 2 0 01-1.973-1.671L1.5 11.25h21zM23.5 10.25a1 1 0 01-1 1h-21a1 1 0 010-2h21a1 1 0 011 1zM3.5 6.75l6-6M20.5 6.75l-6-6"
    />,
    <path
      className="music-basket-buy_svg__a"
      d="M10.5 19.261a1.035 1.035 0 01-1 1 1 1 0 010-2h1zM15.5 19.261a1.035 1.035 0 01-1 1 1 1 0 110-2h1zM10.5 18.261v-3a1 1 0 011-1h3a1 1 0 011 1v3"
    />
  );

export default SvgMusicBasketBuy;
