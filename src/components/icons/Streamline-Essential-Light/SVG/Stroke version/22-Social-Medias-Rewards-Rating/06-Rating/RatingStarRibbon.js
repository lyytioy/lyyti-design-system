import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-ribbon_svg__a"
      d="M20.5 22.079a1 1 0 01-1.543.839L12 18.417l-6.957 4.5a1 1 0 01-1.543-.838V1.917a1 1 0 011-1h15a1 1 0 011 1z"
    />,
    <path
      className="rating-star-ribbon_svg__a"
      d="M12.588 5.4l1.282 2.52h2.5a.613.613 0 01.43 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.818L12 13.2l-2.9 1.631a.654.654 0 01-.931-.818l1.2-2.761L7.2 8.989a.612.612 0 01.432-1.069h2.5l1.281-2.52a.661.661 0 011.175 0z"
    />
  );

export default SvgRatingStarRibbon;
