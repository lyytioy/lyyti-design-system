import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-star_svg__a"
      d="M17.947 11.679L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.442 3.313a.785.785 0 01-1.119.982l-3.486-1.96-3.487 1.96a.785.785 0 01-1.119-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.988 15h3l1.544-3.322a.8.8 0 011.415.001z"
    />,
    <path
      className="love-it-star_svg__a"
      d="M8.223 16.5l-5.811-6.063a5.673 5.673 0 01-1.063-6.549 5.673 5.673 0 019.085-1.474L12 3.98l1.566-1.566a5.673 5.673 0 019.085 1.474A5.676 5.676 0 0122.632 9"
    />
  );

export default SvgLoveItStar;
