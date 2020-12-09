import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-hand_svg__a"
      d="M23 23.5l.5-3.279a.95.95 0 00-.59-.971l-5.41-1.941V13a1.5 1.5 0 00-3 0v8.191l-1.72-2.058a1.038 1.038 0 00-.8-.367l-1 .017a.976.976 0 00-.861 1.438l1.812 3.279M4.5 17.5H2A1.5 1.5 0 01.5 16V2A1.5 1.5 0 012 .5h9A1.5 1.5 0 0112.5 2v4.5M.5 13.5h4M10.5 8.5V17"
    />,
    <rect
      className="responsive-design-hand_svg__a"
      x={14.5}
      y={0.5}
      width={5}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="responsive-design-hand_svg__a"
      d="M14.5 7.5h5M14.5 2.5h5M.501 3.5h12M20.5 11v5.5M21.5 8.5h.5a1.5 1.5 0 011.5 1.5v7.5M8 20.5A1.5 1.5 0 016.5 19v-9A1.5 1.5 0 018 8.5h4.5"
    />
  );

export default SvgResponsiveDesignHand;
