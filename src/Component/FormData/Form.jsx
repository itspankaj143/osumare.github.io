/** @format */

import React from 'react'
import './Form.css'

const FormData = () => {
	return (
		<>
			<div className='form-header'>
				<h3>Connect with Our Digital Marketing Experts</h3>
				<p>
					Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
					Elevate Your Online Presence Together
				</p>
			</div>
			<div className='btn'>
				<div className='sub-form'>
					<form action='' className='main_input'>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter your name'
						/>
						<label htmlFor='phone'>Phone:</label>
						<input
							type='text'
							name='phone'
							id='phone'
							placeholder='Enter your number'
						/>
						<label htmlFor='email'>Email:</label>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter your name'
						/>
					</form>
					<form action='' className='Message'>
						<label htmlFor='message' className='message'>
							Message:
						</label>
						<textarea
							name='message'
							id='message'
							cols='40'
							rows='12'
							placeholder='Enter Your Message'
						></textarea>
					</form>
				</div>
				<button>Get Started</button>
			</div>
		</>
	)
}

export default FormData
