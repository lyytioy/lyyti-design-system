import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeSealed = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-sealed_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="envelope-sealed_svg__a"
      d="M20.726.813l-2.567 2.934A2.2 2.2 0 0116.5 4.5h-9a2.2 2.2 0 01-1.659-.753L3.274.813M3.267 23.18L5.5 20.5h13l2.233 2.68M12 4.531V20.5"
    />,
    <rect
      className="envelope-sealed_svg__a"
      x={3}
      y={0.5}
      width={18}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgEnvelopeSealed;
