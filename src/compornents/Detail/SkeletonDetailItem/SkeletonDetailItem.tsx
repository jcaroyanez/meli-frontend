import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './SkeletonDetailItem.scss'

const SkeletonDetailItem = () => {
    return (
      <div className='content-skeleton-detail'>
        <Skeleton style={{ width: 550, height: 500 }} />
        <div>
          <Skeleton style={{ width: 200 }} />
          <Skeleton style={{ width: 250 }} />
          <Skeleton style={{ width: 250, height: 50, marginTop: 15 }} />
        </div>
      </div>
    )
}

export default SkeletonDetailItem
