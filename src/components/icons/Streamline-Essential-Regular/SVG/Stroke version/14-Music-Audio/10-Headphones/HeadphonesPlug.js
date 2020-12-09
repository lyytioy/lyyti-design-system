import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesPlug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-plug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="headphones-plug_svg__a"
      x={7.122}
      y={7.346}
      width={8.263}
      height={7.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 11.253 11.096)"
    />,
    <path
      className="headphones-plug_svg__a"
      d="M12.584 6.583l3.182-3.182 3.182 3.182-3.182 3.182zM21.599.75l-2.121 2.121M20.237 4.434a.75.75 0 00-.112-.916l-1.294-1.293a.749.749 0 00-.916-.113L15.766 3.4l3.182 3.182zM7.6 17.928a1.5 1.5 0 01-2.121 0l-1.058-1.061a1.5 1.5 0 010-2.121l2.32-2.32 3.182 3.182zM4.952 17.4l-1.965 2.157a1.5 1.5 0 00-.147 2.251l.912 1a1.5 1.5 0 002.122 0l1.06-1.152a1.5 1.5 0 012.122 0l1.591 1.591"
    />
  );

export default SvgHeadphonesPlug;
