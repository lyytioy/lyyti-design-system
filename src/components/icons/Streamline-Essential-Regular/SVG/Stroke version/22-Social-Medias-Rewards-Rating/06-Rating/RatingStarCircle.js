import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-circle_svg__a"
      d="M12.593 6.8l1.4 2.95h2.377a.651.651 0 01.469 1.114l-2.187 1.946 1.209 2.778a.658.658 0 01-.938.823L12 14.767l-2.923 1.644a.658.658 0 01-.938-.823l1.209-2.778-2.183-1.946a.651.651 0 01.469-1.114h2.377l1.4-2.95a.665.665 0 011.182 0z"
    />,
    <circle className="rating-star-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgRatingStarCircle;
