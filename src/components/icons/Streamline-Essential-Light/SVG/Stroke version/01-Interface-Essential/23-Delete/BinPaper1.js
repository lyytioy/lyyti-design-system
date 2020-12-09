import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBinPaper1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-paper-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bin-paper-1_svg__a"
      d="M2.5 7.5h19M18.559 22.562a1 1 0 01-1 .938H6.439a1 1 0 01-1-.938L4.5 7.5h15zM12 7.5l7.094 6.495M4.501 7.512l14.116 14.116M4.906 13.995l9.505 9.505M12 7.5l-7.094 6.495M19.499 7.512L5.383 21.628M19.094 13.995L9.589 23.5"
    />
  );

export default SvgBinPaper1;
