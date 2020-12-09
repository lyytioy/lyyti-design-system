import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioactiveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radioactive-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="radioactive-circle_svg__a"
      cx={12}
      cy={12.001}
      r={11.5}
    />,
    <path
      className="radioactive-circle_svg__a"
      d="M13.5 12a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5zM16.7 4.938a.5.5 0 00-.719.159l-2.238 3.885A3.488 3.488 0 0115.5 12a3.588 3.588 0 01-.05.5h4.533a.5.5 0 00.5-.533A9.686 9.686 0 0016.7 4.938zM10.257 15.019l-2.246 3.89a.5.5 0 00.209.7 8.438 8.438 0 007.56 0 .5.5 0 00.256-.3.506.506 0 00-.047-.395l-2.246-3.89a3.393 3.393 0 01-3.486 0zM10.257 8.982L8.014 5.1a.5.5 0 00-.719-.16 9.691 9.691 0 00-3.777 7.03.5.5 0 00.5.533H8.55A3.588 3.588 0 018.5 12a3.486 3.486 0 011.757-3.018z"
    />
  );

export default SvgRadioactiveCircle;
