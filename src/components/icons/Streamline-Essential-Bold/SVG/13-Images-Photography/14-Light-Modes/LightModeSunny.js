import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeSunny = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={12} r={3.75} />,
    <path d="M6.25 12a1 1 0 00-1-1H1a1 1 0 000 2h4.25a1 1 0 001-1zM6.793 8.207a1 1 0 001.414-1.414l-1.5-1.5a1 1 0 00-1.414 1.414zM12 17.75a1 1 0 00-1 1V23a1 1 0 002 0v-4.25a1 1 0 00-1-1zM6.793 15.793l-1.5 1.5a1 1 0 001.414 1.414l1.5-1.5a1 1 0 00-1.414-1.414zM23 11h-4.25a1 1 0 000 2H23a1 1 0 000-2zM17.207 15.793a1 1 0 00-1.414 1.414l1.5 1.5a1 1 0 001.414-1.414zM12 6.25a1 1 0 001-1V1a1 1 0 00-2 0v4.25a1 1 0 001 1zM17.207 8.207l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a1 1 0 001.414 1.414z" />
  );

export default SvgLightModeSunny;
