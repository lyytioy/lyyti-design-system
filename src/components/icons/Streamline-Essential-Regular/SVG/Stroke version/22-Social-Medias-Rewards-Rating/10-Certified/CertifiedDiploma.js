import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedDiploma = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-diploma_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="certified-diploma_svg__a"
      d="M5.565 13.933L1.383 17.04a1.5 1.5 0 00-.194 2.285l3.486 3.486a1.5 1.5 0 002.285-.194l3.107-4.182M18.435 10.067l4.182-3.107a1.5 1.5 0 00.194-2.285L19.325 1.19a1.5 1.5 0 00-2.285.193l-3.107 4.182M12.393 15.729L17.25 22.5v-5.25h5.25l-6.771-4.857"
    />,
    <circle className="certified-diploma_svg__a" cx={12} cy={12} r={3.75} />
  );

export default SvgCertifiedDiploma;
