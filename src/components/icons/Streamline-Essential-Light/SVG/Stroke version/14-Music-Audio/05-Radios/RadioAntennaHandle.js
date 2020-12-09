import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntennaHandle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna-handle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="radio-antenna-handle_svg__a" d="M2.5 8.5l17-4" />,
    <rect
      className="radio-antenna-handle_svg__a"
      x={0.5}
      y={8.5}
      width={23}
      height={15}
      rx={2}
      ry={2}
    />,
    <path
      className="radio-antenna-handle_svg__a"
      d="M.5 13.5h23M4 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M20 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6.5 11.5h1M16.5 11.5h1M9.5 11.5h5"
    />,
    <circle className="radio-antenna-handle_svg__a" cx={5.5} cy={18.5} r={3} />,
    <path
      className="radio-antenna-handle_svg__a"
      d="M9.5 15.5h12M9.5 21.5h12M10.5 17.5h11M10.5 19.5h11M.5 10.5v-6a3 3 0 013-3"
    />,
    <path
      className="radio-antenna-handle_svg__a"
      d="M20.5 1.5a1 1 0 01-1 1h-15a1 1 0 010-2h15a1 1 0 011 1zM20.5 1.5a3 3 0 013 3v6"
    />
  );

export default SvgRadioAntennaHandle;
