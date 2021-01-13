import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskHeartDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm0-22a.5.5 0 00-.5.5v20a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2z" />,
    <path d="M14 21a.503.503 0 01-.361-.154l-5.114-5.335a3.534 3.534 0 01-1.005-2.875L4.525 9.514a3.514 3.514 0 01-.653-4.062 3.51 3.51 0 013.159-1.948 3.517 3.517 0 012.488 1.032l.481.479.482-.482a3.501 3.501 0 012.493-1.031c.943 0 1.828.366 2.493 1.031a3.527 3.527 0 01.85 3.609.5.5 0 11-.948-.316 2.507 2.507 0 00-.136-1.929 2.488 2.488 0 00-.473-.656c-.476-.476-1.111-.739-1.786-.739s-1.31.262-1.786.738l-.835.835a.496.496 0 01-.707.001l-.835-.832a2.525 2.525 0 10-3.572 3.57l2.597 2.707.035-.072a3.51 3.51 0 013.159-1.948c.549 0 1.078.125 1.572.372.339.17.647.392.916.66l.481.482.481-.481c.665-.665 1.551-1.031 2.494-1.031s1.828.366 2.493 1.031a3.527 3.527 0 01-.001 4.985l-5.107 5.328A.502.502 0 0114 21zm-2.97-10.499c-.966 0-1.833.535-2.264 1.396a2.522 2.522 0 00.474 2.915L14 19.777l4.753-4.958a2.524 2.524 0 10-3.565-3.578l-.835.835a.503.503 0 01-.708 0l-.835-.835a2.55 2.55 0 00-.656-.473 2.483 2.483 0 00-1.124-.267z" />
  );

export default SvgMaskHeartDouble;