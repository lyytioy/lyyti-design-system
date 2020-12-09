import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizer2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="equalizer-2_svg__a"
      d="M3 20.5a1 1 0 01-2 0v-17a1 1 0 012 0zM23 20.5a1 1 0 01-2 0v-17a1 1 0 012 0zM3 3.5h18M3 20.5h18"
    />,
    <rect
      className="equalizer-2_svg__a"
      x={5}
      y={5.5}
      width={5}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="equalizer-2_svg__a"
      x={5}
      y={14.5}
      width={4}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="equalizer-2_svg__a"
      x={10}
      y={11.5}
      width={4}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="equalizer-2_svg__a"
      x={15}
      y={14.5}
      width={4}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="equalizer-2_svg__a"
      d="M12 6.5h1M15 6.5h1M18 6.5h1M7 16.5V18M7 14.5V10M17 16.5V18M17 14.5V10M12 13.5V18M12 11.5V10"
    />
  );

export default SvgEqualizer2;
