import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShoppingCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-shopping-cart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-shopping-cart_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23M16 5.5l-1.88 5.171a.5.5 0 01-.47.329h-3.579a.5.5 0 01-.459-.3l-1.072-3A.5.5 0 019 7h6.455M10.75 12.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.25 12.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="monitor-shopping-cart_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorShoppingCart;
