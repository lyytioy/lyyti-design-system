import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M18.32 9.391a.25.25 0 00-.333.236v2.121a.5.5 0 11-1 0v-2.5a1.619 1.619 0 00-1.5-1h-.25a.25.25 0 00-.25.25v2.25a.5.5 0 01-1 0v-2.5a1.619 1.619 0 00-1.5-1h-.25a.25.25 0 00-.25.25v3.25a.5.5 0 01-1 0v-8a2 2 0 00-4 0l.026 13.594a.5.5 0 01-1 0v-4.817a.249.249 0 00-.384-.211 3.483 3.483 0 00-1.616 2.934v2.843a4.53 4.53 0 001.319 3.181L7.058 22v.713a.5.5 0 00.5.5l9.554.037a1 1 0 00.961-.725l1.518-5.292a10.778 10.778 0 00.4-2.883v-2.6a2.5 2.5 0 00-1.671-2.359z" />
  );

export default SvgCursorHand;
