import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeakers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speakers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="speakers_svg__a" cx={11.99} cy={5.974} r={1.5} />,
    <circle className="speakers_svg__a" cx={11.99} cy={14.974} r={5.5} />,
    <circle className="speakers_svg__a" cx={11.99} cy={14.974} r={2} />,
    <path
      className="speakers_svg__a"
      d="M6 2.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M18 2.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M18 20.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M6 20.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="speakers_svg__a"
      x={3.5}
      y={0.5}
      width={17}
      height={23}
      rx={2}
      ry={2}
    />
  );

export default SvgSpeakers;
