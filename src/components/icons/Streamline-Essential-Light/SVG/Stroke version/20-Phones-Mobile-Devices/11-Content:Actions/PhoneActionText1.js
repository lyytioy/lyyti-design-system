import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionText1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-text-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-text-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M9 21.25"
    />,
    <path
      className="phone-action-text-1_svg__a"
      d="M15.5 15.5v6a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h3"
    />,
    <rect
      className="phone-action-text-1_svg__a"
      x={9.5}
      y={0.5}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-action-text-1_svg__a"
      d="M12.5 3.5h6M12.5 6.5h6M12.5 9.5h2.25"
    />
  );

export default SvgPhoneActionText1;
