import React from "react";

interface PageProps {
  paginateForward?: any;
  paginateRewind?: any;
  paginationLive?: any;
}

const Paginate = (
  props: PageProps,
  {
    paginateForward,
    paginateRewind,
  }: { paginateForward: number; paginateRewind: number }
) => {
  let curr = props.paginationLive.currentPage;

  const pagechangeForward = () => {
    return props.paginateForward(curr);
  };

  const pagechangeRewind = () => {
    return props.paginateRewind(curr);
  };

  return (
    <div>
      <p>
        {props.paginationLive.startIndex} to{" "}
        {props.paginationLive.startIndex + props.paginationLive.pageSize - 1} of{" "}
        {props.paginationLive.total} Results
      </p>
      <button className="dev-btn" onClick={pagechangeRewind}>
        Previous
      </button>
      <button className="dev-btn" onClick={pagechangeForward}>
        Next
      </button>
      <p>
        {props.paginationLive.currentPage} of {props.paginationLive.pages} Pages
      </p>
    </div>
  );
};

export default Paginate;
