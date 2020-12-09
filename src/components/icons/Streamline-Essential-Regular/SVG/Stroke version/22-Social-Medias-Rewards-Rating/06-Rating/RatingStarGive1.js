import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarGive1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-give-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-give-1_svg__a"
      d="M.75 14.25v9M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M16.932 1.233l2.005 3.946h3.428a.884.884 0 01.62 1.513L19.868 9.76l1.741 4a.883.883 0 01-1.243 1.122l-4.222-2.374-4.222 2.374a.883.883 0 01-1.243-1.122l1.742-4L9.3 6.692a.883.883 0 01.62-1.513h3.428l2-3.946a.883.883 0 011.584 0z"
    />
  );

export default SvgRatingStarGive1;
