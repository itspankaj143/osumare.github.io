import React from 'react'
import image from '../../assets/Logo.png'
import './Header.css'
import house from '../../assets/Headerimage.png'

const Header = () => {
	return (
		<>
			<nav>
				<img src={image} alt='' />
				<button>Contact Us</button>
			</nav>
			<div className='bghouse'>
				<div className='header'>
					<h3>
						Elevate <span>Real Estate Success</span> with Osumare's Digital
						Expertise
					</h3>
					<p>
						Tailored Solutions for Thriving in the Digital Real Estate Landscape
					</p>
					<button>Get started</button>
				</div>
				<div className='house'>
					<img src={house} alt='houseimage' />
				</div>
			</div>
		</>
	)
}

export default Header
