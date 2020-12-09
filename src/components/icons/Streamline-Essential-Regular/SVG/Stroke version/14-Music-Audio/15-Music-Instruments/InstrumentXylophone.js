import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentXylophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-xylophone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-xylophone_svg__a"
      d="M15.012 17.845l-12.537 1.9A1.5 1.5 0 01.75 18.261V3a1.5 1.5 0 011.725-1.483l19.5 2.954a1.5 1.5 0 011.275 1.484v9.352a1.5 1.5 0 01-1.275 1.483l-.478.072"
    />,
    <circle
      className="instrument-xylophone_svg__a"
      cx={13.5}
      cy={11.25}
      r={2.25}
    />,
    <path
      className="instrument-xylophone_svg__a"
      d="M14.879 13.023L21.75 22.5M6.75 2.165v16.931M12.75 16.5v1.687M12.75 3.074V6M18.75 3.983v8.767"
    />
  );

export default SvgInstrumentXylophone;
