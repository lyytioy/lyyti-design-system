import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgXml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 19.504c-.827 0-1.5-.673-1.5-1.5v-12c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-21zm0-14a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-21z" />,
    <path d="M8.5 15.504a.5.5 0 01-.448-.276L7 13.122l-1.053 2.105a.498.498 0 01-.671.224.5.5 0 01-.224-.671l1.388-2.776-1.387-2.776a.497.497 0 01.224-.671.497.497 0 01.67.223L7 10.886 8.053 8.78a.498.498 0 01.921.066.493.493 0 01-.027.382l-1.388 2.776 1.388 2.776a.5.5 0 01-.447.724zM13.5 15.504a.5.5 0 01-.5-.5v-3.882l-.553 1.106c-.082.164-.253.265-.447.265s-.365-.102-.447-.265L11 11.122v3.882a.5.5 0 01-1 0v-6a.499.499 0 01.947-.224L12 10.886l1.053-2.106a.504.504 0 01.564-.263.499.499 0 01.383.487v6a.5.5 0 01-.5.5zM16.5 15.5c-.827 0-1.5-.673-1.5-1.5V9a.5.5 0 011 0v5a.5.5 0 00.5.5h2a.5.5 0 010 1h-2z" />
  );

export default SvgXml;