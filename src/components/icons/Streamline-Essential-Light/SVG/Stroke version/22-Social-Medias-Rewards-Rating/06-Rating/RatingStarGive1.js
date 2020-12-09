import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarGive1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-give-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-give-1_svg__a"
      d="M.75 23.25v-10M.75 15.25h7a3 3 0 013 3h6a3 3 0 013 3h-19zM10.75 18.25h-3M17.456 1.68L19 5.249h2.99a.735.735 0 01.516 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.479-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.315a.735.735 0 01.514-1.284h3l1.537-3.569a.8.8 0 011.412 0z"
    />
  );

export default SvgRatingStarGive1;
