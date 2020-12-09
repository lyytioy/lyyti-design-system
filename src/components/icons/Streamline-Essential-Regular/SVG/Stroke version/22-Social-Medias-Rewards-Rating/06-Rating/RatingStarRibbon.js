import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-ribbon_svg__a"
      d="M19.059 23.105l-6.177-4.492a1.5 1.5 0 00-1.764 0l-6.177 4.492A.75.75 0 013.75 22.5V2.25a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V22.5a.75.75 0 01-1.191.605z"
    />,
    <path
      className="rating-star-ribbon_svg__a"
      d="M12.53 5.791l1.249 2.458h2.127a.582.582 0 01.419 1l-1.953 1.922 1.082 2.485a.589.589 0 01-.839.737L12 12.918l-2.615 1.471a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.454a.594.594 0 011.06 0z"
    />
  );

export default SvgRatingStarRibbon;
