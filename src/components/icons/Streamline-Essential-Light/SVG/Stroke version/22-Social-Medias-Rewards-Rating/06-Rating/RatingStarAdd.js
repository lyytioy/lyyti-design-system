import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-add_svg__a"
      d="M16.784 13.812l-.885.77 2.5 7.51a.5.5 0 01-.77.561L11.4 18.082l-6.234 4.571a.5.5 0 01-.77-.561l2.5-7.51L.925 9.13a.5.5 0 01.325-.88H8.4l2.534-6.676a.5.5 0 01.935 0l.474 1.252"
    />,
    <path
      className="rating-star-add_svg__a"
      d="M23.25 5.75a.5.5 0 00-.5-.5h-2.5v-2.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v2.5h-2.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2.5v2.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5z"
    />
  );

export default SvgRatingStarAdd;
