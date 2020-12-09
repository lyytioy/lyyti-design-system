import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-bubble_svg__a"
      d="M12.593 6.8l1.4 2.95h2.377a.651.651 0 01.469 1.114l-2.187 1.946 1.209 2.778a.658.658 0 01-.938.823L12 14.767l-2.923 1.644a.658.658 0 01-.938-.823l1.209-2.778-2.183-1.946a.651.651 0 01.469-1.114h2.377l1.4-2.95a.665.665 0 011.182 0z"
    />,
    <path
      className="rating-star-bubble_svg__a"
      d="M23.25 12a3.751 3.751 0 00-2.618-3.576 3.75 3.75 0 00-5.056-5.056 3.751 3.751 0 00-7.152 0 3.75 3.75 0 00-5.056 5.056 3.751 3.751 0 000 7.152 3.75 3.75 0 005.056 5.056 3.751 3.751 0 007.152 0 3.75 3.75 0 005.056-5.056A3.752 3.752 0 0023.25 12z"
    />
  );

export default SvgRatingStarBubble;
