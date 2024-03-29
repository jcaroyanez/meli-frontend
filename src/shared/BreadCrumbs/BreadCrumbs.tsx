import { Link } from 'react-router-dom';
import UICrightArrow from '../../components/uiCons/UICrightArrow/UICrightArrow';
import './BreadCrumbs.scss';

interface BreadCrumbsProps {
  categories: string[];
}
export const BreadCrumbs = ({ categories = [] }: BreadCrumbsProps) => {
  const lastIndex = categories?.length - 1;

  return (
    <nav>
      <ol className="nav-breadcrumbs">
        {categories?.map((category, index) => (
          <Link
            to={`/items?search=${category}`}
            key={index}
            className="nav-breadcrumbs__item"
          >
            <span className="nav-breadcrumbs__text">{category}</span>
            {lastIndex !== index && (
              <div className="nav-breadcrumbs__arrow">
                <UICrightArrow width={10} height={10} fill="#a9a9a9" />
              </div>
            )}
          </Link>
        ))}
      </ol>
    </nav>
  );
};
