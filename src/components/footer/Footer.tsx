import React from "react";

const Footer = () => {
	return (
		<footer className=' bg-grey'>
			<div className='container mx-auto p-5 '>
				<div className='flex justify-around p-5'>
					<ul>
						<h3 className='text-base font-bold mb-4 uppercase'>Info</h3>

						<li className='font-light text-sm mb-1 cursor-pointer'>
							My account
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>Shipping</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>
							Return/Exchange Policy
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>
							Privacy Policy
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>
							Contact us
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>FAQ</li>
					</ul>
					<ul>
						<h3 className='text-base font-bold mb-4 uppercase'>About us</h3>

						<li className='font-light text-sm mb-1 cursor-pointer'>
							Store location
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>
							Customer Care
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>
							Company Profile
						</li>
					</ul>
					<ul>
						<h3 className='text-base font-bold mb-4 uppercase'>Follow Us on</h3>

						<li className='font-light text-sm mb-1 cursor-pointer'>Facebook</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>
							Instagram
						</li>
						<li className='font-light text-sm mb-1 cursor-pointer'>Twitter</li>
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
