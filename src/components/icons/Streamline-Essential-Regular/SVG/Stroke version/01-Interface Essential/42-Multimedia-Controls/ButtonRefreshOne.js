import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefreshOne = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh-one_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh-one_svg__a"
      d="M12.75 15.748V9a.751.751 0 00-1.2-.6l-1.8 1.35M11.25 15.748h3"
    />,
    <path
      className="button-refresh-one_svg__a"
      d="M.75 5.248h18a1.5 1.5 0 011.5 1.5v6M23.25 18.748h-18a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="button-refresh-one_svg__a"
      d="M3.75 2.248l-3 3 3 3M20.25 21.748l3-3-3-3"
    />
  );

export default SvgButtonRefreshOne;
