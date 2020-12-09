import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTrumpet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-trumpet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-trumpet_svg__a"
      d="M.5 10.475H18M.5 9.475v2M23.5 13.914a.5.5 0 01-.816.388L18 10.475l4.683-3.837a.5.5 0 01.817.387zM5.5 10.475a3 3 0 000 6h9a3 3 0 000-6M7.5 8.475v9M9.5 8.475v9M11.5 8.475v9"
    />
  );

export default SvgInstrumentTrumpet;
