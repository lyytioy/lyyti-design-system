import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-subtract_svg__a"
      d="M20.523 10.559L15.9 14.582l2.5 7.51a.5.5 0 01-.77.561l-6.23-4.571-6.234 4.571a.5.5 0 01-.77-.561l2.5-7.51L.925 9.13a.5.5 0 01.325-.88H8.4l2.534-6.676a.5.5 0 01.935 0l.474 1.252"
    />,
    <path
      className="rating-star-subtract_svg__a"
      d="M22.75 8.25a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v2a.5.5 0 00.5.5z"
    />
  );

export default SvgRatingStarSubtract;
