import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-heart_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-heart_svg__a"
      d="M11.961 19.53L5.14 12.136A4.315 4.315 0 014.384 7.3a3.956 3.956 0 016.463-1.09l1.114 1.157 1.114-1.157a3.956 3.956 0 016.462 1.09 4.314 4.314 0 01-.756 4.84z"
    />
  );

export default SvgMaskHeart;
