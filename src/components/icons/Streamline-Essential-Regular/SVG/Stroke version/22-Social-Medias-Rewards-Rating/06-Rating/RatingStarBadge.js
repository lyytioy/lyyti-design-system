import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-badge_svg__a"
      d="M23.25 9.938A13.5 13.5 0 0112 23.25 13.5 13.5 0 01.75 9.938V.75h22.5zM.75 5.25h22.5"
    />,
    <path
      className="rating-star-badge_svg__a"
      d="M12.53 8.792l1.249 2.458h2.127a.582.582 0 01.419 1l-1.953 1.922 1.082 2.485a.589.589 0 01-.839.736L12 15.919l-2.615 1.47a.589.589 0 01-.839-.736l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.454a.594.594 0 011.06 0z"
    />
  );

export default SvgRatingStarBadge;
