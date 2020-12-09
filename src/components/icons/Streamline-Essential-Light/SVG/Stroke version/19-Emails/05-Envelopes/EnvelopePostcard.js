import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopePostcard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-postcard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="envelope-postcard_svg__a"
      x={0.5}
      y={7.5}
      width={23}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope-postcard_svg__a"
      d="M16.5 10.5h4v4h-4zM4.5 11.5h2M4.5 16.497h9M4.5 19.5h12M2.5 5.5h19M4.5 3.5h15M6.5 1.5h11"
    />
  );

export default SvgEnvelopePostcard;
