import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTv3DGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-3d-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-3d-glasses_svg__a"
      d="M.5 6.5l3.9-5.2A2 2 0 016 .5h1.5M19.5 6.5l-3.9-5.2A2 2 0 0014 .5h-1.5"
    />,
    <rect
      className="modern-tv-3d-glasses_svg__a"
      x={10.5}
      y={13.5}
      width={13}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-3d-glasses_svg__a"
      d="M12.5 21.5H15a1.5 1.5 0 000-3 1.5 1.5 0 000-3h-2.5M13.5 18.5H15M18.5 15.5a3 3 0 010 6zM18.786 11.5l.714-5H.5l.717 5.02A2.306 2.306 0 003.5 13.5h2a2.885 2.885 0 002.7-1.873l.447-1.191a1.443 1.443 0 012.7 0l.4 1.064"
    />
  );

export default SvgModernTv3DGlasses;
