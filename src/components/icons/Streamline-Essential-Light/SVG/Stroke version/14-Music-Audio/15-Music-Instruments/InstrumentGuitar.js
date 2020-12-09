import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentGuitar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-guitar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-guitar_svg__a"
      d="M12.012 14.817a2 2 0 110-2.829 2 2 0 010 2.829zM3.526 17.645l2.828 2.828"
    />,
    <path
      className="instrument-guitar_svg__a"
      d="M21.526 1.387a1 1 0 00-1.414 0L17.069 4.43a.354.354 0 000 .5.354.354 0 010 .5l-3.2 3.2a1 1 0 01-1.167.18 3.889 3.889 0 00-5.711 2.047 1 1 0 01-1.048.688c-5.458-.529-6.969 5.794-3.127 9.637 3.861 3.862 10.159 2.3 9.637-3.128a1 1 0 01.688-1.047 3.885 3.885 0 002.048-5.71 1 1 0 01.18-1.168l3.2-3.2a.354.354 0 01.5 0 .354.354 0 00.5 0l3.043-3.043a1 1 0 000-1.414zM18.819.68l1 1M17.319 2.18l1 1M23.319 5.18l-1-1M21.819 6.68l-1-1"
    />
  );

export default SvgInstrumentGuitar;
