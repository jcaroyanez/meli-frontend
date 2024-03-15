import { MAPPER_CONDITION } from '../../../definitions/constants'
import { ItemDetail } from '../../../definitions/model'
import { InfoPriceItem } from '../InfoPriceItem/InfoPriceItem'
import './DetailItem.scss'
import { Helmet } from 'react-helmet-async'

export const DetailItem = ({ title, picture, condition = '', price, soldquantity, description }: ItemDetail) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={title} />
			</Helmet>
			<div className='wraper-scroll'>
				<div className='content-detail'>
					<div className='content-detail__first-column'>
						<div className='content-detail__wraper-img'>
							<img className='content-detail__img' src={picture} alt={title} />
						</div>
						<div className='content-detail__info'>
							<InfoPriceItem
								title={title}
								condition={MAPPER_CONDITION[condition]}
								price={price}
								soldQuantity={soldquantity}
							/>
							<div className='content-detail__action'>
								<button className='content-detail__btn-buy'>Comprar</button>
							</div>
						</div>
					</div>
					<div className='content-detail__second-column'>
						<h2 className='content-detail__description-title'>Descripción del producto</h2>
						<p className='content-detail__description'>{description}</p>
					</div>
				</div>
			</div>
		</>
	)
}