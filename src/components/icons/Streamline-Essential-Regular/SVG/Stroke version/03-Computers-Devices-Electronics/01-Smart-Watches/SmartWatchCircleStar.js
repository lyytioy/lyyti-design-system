import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-star_svg__a"
      d="M12 17.023v4.727a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.727M17.947 1.18l1.541 3.32h3a.735.735 0 01.518 1.283L20.4 8.349l1.442 3.313a.786.786 0 01-1.119.982l-3.483-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563a.734.734 0 01.511-1.286h3l1.544-3.32a.8.8 0 011.415 0zM11.77 1.5A1.479 1.479 0 0010.5.75h-6A1.5 1.5 0 003 2.25v4.72"
    />,
    <path
      className="smart-watch-circle-star_svg__a"
      d="M8.25 5.325a6.851 6.851 0 00-.75-.075 6.75 6.75 0 105.61 10.5"
    />
  );

export default SvgSmartWatchCircleStar;
