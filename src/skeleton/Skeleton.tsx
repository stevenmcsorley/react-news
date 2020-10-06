import React, {FunctionComponent} from "react";
import Skeleton from "react-loading-skeleton";
interface ConfigProps{
  count:number
  grid:number
}


  const SkeletonCard: FunctionComponent<ConfigProps> = ({
    count,
    grid
  }) => {

  return (

    <div className={`dev-grid-wrapper__article--column--${grid}`}>
      {Array(count)
        .fill(0)
        .map((item, index) => (
          <article className="position-relative">
          <div className="dev-card-base dev-flex-column" key={index}>
            <div className="dev-card-base__body dev-card-base__body--grow dev-u-padding-default">
              <Skeleton height={200} />
            </div>

            <div className="card-channel dev-u-padding-default">
              <Skeleton width={`100%`} height={40} />
            </div>
          </div>
          </article>
        ))}
    </div>
  );
};
export default SkeletonCard;
