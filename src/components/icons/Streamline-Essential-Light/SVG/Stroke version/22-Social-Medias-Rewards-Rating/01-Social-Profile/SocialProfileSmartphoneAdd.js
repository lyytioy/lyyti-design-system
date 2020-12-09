import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileSmartphoneAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".social-profile-smartphone-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="social-profile-smartphone-add_svg__a"
      x={4}
      y={0.5}
      width={16}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="social-profile-smartphone-add_svg__a"
      d="M20 4.5H4M20 19.5H4M10 2.5h4M15.377 16.026c-.386-.6-1.668-1.03-3.273-1.624-.453-.169-.379-1.351-.178-1.572a3.338 3.338 0 00.87-2.591 2.072 2.072 0 00-2.12-2.265 2.073 2.073 0 00-2.121 2.265 3.338 3.338 0 00.87 2.591c.2.221.275 1.4-.178 1.572C7.642 15 6.36 15.43 5.974 16.026M14.5 9.5h3M16 8v3"
    />
  );

export default SvgSocialProfileSmartphoneAdd;
