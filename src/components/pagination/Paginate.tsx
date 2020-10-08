import React from "react";

interface PageProps {
  paginateForward?: any;
  paginateRewind?: any;
}

let pager = 1;
const Paginate = (props: PageProps) => {
  const pagechangeForward = () => {
    pager++;

    return props.paginateForward(pager);
  };

  const pagechangeRewind = () => {
    pager--;

    return props.paginateForward(pager);
  };

  return (
    <div>
      <button onClick={pagechangeRewind}>Previous</button> --
      <button onClick={pagechangeForward}>Next</button>
    </div>
  );
};

export default Paginate;
