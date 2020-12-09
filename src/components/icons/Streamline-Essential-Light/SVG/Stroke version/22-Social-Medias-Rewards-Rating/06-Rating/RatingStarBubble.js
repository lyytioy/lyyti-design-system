import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-bubble_svg__a"
      d="M12.705 5.928L14.244 9.5h2.994a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.312a.785.785 0 01-1.117.982L12 15.43l-3.48 1.961a.785.785 0 01-1.12-.982L8.842 13.1l-2.6-2.315A.735.735 0 016.757 9.5h3l1.541-3.57a.8.8 0 011.407-.002z"
    />,
    <path
      className="rating-star-bubble_svg__a"
      d="M23.5 12a4 4 0 00-2.523-3.718 4 4 0 00-5.259-5.262 4 4 0 00-7.436 0 4 4 0 00-5.258 5.259 4 4 0 000 7.436 4 4 0 005.258 5.259 4 4 0 007.436 0 4 4 0 005.258-5.259A4 4 0 0023.5 12z"
    />
  );

export default SvgRatingStarBubble;
