import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesSitDrink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-sit-drink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="movies-sit-drink_svg__a"
      d="M6.62 12h3.619l-.489 3.75H7.109L6.62 12zM7.826 12l.513-2.051A1.252 1.252 0 019.554 9h.979"
    />,
    <circle
      className="movies-sit-drink_svg__a"
      cx={15.913}
      cy={8.332}
      r={2.25}
    />,
    <path
      className="movies-sit-drink_svg__a"
      d="M12.489 15.75v-.326a3.424 3.424 0 016.258-1.924l.188.3M3.75 13.5h-2a.991.991 0 01-1-.981V1.731a.991.991 0 011-.981h19a.991.991 0 011 .981V7.5M10.375 18.651L6.1 21.094a1.154 1.154 0 001.035 2.059l4.184-1.831"
    />,
    <path
      className="movies-sit-drink_svg__a"
      d="M10.043 17.454a1.515 1.515 0 00.087.5L12 23.25h7.826l3.344-9.917a1.517 1.517 0 00.08-.485 1.648 1.648 0 00-1.694-1.6 2.025 2.025 0 00-1.8 1.048L17.87 15.75h-6.143a1.821 1.821 0 00-1.684 1.704zM12 15.75H6.13"
    />
  );

export default SvgMoviesSitDrink;
