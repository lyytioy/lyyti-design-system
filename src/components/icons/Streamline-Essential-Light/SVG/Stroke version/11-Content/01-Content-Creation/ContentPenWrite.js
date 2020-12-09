import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPenWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pen-write_svg__a"
      d="M11.024 15.455l5.999-9.52 2.72 1.713-5.998 9.521zM22.749 2.894a1.607 1.607 0 01.5 2.218l-3.429 5.44"
    />,
    <path
      className="content-pen-write_svg__a"
      d="M17.028 5.94L20.458.5l2.719 1.715-3.43 5.44zM10.244 19.718l3.503-2.543-2.72-1.715-.783 4.258zM.5 23.5l3-3 2 2 2-2L9 22"
    />
  );

export default SvgContentPenWrite;
