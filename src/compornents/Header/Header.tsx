import { Link } from 'react-router-dom'
import './Header.scss'
import { Container } from '../../shared/Container/Container';

export const Header = ({ children }: { children: JSX.Element}) => {
    return (
      <header className='header'>
        <Container className='container-header'>
          <div className='header-content'>
            <Link
              to='/' 
							className='header-content-link__logo'
							aria-label='Ir a la pagina principal'
              title='logo'
            />
            {children}
          </div>
        </Container>
      </header>
    )
}