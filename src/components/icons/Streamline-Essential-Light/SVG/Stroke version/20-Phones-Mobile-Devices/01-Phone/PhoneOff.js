import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="phone-off_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="phone-off_svg__a"
      d="M20.132 3.869L3.869 20.132M11.029 10.143q-.453-.516-.876-1.041l.575-.574a1.55 1.55 0 00.114-2.181L9.292 4.8a1.548 1.548 0 00-2.181.115l-.944.943a2.384 2.384 0 00-.444 2.926A30.318 30.318 0 008.576 12.6M11.4 15.424a30.16 30.16 0 003.815 2.853 2.385 2.385 0 002.926-.443l.943-.944a1.549 1.549 0 00.115-2.182l-1.55-1.549a1.549 1.549 0 00-2.18.114l-.574.574q-.525-.42-1.042-.876"
    />
  );

export default SvgPhoneOff;
