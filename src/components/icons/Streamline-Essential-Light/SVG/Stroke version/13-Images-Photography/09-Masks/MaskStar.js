import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-star_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-star_svg__a"
      d="M12.959 4.6L15.1 9h4.16a1.021 1.021 0 01.719 1.783l-3.612 3.1 2 4.6a1.091 1.091 0 01-1.552 1.366l-4.838-2.726-4.836 2.73a1.091 1.091 0 01-1.553-1.366l2-4.6-3.612-3.1A1.02 1.02 0 014.692 9h4.162L11 4.6a1.1 1.1 0 011.959 0z"
    />
  );

export default SvgMaskStar;
