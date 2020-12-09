import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-star_svg__a"
      d="M17.965 11.684l1.535 4.069h3a.736.736 0 01.518 1.284l-2.6 1.815 1.44 3.313a.785.785 0 01-1.117.983l-3.481-1.961-3.48 1.961a.785.785 0 01-1.117-.983l1.44-3.313-2.6-1.815a.735.735 0 01.514-1.284h3l1.541-4.069a.794.794 0 011.407 0z"
    />,
    <path
      className="file-code-star_svg__a"
      d="M8.247 20.256h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061v3.128"
    />,
    <rect
      className="file-code-star_svg__a"
      x={6.747}
      y={5.256}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-star_svg__a"
      d="M3.747 5.256v4.5M12.747 5.256v4.5"
    />,
    <rect
      className="file-code-star_svg__a"
      x={3.747}
      y={12.756}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeStar;
