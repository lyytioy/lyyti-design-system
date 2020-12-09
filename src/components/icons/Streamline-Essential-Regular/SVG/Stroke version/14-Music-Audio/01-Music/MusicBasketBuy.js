import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicBasketBuy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-basket-buy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-basket-buy_svg__a"
      d="M9 17.25H4.314a1.441 1.441 0 01-1.383-1.136l-2.138-9A1.484 1.484 0 012.176 5.25h18.148a1.484 1.484 0 011.383 1.864l-.3 1.256M3.75 5.25l4.5-4.5M18.75 5.25L14.25.752"
    />,
    <circle
      className="music-basket-buy_svg__a"
      cx={13.875}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-basket-buy_svg__a"
      cx={21.375}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-basket-buy_svg__a"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />
  );

export default SvgMusicBasketBuy;
