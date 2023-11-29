/** @format */

import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'

const Footer = () => {
	return (
		<>
			<div className='Footer'>
				<div className='os1'>
					<div className='s1'>
						<img src={logo} alt='logo' />
						<p>
							The best digital marketing agency in Pune with a proven track
							record of consistently delivering quality service.
						</p>
					</div>
					<div className='s2'>
						<h4>Address</h4>
						<p>
							Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
							Maharastra, India.
						</p>
					</div>
					<div className='s3'>
						<h4>Contacts</h4>
						<p>
							<i class='bx bxs-envelope'></i> hello@osumare.in
						</p>
						<p>
							<i class='bx bxs-phone'></i> +91 8459 8762 26
						</p>
					</div>
				</div>
				<div className='os2'>
					<h4>Menu</h4>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Services</li>
						<li>Work</li>
						<li>Blog</li>
						<li>Career</li>
					</ul>
				</div>
				<div className='os3'>
					<h4>Social</h4>
					<div className='s1'>
						<i class='bx bxl-facebook-circle'></i>
						<i class='bx bxl-instagram-alt'></i>
						<i class='bx bxl-whatsapp'></i>
						<i class='bx bxl-youtube'></i>
						<i class='bx bxl-pinterest'></i>
						<i class='bx bxl-xing'></i>
					</div>
				</div>
			</div>
			<p className='endofproject'>© 2023 Osumare. All rights reserved.</p>
		</>
	)
}

export default Footer
