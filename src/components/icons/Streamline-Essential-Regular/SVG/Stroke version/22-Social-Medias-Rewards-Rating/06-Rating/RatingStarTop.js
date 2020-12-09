import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-top_svg__a"
      d="M12.53 1.075l1.249 2.675h2.127a.583.583 0 01.42 1l-1.953 1.703 1.082 2.485a.59.59 0 01-.84.737L12 8.2 9.384 9.675a.589.589 0 01-.839-.737l1.082-2.485-1.953-1.706a.583.583 0 01.419-1h2.127l1.249-2.675a.6.6 0 011.061.003zM12 8.204v6.046M4.5 3.6a11.25 11.25 0 1015 0M5.635 9.735a6.75 6.75 0 1012.73 0"
    />
  );

export default SvgRatingStarTop;
