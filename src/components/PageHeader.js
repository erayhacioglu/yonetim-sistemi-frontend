import { Link } from 'react-router-dom';

const PageHeader = ({ pageTitle, btnIcon, btnName, btnLink, btnColor }) => {
	return (
		<div className='page-header'>
			<h3 className='page-title'>{pageTitle}</h3>
			<Link to={`${btnLink}`} className={`btn ${btnColor}`}>
				<i className={`${btnIcon}`} />
				<span>{btnName}</span>
			</Link>
		</div>
	);
};

export default PageHeader;
