import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPens = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pens_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pens_svg__a"
      d="M5.25.75a3 3 0 00-3 3v13.5l3 6 3-6V3.75a3 3 0 00-3-3zM2.25 5.25h6M2.25 17.25h6M12.75 8.25h6v9h-6zM18.348 2.25h1.9a1.5 1.5 0 011.5 1.5V12M15.75 20.25v3"
    />,
    <path
      className="content-pens_svg__a"
      d="M18.75 8.25v-4.5a3 3 0 00-6 0v4.5M12.75 17.25l1.5 3h3l1.5-3"
    />
  );

export default SvgContentPens;
