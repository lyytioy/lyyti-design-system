import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComposition16To9 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-16-to-9_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-16-to-9_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={4}
      ry={4}
    />,
    <path
      className="composition-16-to-9_svg__a"
      d="M5.5 15v-4.5a.5.5 0 00-.8-.4l-1.2.9M4.5 15h2"
    />,
    <circle className="composition-16-to-9_svg__a" cx={10} cy={13.5} r={1.5} />,
    <path
      className="composition-16-to-9_svg__a"
      d="M10.5 10a2 2 0 00-2 2v1.5"
    />,
    <circle className="composition-16-to-9_svg__a" cx={19} cy={11.5} r={1.5} />,
    <path
      className="composition-16-to-9_svg__a"
      d="M18.5 15a2 2 0 002-2v-1.5M14.5 10.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.5 14.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgComposition16To9;
