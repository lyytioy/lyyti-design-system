import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.42.574a1.941 1.941 0 00-1.376-.568H1.959A1.958 1.958 0 00.012 1.965L0 9.306a15.147 15.147 0 0011.861 14.669 1 1 0 00.4 0A15.145 15.145 0 0023.988 9.2L24 1.953a1.938 1.938 0 00-.58-1.379zM18.289 15.32a1.455 1.455 0 01-1.233.686H6.944a1.455 1.455 0 01-1.233-.686 1.433 1.433 0 01-.048-1.409l5.056-9.634a1.45 1.45 0 012.562 0l5.056 9.634a1.433 1.433 0 01-.048 1.409z" />,
    <circle cx={12} cy={13.506} r={1} />,
    <path d="M12 11.756a.75.75 0 00.75-.75v-3a.75.75 0 00-1.5 0v3a.75.75 0 00.75.75z" />
  );

export default SvgShieldWarning;
