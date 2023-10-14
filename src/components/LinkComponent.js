import React from "react";
import LinkIcon from "@mui/icons-material/Link";

const LinkComponent = () => {
  return (
    <div className="max-w-xs w-fit bg-gray-100 h-fit rounded-xl p-2 flex flex-row items-center cursor-pointer">
      <LinkIcon className="text-blue-500 -rotate-45" fontSize="large" />
      <h2 className="text-blue-500 uppercase text-3xl font-roboto-condensed">
        Challenge Link
      </h2>
    </div>
  );
};

export default LinkComponent;
