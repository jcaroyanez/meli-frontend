import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './SkeletionList.scss';

export const WraperCardList = () => {
  return (
    <div className="wraper-skeleton-card">
      <Skeleton className="wraper-skeleton-card__img" />
      <div>
        <Skeleton style={{ width: 150 }} />
        <Skeleton style={{ width: 400 }} />
      </div>
    </div>
  );
};

export const SkeletonList = () => {
  return (
    <div className="content-skeleton">
      <Skeleton wrapper={WraperCardList} count={4} />
    </div>
  );
};
