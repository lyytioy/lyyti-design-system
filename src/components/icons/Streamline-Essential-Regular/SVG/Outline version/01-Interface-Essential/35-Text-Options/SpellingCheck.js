import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpellingCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.25 16.498a.75.75 0 01-.75-.75v-5.25H3v5.25a.75.75 0 01-1.5 0v-10.5c0-2.895 2.355-5.25 5.25-5.25S12 2.353 12 5.248v10.5a.75.75 0 01-.75.75zm-.75-7.5v-3.75c0-2.068-1.682-3.75-3.75-3.75S3 3.18 3 5.248v3.75h7.5zM12.749 23.998c-.401 0-.777-.156-1.06-.44l-2.999-3a.744.744 0 010-1.06.744.744 0 011.06 0l3 3 8.303-8.304a.75.75 0 011.447.278v.086c0 .198-.08.391-.22.53l-8.47 8.47c-.283.284-.66.44-1.061.44z" />
  );

export default SvgSpellingCheck;
