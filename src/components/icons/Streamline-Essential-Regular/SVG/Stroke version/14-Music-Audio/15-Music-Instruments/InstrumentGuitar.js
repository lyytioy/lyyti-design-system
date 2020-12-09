import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentGuitar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-guitar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-guitar_svg__a"
      d="M12.623 17.9a1.5 1.5 0 011.24-1.651 3.008 3.008 0 001.658-.83c1.465-1.464 1.1-4.2-.819-6.123s-4.659-2.284-6.123-.819a3.008 3.008 0 00-.83 1.658A1.5 1.5 0 016.1 11.377a4.741 4.741 0 00-3.98 1.248c-2.05 2.05-1.64 5.785.916 8.341s6.291 2.966 8.341.916a4.738 4.738 0 001.246-3.982z"
    />,
    <rect
      className="instrument-guitar_svg__a"
      x={17.645}
      y={2.23}
      width={5.25}
      height={3}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 20.27 3.73)"
    />,
    <path
      className="instrument-guitar_svg__a"
      d="M18.414 5.586l-3.712 3.712M18.944.813l1.061 1.061M22.126 3.995l1.061 1.061M20.535 5.586l1.061 1.061M17.353 2.404l1.061 1.061"
    />,
    <circle
      className="instrument-guitar_svg__a"
      cx={10.989}
      cy={13.011}
      r={1.5}
    />,
    <path className="instrument-guitar_svg__a" d="M5.156 16.723l2.121 2.121" />
  );

export default SvgInstrumentGuitar;
