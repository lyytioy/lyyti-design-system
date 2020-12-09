import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-cursor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-cursor_svg__a"
      d="M4.5 17.5H2A1.5 1.5 0 01.5 16V2A1.5 1.5 0 012 .5h9A1.5 1.5 0 0112.5 2v4.5M.501 13.5h4M23.5 14.5V10A1.5 1.5 0 0022 8.5h-2.5"
    />,
    <path
      className="responsive-design-cursor_svg__a"
      d="M12.5 8.5H8A1.5 1.5 0 006.5 10v9A1.5 1.5 0 008 20.5h5.5M10.501 8.5v12"
    />,
    <rect
      className="responsive-design-cursor_svg__a"
      x={14.501}
      y={0.5}
      width={5}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design-cursor_svg__a"
      d="M14.501 7.5h5M23.501 23.5l-4.5-4.5M17.085 21.252a.5.5 0 00.934.039L19 19l2.291-.982a.5.5 0 00-.039-.934l-5.3-1.768a.5.5 0 00-.632.633zM14.5 2.5h5M.5 3.5h12M20.501 11v2.5"
    />
  );

export default SvgResponsiveDesignCursor;
