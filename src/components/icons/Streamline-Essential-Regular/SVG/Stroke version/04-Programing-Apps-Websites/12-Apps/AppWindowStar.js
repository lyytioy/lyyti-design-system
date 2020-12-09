import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-star_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-star_svg__a"
      d="M1.51 6.753h21M12.539 10.094l1.151 2.659h2.24a.549.549 0 01.387.959l-1.944 1.735 1.077 2.475a.587.587 0 01-.836.734l-2.6-1.465-2.6 1.465a.587.587 0 01-.836-.734l1.078-2.475L7.7 13.712a.549.549 0 01.385-.959h2.241l1.153-2.659a.6.6 0 011.06 0z"
    />
  );

export default SvgAppWindowStar;
