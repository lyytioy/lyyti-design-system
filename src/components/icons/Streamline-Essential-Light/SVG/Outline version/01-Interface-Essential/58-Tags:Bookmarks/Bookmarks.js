import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookmarks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.801 23.757a.739.739 0 01-.285-.056c-.155-.064-.516-.286-.516-.96v-21c0-.827.673-1.5 1.5-1.5h11c.827 0 1.5.673 1.5 1.5v21c0 .674-.361.896-.516.96a.746.746 0 01-.285.056c-.258 0-.514-.124-.759-.369L12 17.948l-5.439 5.439c-.246.246-.502.37-.76.37zM18 22.534V1.741a.5.5 0 00-.5-.5H16v19.293l2 2zM6.5 1.241a.5.5 0 00-.5.5v20.793l2-2V1.241H6.5zm5.5 15.5a.5.5 0 01.354.146L15 19.534V1.241H9v18.293l2.646-2.646a.496.496 0 01.354-.147z" />
  );

export default SvgBookmarks;
