import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCode1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-code-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="phone-action-code-1_svg__a" cx={15} cy={6.5} r={6} />,
    <path
      className="phone-action-code-1_svg__a"
      d="M13.5 5L12 6.5 13.5 8M16.5 5L18 6.5 16.5 8M15 19.5H2M8.5 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-action-code-1_svg__a"
      d="M15 15v6.5a2 2 0 01-2 2H4a2 2 0 01-2-2v-19a2 2 0 012-2h5"
    />
  );

export default SvgPhoneActionCode1;
