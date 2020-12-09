import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarAdd1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-add-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-add-1_svg__a"
      d="M16.784 13.812l-.885.77 2.5 7.51a.5.5 0 01-.77.561L11.4 18.082l-6.234 4.571a.5.5 0 01-.77-.561l2.5-7.51L.925 9.13a.5.5 0 01.325-.88H8.4l2.534-6.676a.5.5 0 01.935 0l.474 1.252"
    />,
    <circle className="rating-star-add-1_svg__a" cx={18.25} cy={6.75} r={5} />,
    <path className="rating-star-add-1_svg__a" d="M18.25 4.75v4M16.25 6.75h4" />
  );

export default SvgRatingStarAdd1;
