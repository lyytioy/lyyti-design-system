import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocialProfileAvatar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M4.5 23.25v-6.265A9.365 9.365 0 0110.875.75c7.5 0 8.823 6.5 11.625 13.5h-3v3a3 3 0 01-3 3H15v3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgSocialProfileAvatar;
