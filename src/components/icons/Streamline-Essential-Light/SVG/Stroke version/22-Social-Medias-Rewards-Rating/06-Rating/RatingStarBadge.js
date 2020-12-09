import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-badge_svg__a"
      d="M2.5 1.567a1 1 0 011-1h17a1 1 0 011 1v6.265A17.78 17.78 0 0112.494 23.3a1 1 0 01-.988 0A17.779 17.779 0 012.5 7.832V1.567zM2.501 3.567h19"
    />,
    <path
      className="rating-star-badge_svg__a"
      d="M12.589 7.054l1.283 2.516h2.5a.613.613 0 01.431 1.069l-2.17 2.261 1.2 2.761a.654.654 0 01-.931.818L12 14.847l-2.9 1.634a.654.654 0 01-.931-.818l1.2-2.761-2.164-2.263a.612.612 0 01.429-1.069h2.5l1.285-2.516a.66.66 0 011.17 0z"
    />
  );

export default SvgRatingStarBadge;
