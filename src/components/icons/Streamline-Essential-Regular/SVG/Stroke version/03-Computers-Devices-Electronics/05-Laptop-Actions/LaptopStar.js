import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-star_svg__a"
      d="M17.956 11.68l1.544 4.073h2.99a.735.735 0 01.517 1.283l-2.6 1.813 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-1.813a.734.734 0 01.514-1.283h3l1.541-4.073a.8.8 0 011.408 0zM3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="laptop-star_svg__a"
      d="M12 12H.75a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopStar;
