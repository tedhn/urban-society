import React from "react";

const Footer = () => {
	return (
		<footer className=' bg-grey '>
			<div className='container mx-auto p-5 '>
				<div className='flex justify-around p-5'>
					<ul>
						<h3 className='px-2 text-base font-bold uppercase'>Info</h3>

						<li className='footer-link'>
							My account
						</li>
						<li className='footer-link'>
							Shipping
						</li>
						<li className='footer-link'>
							Return/Exchange Policy
						</li>
						<li className='footer-link'>
							Privacy Policy
						</li>
						<li className='footer-link'>
							Contact us
						</li>
						<li className='footer-link'>
							FAQ
						</li>
					</ul>
					<ul>
						<h3 className='px-2 text-base font-bold uppercase'>About us</h3>

						<li className='footer-link'>
							Store location
						</li>
						<li className='footer-link'>
							Customer Care
						</li>
						<li className='footer-link'>
							Company Profile
						</li>
					</ul>
					<ul>
						<h3 className='px-2 text-base font-bold uppercase'>Follow Us on</h3>

						<li className='footer-link'>
							Facebook
						</li>
						<li className='footer-link'>
							Instagram
						</li>
						<li className='footer-link'>
							Twitter
						</li>
					</ul>
				</div>
				<p className='font-light text-xs text-center'>
					Powered by Urban Society
				</p>
			</div>
		</footer>
	);
};

export default Footer;
