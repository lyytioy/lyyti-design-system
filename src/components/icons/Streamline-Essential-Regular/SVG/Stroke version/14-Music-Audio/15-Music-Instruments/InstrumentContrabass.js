import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentContrabass = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-contrabass_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-contrabass_svg__a"
      d="M12.947 16.257a3.091 3.091 0 012.888-.854c.117-.1.243-.181.353-.292a5.389 5.389 0 00.147-7.573 5.285 5.285 0 00-7.512.148c-.11.111-.191.238-.29.356a3.15 3.15 0 01-.847 2.911 3.018 3.018 0 01-4.234.133 7.16 7.16 0 00-.606.5 6.929 6.929 0 00-.189 9.737 6.8 6.8 0 009.659-.191 7.208 7.208 0 00.5-.611 3.077 3.077 0 01.131-4.264zM4.5 19.501L.75 23.249M23.25.751l-12 12M20.25.751l3 3M18 3.001l3 3M6.866 14.963l-1.579.53M8.97 17.084l-.526 1.591"
    />
  );

export default SvgInstrumentContrabass;
