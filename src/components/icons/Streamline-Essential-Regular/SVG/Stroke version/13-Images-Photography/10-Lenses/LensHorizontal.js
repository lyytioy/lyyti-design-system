import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="lens-horizontal_svg__a"
      cx={17.67}
      cy={6.524}
      rx={3.75}
      ry={6.75}
      transform="rotate(-45 17.67 6.524)"
    />,
    <path
      className="lens-horizontal_svg__a"
      d="M12.9 1.751l-8.488 8.485C2.947 11.7 3.9 15.025 6.533 17.661s5.96 3.586 7.425 2.121l8.485-8.482"
    />,
    <path
      className="lens-horizontal_svg__a"
      d="M8.655 5.994c-1.465 1.464-.515 4.788 2.121 7.424S16.736 17 18.2 15.54M13.173 6.778L8.93 11.021M17.416 11.021l-4.243 4.243M4.005 10.805L1.227 15.7a3 3 0 00.521 3.543l2.819 2.819a3 3 0 003.3.636l5.433-2.467"
    />
  );

export default SvgLensHorizontal;
