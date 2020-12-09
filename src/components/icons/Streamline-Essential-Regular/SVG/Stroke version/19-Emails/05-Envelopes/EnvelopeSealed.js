import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeSealed = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-sealed_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="envelope-sealed_svg__a"
      x={4.5}
      y={0.75}
      width={15}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope-sealed_svg__a"
      d="M12 5.25v13.5M19.5 2.25a3 3 0 01-3 3h-9a3 3 0 01-3-3M4.5 21.75a3 3 0 013-3h9a3 3 0 013 3"
    />
  );

export default SvgEnvelopeSealed;
