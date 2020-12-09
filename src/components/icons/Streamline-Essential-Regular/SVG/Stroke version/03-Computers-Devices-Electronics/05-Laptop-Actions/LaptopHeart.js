import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-heart_svg__a"
      d="M17.25 23.25l-5.114-5.335a3.023 3.023 0 01-.566-3.492 3.025 3.025 0 014.845-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492zM3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5V9M9 12H.75a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopHeart;
