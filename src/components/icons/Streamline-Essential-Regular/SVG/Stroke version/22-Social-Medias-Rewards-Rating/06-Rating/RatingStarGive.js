import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-give_svg__a"
      d="M.751 14.25v9M15.751 21.75a3 3 0 00-3-3H9a3 3 0 00-3-3H.751v6zM6.001 18.75h2.998M12.709 15.709l1.471-.856 5.4 3.14a.187.187 0 00.277-.2l-1.319-6.1 4.649-4.163a.187.187 0 00-.107-.33l-6.21-.631L14.352.862a.188.188 0 00-.344 0L11.49 6.573 5.28 7.2a.187.187 0 00-.106.326l4.653 4.161-.327 1.528"
    />
  );

export default SvgRatingStarGive;
