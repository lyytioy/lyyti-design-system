import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomOutPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zoom-out-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zoom-out-page_svg__a"
      d="M.751 3.749v-1.5a1.5 1.5 0 011.5-1.5h1.5M3.751 23.249h-1.5a1.5 1.5 0 01-1.5-1.5v-1.5M.751 7.499v3M.751 13.499v3M23.251 7.499v3M7.501.749h3M13.501.749h3M20.251.749h1.5a1.5 1.5 0 011.5 1.5v1.5M10.501 23.249h-3"
    />,
    <circle className="zoom-out-page_svg__a" cx={14.251} cy={14.249} r={6} />,
    <path
      className="zoom-out-page_svg__a"
      d="M12.001 14.249h4.5M18.493 18.491l4.758 4.758"
    />
  );

export default SvgZoomOutPage;
