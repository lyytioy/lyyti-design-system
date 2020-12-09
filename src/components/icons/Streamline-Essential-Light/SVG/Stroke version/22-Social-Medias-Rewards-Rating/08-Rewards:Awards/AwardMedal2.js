import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-medal-2_svg__a"
      d="M10.003.749v7M14.003.749v7M12.003.749v7M12 .749H7a1 1 0 00-1 1V3.12a1 1 0 00.033.255L8.5 12.75M12 .749h5a1 1 0 011 1V3.12a1 1 0 01-.033.255L15.5 12.75M12.706 11.181l1.539 3.57h2.995a.735.735 0 01.516 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L12 20.684l-3.48 1.961a.785.785 0 01-1.12-.982l1.44-3.313-2.6-2.315a.735.735 0 01.514-1.284h3l1.541-3.57a.8.8 0 011.411 0z"
    />
  );

export default SvgAwardMedal2;
