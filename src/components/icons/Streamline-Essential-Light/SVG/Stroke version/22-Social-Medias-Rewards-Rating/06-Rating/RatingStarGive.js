import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-give_svg__a"
      d="M10.531 13.558l.976-3-4.166-3.681A.5.5 0 017.669 6h4.947l1.749-4.673a.5.5 0 01.938 0L17.052 6H22a.5.5 0 01.329.876l-4.169 3.695 1.733 5.264a.5.5 0 01-.768.561l-4.291-3.114-2.111 1.556M1.5 23V13M1.5 15h7a3 3 0 013 3h6a3 3 0 013 3h-19zM11.5 18h-3"
    />
  );

export default SvgRatingStarGive;
