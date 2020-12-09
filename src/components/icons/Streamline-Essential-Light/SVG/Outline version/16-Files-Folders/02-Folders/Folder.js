import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.286 19.5A1.788 1.788 0 012.5 17.714V6.286c0-.985.801-1.786 1.786-1.786h3.432c.405 0 .799.167 1.08.459l1.341 1.387a.505.505 0 00.361.154H20c.827 0 1.5.673 1.5 1.5v9.714c0 .985-.801 1.786-1.786 1.786H4.286zm0-14a.787.787 0 00-.786.786v11.428c0 .433.353.786.786.786h15.428a.787.787 0 00.786-.786V8a.5.5 0 00-.5-.5h-9.5c-.405 0-.799-.167-1.08-.459L8.079 5.654a.505.505 0 00-.361-.154H4.286z" />
  );

export default SvgFolder;
