import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.249 21a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.249 0h10.629c.601 0 1.165.234 1.59.658L17.34 3.53c.425.425.659.99.659 1.59v1.63a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219h-2.279l.37 2.964a2.702 2.702 0 01-.656 2.123 2.778 2.778 0 01-1.946.908c-.04.002-.079.002-.117.002a2.783 2.783 0 01-2.051-.899 2.721 2.721 0 01-.666-2.134L5.901 1.5H2.249a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h5.25a.75.75 0 010 1.5h-5.25zM7.022 4.649c-.043.342.064.686.291.944a1.29 1.29 0 00.941.404l.052-.001c.343-.013.66-.161.894-.414.22-.249.324-.59.281-.932L9.087 1.5H7.412l-.39 3.149z" />,
    <circle cx={8.249} cy={9.75} r={1.125} />,
    <circle cx={8.249} cy={13.5} r={1.125} />,
    <circle cx={8.249} cy={17.25} r={1.125} />,
    <path d="M23.249 24a.743.743 0 01-.53-.22L19.44 20.5a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.989 5.989 0 01-1.263 3.676l3.279 3.28a.752.752 0 01-.53 1.281zm-7.486-12.736c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z" />
  );

export default SvgZipFileSearch;