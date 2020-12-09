import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRouterSignalTech = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".router-signal-tech_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="router-signal-tech_svg__a"
      x={4.5}
      y={19.5}
      width={15}
      height={4}
      rx={1}
      ry={1}
    />,
    <path
      className="router-signal-tech_svg__a"
      d="M6.5 19.5v-3M17.5 19.5v-3M6.5 21.5h1M9.5 21.5h1M12 6.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="router-signal-tech_svg__a"
      x={9.5}
      y={0.5}
      width={5}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="router-signal-tech_svg__a"
      d="M18.5 3.5h3a1 1 0 011 1v3h-5v-3a1 1 0 011-1zM22.691 10.5a.81.81 0 00.724-1.171L22.5 7.5h-5l-.915 1.829a.81.81 0 00.724 1.171z"
    />,
    <rect
      className="router-signal-tech_svg__a"
      x={0.5}
      y={3.5}
      width={7}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="router-signal-tech_svg__a"
      d="M1.5 10.5h5M2.5 10.5l.5-2M5.5 10.5l-.5-2M15.605 13.592a6.5 6.5 0 00-7.21 0M14.5 15.756a4.5 4.5 0 00-4.992 0"
    />
  );

export default SvgRouterSignalTech;
