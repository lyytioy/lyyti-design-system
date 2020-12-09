import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLike = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M.75 21.75v-10.5h1.5a7.5 7.5 0 007.5-7.5V3a2.25 2.25 0 014.5 0v3.75a1.5 1.5 0 001.5 1.5h3a4.5 4.5 0 014.477 4.95l-.465 4.649a6 6 0 01-5.97 5.4h-6.2a6.006 6.006 0 01-1.648-.231l-3.636-1.037a6.006 6.006 0 00-1.648-.231H.75"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgLike;
