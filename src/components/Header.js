import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ sidebar, setSidebar }) => {
	const [search, setSearch] = useState('');
	const [notification, setNotification] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	return (
		<header className='header'>
			<button className='header-btn' onClick={() => setSidebar(!sidebar)}>
				<i className='fas fa-bars' />
			</button>
			<div className='search-form'>
				<input
					type='search'
					className='search-input'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Ara...'
				/>
				<Link
					to={`/arama?q=${search}`}
					className='search-btn'
					style={{ pointerEvents: `${search ? 'auto' : 'none'}` }}
				>
					Ara
				</Link>
			</div>
			<div className='header-right'>
				<div
					className='notification-box'
					onClick={() => setNotification(!notification)}
				>
					<div className='notification'>
						<i className='fas fa-bell' />
						<span className='notification-count'>99</span>
					</div>
					<div
						className={`notification-dropdown ${notification ? 'active' : ''}`}
					>
						<div className='notification-dropdown-title'>Bildirimler</div>
						<ul className='notification-dropdown-menu'>
							<li className='notification-dropdown-menu-list'>
								<Link to='/' className='notification-dropdown-menu-link'></Link>
							</li>
						</ul>
						<div className='notification-dropdown-bottom'>
							<button className='notification-delete-btn'>
								Tümünü Temizle
							</button>
						</div>
					</div>
				</div>
				<div className='user-box'>
					<div className='user-photo' onClick={() => setDropdown(!dropdown)}>
						<img src='' alt='' className='user-img' />
					</div>
					<ul className={`user-dropdown ${dropdown ? 'active' : ''}`}>
						<li className='user-dropdown-list'>
							<h3>Eray Hacıoğlu</h3>
							<h5>Admin</h5>
						</li>
						<li className='user-dropdown-list'>
							<Link to='/profil' className='user-dropdown-link'>
								<i className='fas fa-user' />
								Profil
							</Link>
						</li>
						<li className='user-dropdown-list'>
							<Link to='/ayarlar' className='user-dropdown-link'>
								<i className='fas fa-cog' />
								Ayarlar
							</Link>
						</li>
						<li className='user-dropdown-list'>
							<Link to='/' className='user-dropdown-link'>
								<i className='fas fa-sign-out-alt' />
								Çıkış
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
