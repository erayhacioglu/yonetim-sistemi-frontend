import { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/auth/AuthContext';

const Sidebar = ({ sidebar }) => {
	const { pathname } = useLocation();
	const auth = useContext(AuthContext);
	console.log(auth);
	const isActive = (pn) => {
		if (pn === pathname) return 'active';
	};

	return (
		<div className={`sidebar ${sidebar ? 'active' : ''}`} style={{}}>
			<div className='sidebar-header'>
				<Link to='/' className='user-box'>
					<div className='user-photo'>
						<img
							src='https://i.pinimg.com/236x/ad/81/c1/ad81c1bcfdc18424447ea7cb1cc9e424.jpg'
							alt=''
							className='user-img'
						/>
					</div>
					<div className='user-text'>
						<h6 className='user-name'>{auth.state?.user.personalName}</h6>
						<p className='user-authority'>
							{auth.state?.user.personalAuthority}
						</p>
					</div>
				</Link>
			</div>
			<ul className='sidebar-menu'>
				{navLinks?.map((navLink, key) => (
					<Link
						key={key}
						to={`${navLink.path}`}
						className={`sidebar-link ${isActive(navLink.path)}`}
					>
						<div className='sidebar-link-icon'>
							<i className={`${navLink.icon}`} />
						</div>
						<div className='sidebar-link-text'>{navLink.label}</div>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;

const navLinks = [
	{
		label: 'Anasayfa',
		icon: 'fas fa-home',
		path: '/',
	},
	{
		label: 'Çeviri',
		icon: 'fas fa-exchange-alt',
		path: '/ceviri',
	},
	{
		label: 'Reçeteler',
		icon: 'fas fa-clipboard-list',
		path: '/receteler',
	},
	{
		label: 'Klinikler',
		icon: 'fas fa-hospital',
		path: '/klinikler',
	},
	{
		label: 'Personeller',
		icon: 'fas fa-hospital-user',
		path: '/personeller',
	},
	{
		label: 'Hastalar',
		icon: 'fas fa-users',
		path: '/hastalar',
	},
	{
		label: 'Randevular',
		icon: 'fas fa-calendar-alt',
		path: '/randevular',
	},
	{
		label: 'Hesaplar',
		icon: 'fas fa-calculator',
		path: '/hesaplar',
	},
	{
		label: 'Ödemeler',
		icon: 'fas fa-money-bill-alt',
		path: '/odemeler',
	},
	{
		label: 'İstatistikler',
		icon: 'fas fa-chart-bar',
		path: '/istatistikler',
	},
	{
		label: 'Ayarlar',
		icon: 'fas fa-cog',
		path: '/ayarlar',
	},
];
