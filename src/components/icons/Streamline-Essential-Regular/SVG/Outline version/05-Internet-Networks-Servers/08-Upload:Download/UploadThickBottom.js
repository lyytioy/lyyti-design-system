import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadThickBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.75 16.757c-.827 0-1.5-.673-1.5-1.5v-6H5.251a.749.749 0 01-.53-1.281l6.749-6.75c.137-.137.33-.215.53-.215s.394.078.53.215l6.751 6.75a.75.75 0 01-.53 1.281H15.75v6c0 .827-.673 1.5-1.5 1.5h-4.5zm-.75-9a.75.75 0 01.75.75v6.75h4.5v-6.75a.75.75 0 01.75-.75h1.94L12 2.817l-4.938 4.94H9z" />,
    <path d="M2.251 22.757a2.252 2.252 0 01-2.25-2.25v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3a2.252 2.252 0 01-2.25 2.25h-19.5z" />
  );

export default SvgUploadThickBottom;
