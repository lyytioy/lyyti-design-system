import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioactiveCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radioactive-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="radioactive-circle_svg__a"
      d="M12 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle className="radioactive-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="radioactive-circle_svg__a"
      d="M10.313 9.078L7.874 4.855A8.246 8.246 0 003.75 12h4.875a3.371 3.371 0 011.688-2.922zM10.313 14.923l-2.439 4.223a8.246 8.246 0 008.251 0l-2.438-4.222a3.372 3.372 0 01-3.374-.001zM15.375 12h4.876a8.246 8.246 0 00-4.126-7.144l-2.438 4.221A3.376 3.376 0 0115.375 12z"
    />
  );

export default SvgRadioactiveCircle;
