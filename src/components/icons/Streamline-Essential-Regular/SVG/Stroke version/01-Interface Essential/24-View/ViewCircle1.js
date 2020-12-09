import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="view-circle-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="view-circle-1_svg__a"
      d="M12 7.772c-2.687-.044-5.467 1.778-7.214 3.643a1.051 1.051 0 000 1.439C6.5 14.68 9.264 16.543 12 16.5c2.736.044 5.5-1.819 7.216-3.645a1.051 1.051 0 000-1.439C17.467 9.55 14.687 7.728 12 7.772z"
    />,
    <circle className="view-circle-1_svg__a" cx={12} cy={12.135} r={1.5} />
  );

export default SvgViewCircle1;
