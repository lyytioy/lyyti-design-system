import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21 17.5a1.5 1.5 0 01-1.5-1.5v-4.862A7.957 7.957 0 0013 3.073V1a1 1 0 00-2 0v2.073a7.957 7.957 0 00-6.5 8.065V16A1.5 1.5 0 013 17.5a1 1 0 000 2h18a1 1 0 000-2zM14.236 21H9.764a.25.25 0 00-.248.222 2.319 2.319 0 00-.016.278 2.5 2.5 0 105 0 2.319 2.319 0 00-.016-.278.248.248 0 00-.248-.222z" />
  );

export default SvgAlarmBell;
