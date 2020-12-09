import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={8.25} r={2.75} />,
    <path d="M22.5 4.5A2.5 2.5 0 0020 2h-3.086a.5.5 0 01-.353-.146L15.146.44a1.507 1.507 0 00-1.06-.44H9.914a1.507 1.507 0 00-1.06.44L7.439 1.854A.5.5 0 017.086 2H4a2.5 2.5 0 00-2.5 2.5v8A2.5 2.5 0 004 15h3.021a.251.251 0 01.227.145l3.857 8.3a1 1 0 001.8-.014l3.852-8.289a.251.251 0 01.222-.142H20a2.5 2.5 0 002.5-2.5zm-5.75 3.75A4.75 4.75 0 1112 3.5a4.756 4.756 0 014.75 4.75z" />
  );

export default SvgCameraSettingsPin;
