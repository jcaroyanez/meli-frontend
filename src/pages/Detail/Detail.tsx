import { useParams } from 'react-router-dom';
import { useDetail } from '../../hooks/items';
import SkeletonDetailItem from '../../components/Detail/SkeletonDetailItem/SkeletonDetailItem';
import { DetailItem } from '../../components/Detail/DetailItem/DetailItem';

export const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useDetail(id as string);

  return isLoading ? <SkeletonDetailItem /> : <DetailItem {...data?.item} />;
};
