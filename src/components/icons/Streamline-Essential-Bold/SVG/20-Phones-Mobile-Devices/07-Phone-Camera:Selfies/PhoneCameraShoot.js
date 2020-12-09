import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneCameraShoot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M18.75 3h-.25a.25.25 0 00-.25.25v2.525a.25.25 0 00.2.245 1 1 0 01.8.98v12.5a1 1 0 01-1 1h-9a1 1 0 01-1-1V8.75A.25.25 0 008 8.5H6.5a.25.25 0 00-.25.25V21.5a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5v-16a2.5 2.5 0 00-2.5-2.5z" />,
    <circle cx={7.75} cy={5.5} r={1.5} />,
    <circle cx={11.75} cy={5.5} r={1.5} />,
    <path d="M9.75 3.25a.75.75 0 00.75-.75V.75a.75.75 0 00-1.5 0V2.5a.75.75 0 00.75.75zM12.97 3.28a.749.749 0 001.06 0l.75-.75a.75.75 0 00-1.06-1.06l-.75.75a.749.749 0 000 1.06zM6.53 2.22l-.75-.75a.75.75 0 00-1.06 1.06l.75.75a.75.75 0 101.06-1.06zM4.75 4.75H3.5a.75.75 0 000 1.5h1.25a.75.75 0 000-1.5zM16 4.75h-1.25a.75.75 0 000 1.5H16a.75.75 0 000-1.5z" />
  );

export default SvgPhoneCameraShoot;
