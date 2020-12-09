import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsFavoriteStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-favorite-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-favorite-star_svg__a"
      d="M9.012 19.188a1.5 1.5 0 01-2.121 0L1.512 13.81a1.5 1.5 0 010-2.122l10.5-10.5a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.439 1.06"
    />,
    <path
      className="tags-favorite-star_svg__a"
      d="M16.2 4.124a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.624 11.679l1.541 4.07h3a.735.735 0 01.519 1.283l-2.6 1.815 1.443 3.314a.786.786 0 01-1.119.982l-3.487-1.961-3.491 1.961a.786.786 0 01-1.119-.982l1.443-3.314-2.6-1.815a.734.734 0 01.515-1.283h3l1.545-4.07a.8.8 0 011.41 0z"
    />
  );

export default SvgTagsFavoriteStar;
