import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z" />,
    <path d="M16.687 17.438a.743.743 0 01-.53-.22L11.47 12.53a.74.74 0 01-.163-.245l-.009-.025a.737.737 0 01-.047-.26V8.25a.75.75 0 011.5 0v3.439l4.467 4.468a.744.744 0 010 1.06.752.752 0 01-.531.221z" />
  );

export default SvgTimeClockCircle;
