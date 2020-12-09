import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-square_svg__a"
      d="M23.5 19.5a4 4 0 01-4 4h-15a4 4 0 01-4-4v-15a4 4 0 014-4h15a4 4 0 014 4z"
    />,
    <path
      className="rating-star-square_svg__a"
      d="M12.706 5.93l1.539 3.57h2.995a.735.735 0 01.516 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L12 15.433l-3.48 1.961a.785.785 0 01-1.12-.982L8.843 13.1l-2.6-2.315A.735.735 0 016.758 9.5h3l1.541-3.57a.8.8 0 011.407 0z"
    />
  );

export default SvgRatingStarSquare;
