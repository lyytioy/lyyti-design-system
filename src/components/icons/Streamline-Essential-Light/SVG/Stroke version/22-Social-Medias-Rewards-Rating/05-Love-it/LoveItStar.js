import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-star_svg__a"
      d="M18.2 10.793l1.539 3.57h3a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L17.5 20.3l-3.48 1.957a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.315a.735.735 0 01.514-1.284h3l1.54-3.57a.8.8 0 011.403 0z"
    />,
    <path
      className="love-it-star_svg__a"
      d="M10.543 19.864L2.2 11.272a5.667 5.667 0 01-1.087-6.607A5.839 5.839 0 0110.4 3.178L12 4.637l1.6-1.459a5.84 5.84 0 019.287 1.487 5.669 5.669 0 01-1.087 6.607"
    />
  );

export default SvgLoveItStar;
