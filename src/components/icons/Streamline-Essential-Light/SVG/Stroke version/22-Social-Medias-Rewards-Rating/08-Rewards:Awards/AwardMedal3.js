import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-medal-3_svg__a"
      d="M8.505 11.749L6.719 1.928A1 1 0 017.7.749h8.6a1 1 0 01.984 1.179l-1.786 9.821M10.505.749v7M13.505.749v7"
    />,
    <path
      className="award-medal-3_svg__a"
      d="M12.706 11.181l1.539 3.57h2.995a.735.735 0 01.516 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L12 20.684l-3.48 1.961a.785.785 0 01-1.12-.982l1.44-3.313-2.6-2.315a.735.735 0 01.514-1.284h3l1.541-3.57a.8.8 0 011.411 0z"
    />
  );

export default SvgAwardMedal3;
