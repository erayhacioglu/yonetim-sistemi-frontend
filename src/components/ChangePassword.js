import { useState } from 'react';

const Settings = () => {
	const [tab, setTab] = useState(0);
	return (
		<>
			<ul className='tab-menu'>
				<li
					className={`tab-menu-list ${tab === 0 ? 'active' : ''}`}
					onClick={() => setTab(0)}
				>
					Genel
				</li>
				<li
					className={`tab-menu-list ${tab === 1 ? 'active' : ''}`}
					onClick={() => setTab(1)}
				>
					Şifre Değiştirme
				</li>
			</ul>
			<div className='tab-page-container'>
				<div className={`tab-page ${tab === 0 ? 'active' : ''}`}>Genel</div>
				<div className={`tab-page ${tab === 1 ? 'active' : ''}`}>
					Şifre Değiştirme
				</div>
			</div>
		</>
	);
};

export default Settings;
