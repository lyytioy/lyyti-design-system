import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRatingStarSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rating-star-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="rating-star-square_svg__a"
      d="M12.681 6.593l1.6 3.157h2.746a.748.748 0 01.525 1.28l-2.505 2.47 1.39 3.191a.753.753 0 01-1.059.957L12 15.748l-3.378 1.9a.753.753 0 01-1.059-.957l1.39-3.191-2.5-2.459a.753.753 0 01.528-1.29h2.734l1.6-3.157a.763.763 0 011.366-.001z"
    />,
    <rect
      className="rating-star-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgRatingStarSquare;
