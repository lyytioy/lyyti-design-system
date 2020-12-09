import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentBrushPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-brush-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-brush-pen_svg__a"
      d="M9.131 7.5a3.775 3.775 0 00-3.75-3.75c-2.25 0-2.677-1.258-3-3-3 3.75-1.781 10.5 3 10.5"
    />,
    <path
      className="content-brush-pen_svg__a"
      d="M5.381 11.25l3.75-3.75 11.638 13.47a1.382 1.382 0 01-1.953 1.944zM9.293 18.95L7.96 20.282a1.5 1.5 0 01-2.121 0l-2.121-2.121a1.5 1.5 0 010-2.121l1.262-1.263M12.691 7.066l5.4-5.4a3 3 0 014.243 4.243l-5.646 5.646M21.945 6.3a3.23 3.23 0 01.494 4.716L19.2 14.25M14.444 5.313l4.243 4.243"
    />,
    <path
      className="content-brush-pen_svg__a"
      d="M1.596 20.282l2.122-2.122 2.12 2.122-2.12 2.12zM2.657 21.343L.75 23.25"
    />
  );

export default SvgContentBrushPen;
