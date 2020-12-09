import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarWinner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-winner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-winner_svg__a"
      d="M12.589 5.109l1.282 2.641h2.495a.612.612 0 01.434 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.819L12 13.028l-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L7.2 8.819a.612.612 0 01.432-1.069h2.5l1.285-2.641a.662.662 0 011.172 0zM17.992 13.752l1.03-2.215a.531.531 0 01.943 0l1.027 2.215h2a.49.49 0 01.346.855L21.6 16.316l.962 2.209a.523.523 0 01-.746.654l-2.325-1.307-2.324 1.307a.523.523 0 01-.746-.654l.551-1.266M7.032 17.271l.546 1.254a.523.523 0 01-.746.654l-2.325-1.307-2.324 1.307a.523.523 0 01-.746-.654l.963-2.209-1.737-1.709a.489.489 0 01.343-.855h2l1.03-2.215a.531.531 0 01.943 0l1.027 2.215"
    />
  );

export default SvgRatingStarWinner;
