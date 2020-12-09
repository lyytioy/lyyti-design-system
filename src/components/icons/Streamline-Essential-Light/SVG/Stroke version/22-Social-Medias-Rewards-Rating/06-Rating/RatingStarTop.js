import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-top_svg__a"
      d="M17.3 12.451a5.5 5.5 0 11-10.583-.037M18.383 6.9a9.5 9.5 0 11-12.813.044"
    />,
    <path
      className="rating-star-top_svg__a"
      d="M12.588.921l1.282 2.516h2.495a.612.612 0 01.435 1.069l-2.17 2.263 1.2 2.761a.654.654 0 01-.931.819L12 8.715l-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L7.2 4.506a.612.612 0 01.429-1.069h2.495L11.411.921a.662.662 0 011.177 0z"
    />
  );

export default SvgRatingStarTop;
