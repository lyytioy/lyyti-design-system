import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsFavoriteStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-favorite-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-favorite-star_svg__a"
      d="M16.542 9.049l1.8-1.836a2.829 2.829 0 00.7-1.715v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.041a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.05-1.072"
    />,
    <circle
      className="tags-favorite-star_svg__a"
      cx={15.542}
      cy={3.998}
      r={1.5}
    />,
    <path
      className="tags-favorite-star_svg__a"
      d="M17.748 11.928l1.539 3.57h3a.735.735 0 01.517 1.283L20.2 19.1l1.44 3.313a.785.785 0 01-1.117.982l-3.481-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.315A.735.735 0 0111.8 15.5h3l1.541-3.57a.8.8 0 011.407-.002z"
    />
  );

export default SvgTagsFavoriteStar;
