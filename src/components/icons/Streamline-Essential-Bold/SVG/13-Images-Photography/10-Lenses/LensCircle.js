import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.9 17.5a7.97 7.97 0 012.711-5.986.251.251 0 00-.126-.435A6.274 6.274 0 006.5 11a6.5 6.5 0 000 13 6.274 6.274 0 00.985-.079.25.25 0 00.126-.435A7.97 7.97 0 014.9 17.5z" />,
    <path d="M13 11a6.5 6.5 0 106.5 6.5A6.508 6.508 0 0013 11zm0 10.9a4.4 4.4 0 114.4-4.4 4.4 4.4 0 01-4.4 4.4zM23.25 6.5a.75.75 0 00.016-1.5C20.309 4.937 18.992 3.63 19 .763V.752A.749.749 0 0018.253 0a.75.75 0 00-.75.747c-.01 2.9-1.324 4.211-4.261 4.252a.75.75 0 00.011 1.5h.012c2.905 0 4.212 1.313 4.238 4.257a.75.75 0 00.734.743h.016a.75.75 0 00.747-.711c.145-2.925 1.485-4.288 4.218-4.288h.032z" />
  );

export default SvgLensCircle;