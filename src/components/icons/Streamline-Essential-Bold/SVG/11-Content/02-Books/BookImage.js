import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.15 4.04a.5.5 0 01-.4-.489V2a2 2 0 00-2-2H5.25a3 3 0 00-3 3v18a3 3 0 003 3h14.5a2 2 0 002-2V6a2 2 0 00-1.6-1.96zM4.25 3a1 1 0 011-1H17.5a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25H5.25a1 1 0 01-1-1zM18.5 18a1.752 1.752 0 01-1.75 1.75h-9A1.752 1.752 0 016 18V9.5a1.752 1.752 0 011.75-1.75h9A1.752 1.752 0 0118.5 9.5z" />,
    <circle cx={9} cy={10.75} r={1.5} />,
    <path d="M14.451 12.034a.5.5 0 00-.893-.018l-1.74 3.284a.251.251 0 01-.409.048l-1.033-1.18A.491.491 0 009.963 14a.5.5 0 00-.383.227l-2.25 3.5a.5.5 0 00.42.771h9a.5.5 0 00.451-.716z" />
  );

export default SvgBookImage;
