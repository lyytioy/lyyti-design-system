import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentSaxophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-saxophone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-saxophone_svg__a"
      d="M10.981 8.5h2M10.981 10.5h2M10.981 12.5h2M3.981.5a3 3 0 013 3v14c0 3.314 3.5 6 7 6s7-2.686 7-6V14a1.5 1.5 0 01.779-1.316.5.5 0 00.113-.792l-6.039-6.038a.5.5 0 00-.853.353V14.5a1.5 1.5 0 01-3 0v-8c0-3.314-4.687-6-8-6h-2"
    />
  );

export default SvgInstrumentSaxophone;
