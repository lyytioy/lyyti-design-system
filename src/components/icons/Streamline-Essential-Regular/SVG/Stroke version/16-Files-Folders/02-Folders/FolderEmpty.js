import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M20.25 9.75v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v16.3a1.7 1.7 0 003.336.438l2.351-9.657A1.5 1.5 0 017.879 9.75H21.75a1.5 1.5 0 011.45 1.886l-2.2 9a1.5 1.5 0 01-1.45 1.114H2.447"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgFolderEmpty;
