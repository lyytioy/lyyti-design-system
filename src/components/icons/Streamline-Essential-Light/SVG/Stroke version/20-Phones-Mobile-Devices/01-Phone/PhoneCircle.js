import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-circle_svg__a"
      d="M10.227 9.028a1.55 1.55 0 00.115-2.181L8.792 5.3a1.548 1.548 0 00-2.181.115l-.944.943a2.383 2.383 0 00-.444 2.926 30.614 30.614 0 009.5 9.5 2.384 2.384 0 002.925-.443l.944-.944a1.549 1.549 0 00.114-2.182l-1.549-1.549a1.549 1.549 0 00-2.18.114l-.575.574A31.261 31.261 0 019.653 9.6z"
    />,
    <path
      className="phone-circle_svg__a"
      d="M18 18c.5.5 1.56 5.5-6 5.5a11.5 11.5 0 119.488-5"
    />
  );

export default SvgPhoneCircle;
