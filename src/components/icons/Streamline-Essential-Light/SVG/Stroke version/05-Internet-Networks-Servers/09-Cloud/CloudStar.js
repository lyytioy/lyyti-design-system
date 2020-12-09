import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-star_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3"
    />,
    <path
      className="cloud-star_svg__a"
      d="M12.706 10.93l1.539 3.57h2.995a.735.735 0 01.516 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L12 20.433l-3.48 1.961a.785.785 0 01-1.12-.982L8.843 18.1l-2.6-2.315a.735.735 0 01.515-1.285h3l1.541-3.57a.8.8 0 011.407 0z"
    />
  );

export default SvgCloudStar;
