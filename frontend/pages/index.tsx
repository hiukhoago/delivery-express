import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default';

import register from '../assets/images/home/register.jpeg'
import intergration from '../assets/images/home/integration.jpeg'

import download from '../assets/images/home/download.png'
import driver from '../assets/images/home/driver.jpeg'
import tick from '../assets/images/home/tick.png'
import time from '../assets/images/home/time.png'
import cash from '../assets/images/home/cash.png'
import new1 from '../assets/images/news/1.jpeg'
import QrCode from '../components/qrcode';
import Banner from '../components/layouts/client/banner';

export default function Home() {

	

	return (
		<>
			<Banner />

			<div className='mt-20 bg-white'>
				<div className='max-w-7xl px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0 text-center'>
					<h2 className='max-w-2xl mx-auto font-bold text-gray-700'>
						Delivery Express là siêu phẩm giao hàng cho riêng bạn
					</h2>
					<div className='max-w-xl mx-auto my-10 text-lg leading-7 text-black font-medium'>
						Mang đến giải pháp ho&agrave;n hảo cho mọi nhu cầu giao h&agrave;ng của bạn nhờ công nghệ đột phá &mdash; tất cả trong một ứng dụng duy nhất.
					</div>
					<div className='mt-6'>
						<div className='grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-0'>
							<div className='rounded-2xl px-4  hover:bg-blue-100 drop-shadow py-10'>
								<div className=''>
									<div>
										<span className='justify-center items-center inline-flex'>
											<svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#AhaDelivery_svg__a)"><path opacity="0.5" d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#64C3DF"></path><mask id="AhaDelivery_svg__b"  maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#0085BC"></path></mask><g mask="url(#AhaDelivery_svg__b)"><path d="M71.334 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50c-27.615 0-50 22.386-50 50s22.385 50 50 50Z" fill="url(#AhaDelivery_svg__c)"></path></g><path d="m54.136 50-5.454-5.454L43.227 50V35.455h10.91V50ZM68.486 58.102 49.223 54.22a3.666 3.666 0 1 0-2.707 6.814l10.45 5.447-10.668 4.189s-2.848.161-23.49-13.036a3.665 3.665 0 1 0-3.95 6.176c1.05.67 23.25 19.428 29.534 19.428 6.284 0 27.23-8.379 27.23-8.379V53.913l-7.136 4.19Z" fill="#FFD8BF"></path><path d="M71.239 56.426v-23.46H25.157v26.282C43.483 70.81 46.103 70.67 46.103 70.67l12.434-4.782c7.882-6.989 4.79-4.713 12.702-9.462Z" fill="url(#AhaDelivery_svg__d)"></path><path d="M25.157 32.966 30.393 20.4h34.562l6.284 12.567H25.156Z" fill="url(#AhaDelivery_svg__e)"></path><path d="M84.001 49.724h-8.378v29.325h8.378V49.724Z" fill="#142246"></path><path d="M42.109 32.966 44.203 20.4h8.379l2.095 12.567H42.109ZM69.8 57.331l-1.314.771-19.262-3.882a3.666 3.666 0 1 0-2.708 6.813l10.45 5.448-10.668 4.189s-2.848.161-23.49-13.036a3.666 3.666 0 1 0-3.95 6.176c.903.576 17.435 14.516 26.05 18.414L69.8 57.33Z" fill="#FFF2E8"></path><path d="M48.81 54.888a2.004 2.004 0 0 0-2.557 2.55c.192.547.612.985 1.153 1.198l.482.192 1.59-3.705-.669-.235Z" fill="#fff"></path></g><defs><linearGradient id="AhaDelivery_svg__c" x1="33.834" y1="52.083" x2="94.25" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="AhaDelivery_svg__d" x1="36.477" y1="48.383" x2="64.046" y2="75.34" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#DD4100"></stop></linearGradient><linearGradient id="AhaDelivery_svg__e" x1="36.477" y1="25.538" x2="42.091" y2="42.007" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><clipPath id="AhaDelivery_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath></defs></svg></span>
										<div className='text-xl leading-12 text-black font-semibold'>
											Giao h&agrave;ng
										</div>
										<p className='text-base leading-6 text-black font-medium'>
											Giao h&agrave;ng nhanh, đảm bảo v&agrave; giá tốt với dịch vụ ph&ugrave; hợp được tối ưu cho bạn.
										</p>
									</div>
								</div>
							</div>
							<div className='rounded-2xl px-4  hover:bg-blue-100 drop-shadow py-10'>
								<div className=''>
									<div>
										<span className='justify-center items-center inline-flex'>
											<svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#AhaTruck_svg__a)"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="AhaTruck_svg__b"  maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#AhaTruck_svg__b)"><path d="M71.333 143.75c27.615 0 50-22.386 50-50s-22.385-50-50-50c-27.614 0-50 22.386-50 50s22.386 50 50 50Z" fill="url(#AhaTruck_svg__c)"></path></g></g><g clipPath="url(#AhaTruck_svg__d)"><path d="M76.247 36.98H61.158v27.348h24.723v-12.31l-2.884-9.964a7.027 7.027 0 0 0-6.75-5.074Z" fill="#435A96"></path><path d="m82.273 51.894-2.57-8.883a3.616 3.616 0 0 0-3.454-2.596H64.594v11.479h17.679Z" fill="#84DBFF"></path><path d="M82.276 51.888H64.588V40.41l17.688 11.478Z" fill="#F1F8FF"></path><path d="m82.273 51.894-2.57-8.883a3.616 3.616 0 0 0-3.454-2.596H64.594l17.679 11.479Z" fill="#fff"></path><path d="M18.529 23.251h38.064a4.568 4.568 0 0 1 4.566 4.567v36.51H13.962v-36.51a4.567 4.567 0 0 1 4.567-4.567Z" fill="url(#AhaTruck_svg__e)"></path><path d="M87.04 64.328v5.16H13.968v-5.16h7.626a10.444 10.444 0 0 1 9.134-5.359c3.913 0 7.338 2.162 9.134 5.359h24.54a10.417 10.417 0 0 1 9.117-5.359c3.928 0 7.337 2.162 9.134 5.359h4.385Z" fill="#142246"></path><path d="M80.813 69.456a7.293 7.293 0 0 1-7.293 7.293 7.29 7.29 0 0 1-7.29-7.293 7.292 7.292 0 1 1 14.583 0Z" fill="#121619"></path><path d="M76.45 69.455a2.93 2.93 0 0 1-5.86 0 2.93 2.93 0 0 1 5.86 0Z" fill="#435A96"></path><path d="M38.015 69.456a7.294 7.294 0 1 1-14.588-.002 7.294 7.294 0 0 1 14.588.002Z" fill="#121619"></path><path d="M33.652 69.455a2.93 2.93 0 1 1-5.86 0 2.93 2.93 0 0 1 5.86 0Z" fill="#435A96"></path></g><mask id="AhaTruck_svg__g"  maskUnits="userSpaceOnUse" x="13" y="23" width="49" height="42"><path d="M18.529 23.25h38.064a4.568 4.568 0 0 1 4.567 4.568v36.51H13.962v-36.51a4.567 4.567 0 0 1 4.567-4.567Z" fill="url(#AhaTruck_svg__f)"></path></mask><g mask="url(#AhaTruck_svg__g)"><path opacity="0.8" d="m42.723 53.9-6.621-18.094c-1.103-3.01-3.977-5.105-7.198-5.035a8.095 8.095 0 0 0-6.75 3.887l-.974 1.669h-.003l-.22.381h-5.263c-.734 0-1.33.593-1.33 1.323s.596 1.322 1.33 1.322h3.72l-.004.006h.563c.787 0 1.423.632 1.423 1.415 0 .782-.636 1.414-1.423 1.414h-2.212l-.003.003H7.6a1.321 1.321 0 0 0-1.33 1.317c0 .73.596 1.323 1.33 1.323h8.64l-1.512 2.6h-.023l-.148.257h-3.868c-.734 0-1.33.593-1.33 1.323s.596 1.322 1.33 1.322h2.353l-1.95 3.353c-.537.925.138 2.083 1.21 2.083h7.15c.997 0 1.919-.529 2.42-1.386l2.417-4.17h8.707l1.574 4.17a2.093 2.093 0 0 0 1.946 1.35l4.885.036a1.394 1.394 0 0 0 1.322-1.868Z" fill="#FFF2EA"></path><path d="M26.177 44.9a1.363 1.363 0 0 1-1.367-1.358c0-.75.61-1.357 1.367-1.357a1.36 1.36 0 0 1 1.366 1.357c0 .752-.613 1.359-1.366 1.359Z" fill="url(#AhaTruck_svg__h)"></path><path d="M31.296 44.898a1.36 1.36 0 0 1-1.367-1.356c0-.752.61-1.362 1.367-1.362.753 0 1.367.61 1.367 1.362 0 .746-.614 1.356-1.367 1.356Z" fill="url(#AhaTruck_svg__i)"></path></g><defs><linearGradient id="AhaTruck_svg__c" x1="33.833" y1="52.083" x2="94.25" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="AhaTruck_svg__e" x1="25.556" y1="40.047" x2="55.492" y2="67.565" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><linearGradient id="AhaTruck_svg__f" x1="25.556" y1="40.047" x2="55.493" y2="67.565" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><linearGradient id="AhaTruck_svg__h" x1="25.481" y1="43.296" x2="27.422" y2="44.858" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><linearGradient id="AhaTruck_svg__i" x1="30.601" y1="43.291" x2="32.542" y2="44.853" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><clipPath id="AhaTruck_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath><clipPath id="AhaTruck_svg__d"><path fill="#fff" transform="translate(13.962 13.462)" d="M0 0h73.077v73.077H0z"></path></clipPath></defs></svg>
										</span>
										<div className='text-xl leading-12 text-black font-semibold'>
											ExpressTruck
										</div>
										<p className='text-base leading-6 text-black font-medium'>
										Đa dạng phương tiện vận chuyển d&agrave;nh cho các mặt h&agrave;ng lớn v&agrave; cồng kềnh.
										</p>
									</div>
								</div>
							</div>
							<div className='rounded-2xl px-4  hover:bg-blue-100 drop-shadow py-10'>
								<div className=''>
									<div>
										<span className='justify-center items-center inline-flex'>
											<svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#AhaMart_svg__a)"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="AhaMart_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#0085BC"></path></mask><g mask="url(#AhaMart_svg__b)"><path d="M71.334 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50c-27.615 0-50 22.386-50 50s22.385 50 50 50Z" fill="url(#AhaMart_svg__c)"></path></g></g><path d="M44.979 27.252c.18-1-.507-1.955-1.537-2.132-1.03-.177-2.013.492-2.195 1.494-.053.292-.949 5.362-.422 10.851l-6.02-17c-.34-.962-1.42-1.474-2.408-1.143-.99.331-1.516 1.38-1.175 2.34L36.57 36.77a54.875 54.875 0 0 0-.353-.61c-3.454-5.89-6.982-9.537-10.483-10.842-.977-.364-2.073.11-2.448 1.06-.374.95.114 2.015 1.091 2.379 4.19 1.561 8.311 8.369 10.715 13.256l1.406 3.475 9.176-2.945-.871-3.778c-.873-5.54.162-11.44.175-11.512Z" fill="#38A169"></path><path d="M76.822 30.48H64.245l-4.27 8.29c-.15.292-.23.615-.23.944v21.557c0 1.127.904 2.041 2.017 2.041h17.543c1.113 0 2.016-.914 2.016-2.041V39.714a2.06 2.06 0 0 0-.228-.944l-4.271-8.29Z" fill="#fff"></path><path d="m81.077 38.77-4.543-8.29H67.25l4.542 8.29c.16.292.243.615.243.944v21.557c0 1.127-.96 2.041-2.144 2.041h9.285c1.185 0 2.145-.914 2.145-2.041V39.714c0-.329-.084-.652-.243-.944Z" fill="#C1C7CD"></path><path d="M79.131 32.356H61.935c-.691 0-1.251-.484-1.251-1.082v-1.587c0-.598.56-1.083 1.251-1.083h17.196c.692 0 1.252.485 1.252 1.083v1.587c0 .598-.56 1.082-1.252 1.082Z" fill="#435A96"></path><path d="M79.073 28.604h-8.072v3.752h8.072c.723 0 1.309-.484 1.309-1.082v-1.588c0-.597-.586-1.082-1.309-1.082Z" fill="#142246"></path><path d="M76.12 56.746H64.006a.51.51 0 0 1-.51-.51V44.122a.51.51 0 0 1 .51-.51H76.12a.51.51 0 0 1 .51.51v12.114a.51.51 0 0 1-.51.51Z" fill="#FFBB96"></path><path d="M76.202 43.613h-3.325v13.133h3.325c.236 0 .428-.228.428-.51V44.122c0-.281-.192-.51-.428-.51Z" fill="#FF7A45"></path><path d="M54.352 22.606v-13.7h-7.036v13.7a9.782 9.782 0 0 1-2.697 6.741 9.781 9.781 0 0 0-2.697 6.742v39.77a2.468 2.468 0 0 0 2.473 2.463h12.878a2.468 2.468 0 0 0 2.472-2.464V36.09a9.781 9.781 0 0 0-2.697-6.741 9.783 9.783 0 0 1-2.696-6.742Z" fill="#435A96"></path><path d="M57.081 29.347a9.846 9.846 0 0 1-2.664-6.741v-13.7h-6.951v13.7a9.87 9.87 0 0 1-.854 4.014 9.805 9.805 0 0 0 1.811 2.728 9.846 9.846 0 0 1 2.664 6.741v39.77a2.453 2.453 0 0 1-2.442 2.463h8.658a2.453 2.453 0 0 0 2.442-2.464V36.09a9.846 9.846 0 0 0-2.664-6.742Z" fill="#142246"></path><path d="M55.055 20.665V8.401a.434.434 0 0 0-.433-.434h-7.577a.434.434 0 0 0-.433.434v12.264c0 .24.194.435.433.435h7.577a.434.434 0 0 0 .433-.435ZM59.745 60.498H48.837c-.71 0-1.286-.57-1.286-1.271V41.132c0-.702.576-1.271 1.286-1.271h10.908v20.637Z" fill="#fff"></path><path d="M59.746 39.86h-9.38v20.638h9.38V39.861Z" fill="#DDE1E6"></path><path d="M19.432 56.516h24.78c.227-10.642-7.54-22.184-17.705-24.658a9.054 9.054 0 0 0-6.397.802 11.24 11.24 0 0 0-5.388 13.472c.983 2.96 2.745 6.775 4.71 10.384Z" fill="#FFC069"></path><path d="M26.506 31.858a9.054 9.054 0 0 0-6.396.802 11.24 11.24 0 0 0-5.39 13.472c.853 2.56 2.286 5.76 3.928 8.913L36.192 37.5c-2.76-2.728-6.07-4.762-9.686-5.642Z" fill="#FFD591"></path><path d="M27.008 31.998c2.39.658 4.641 1.812 6.68 3.34-3.854 4.907-10.068 11.172-11.604 9.635-1.39-1.39 1.903-7.89 4.924-12.975ZM37.944 39.416a28.12 28.12 0 0 1 4.264 7.055c-3.87 4.783-9.587 10.41-11.052 8.945-1.69-1.69 3.54-10.925 6.788-16Z" fill="#FFA940"></path><g clipPath="url(#AhaMart_svg__d)"><path d="M74.306 86.538h-47.61a4.815 4.815 0 0 1-4.702-3.775l-7.07-31.98h71.154l-7.07 31.98a4.815 4.815 0 0 1-4.702 3.775Z" fill="url(#AhaMart_svg__e)"></path><path d="m76.88 50.783-7.07 31.98a4.815 4.815 0 0 1-4.7 3.775h9.195a4.815 4.815 0 0 0 4.701-3.775l7.07-31.98h-9.195Z" fill="url(#AhaMart_svg__f)"></path><path d="M88.84 56.08H12.159c-.8 0-1.45-.649-1.45-1.45v-3.6c0-.8.65-1.45 1.45-1.45h76.68c.801 0 1.45.65 1.45 1.45v3.6c0 .801-.649 1.45-1.45 1.45Z" fill="#FFF2E8"></path><path d="M88.84 49.58h-7.775v6.5h7.775c.8 0 1.45-.649 1.45-1.45v-3.6c0-.8-.65-1.45-1.45-1.45Z" fill="#FFD8BF"></path><path d="M43.51 78.737a1.277 1.277 0 1 0 2.549-.18l-1.09-15.528a1.277 1.277 0 1 0-2.549.179l1.09 15.529ZM33.654 80.16a1.275 1.275 0 0 1-1.513-.986L28.87 63.645a1.277 1.277 0 0 1 2.5-.526l3.27 15.528a1.277 1.277 0 0 1-.986 1.513ZM58.763 78.737a1.277 1.277 0 1 1-2.548-.18l1.09-15.528a1.277 1.277 0 1 1 2.549.179l-1.09 15.529ZM68.621 80.16a1.277 1.277 0 0 0 1.513-.986l3.271-15.529a1.277 1.277 0 1 0-2.499-.526l-3.271 15.528c-.146.69.296 1.368.986 1.513Z" fill="#fff"></path></g><defs><linearGradient id="AhaMart_svg__c" x1="33.834" y1="52.083" x2="94.25" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="AhaMart_svg__e" x1="32.403" y1="65.403" x2="55.96" y2="102.908" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><linearGradient id="AhaMart_svg__f" x1="66.579" y1="50.856" x2="102.885" y2="61.439" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#702100"></stop></linearGradient><clipPath id="AhaMart_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath><clipPath id="AhaMart_svg__d"><path fill="#fff" transform="translate(8.192 1.923)" d="M0 0h84.615v84.615H0z"></path></clipPath></defs></svg>
											</span>
										<div className='text-xl leading-12 text-black font-semibold'>
											ExpressMart
										</div>
										<p className='text-base leading-6 text-black font-medium'>
										Mua sắm hằng ng&agrave;y thật đơn giản v&agrave; tiện lợi. Bạn cần g&igrave; ch&uacute;ng tôi giao tận nh&agrave;.
										</p>
									</div>
								</div>
							</div>
							<div className='rounded-2xl px-4  hover:bg-blue-100 drop-shadow py-10'>
								<div className=''>
									<div>
										<span className='justify-center items-center inline-flex'>
											<svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#AhaSupply_svg__a)"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="AhaSupply_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#AhaSupply_svg__b)"><path d="M71.333 143.75c27.615 0 50-22.386 50-50s-22.385-50-50-50c-27.614 0-50 22.386-50 50s22.386 50 50 50Z" fill="url(#AhaSupply_svg__c)"></path></g></g><g clipPath="url(#AhaSupply_svg__d)"><path d="M84.417 37.507 52.11 15.583a1.154 1.154 0 0 0-1.296 0L18.506 37.507a1.153 1.153 0 0 0-.506.954v45c0 .638.517 1.154 1.154 1.154h64.615c.637 0 1.154-.517 1.154-1.154v-45c0-.382-.19-.74-.506-.954Z" fill="url(#AhaSupply_svg__e)"></path><path d="M21.462 83.461v-45c0-.382.19-.74.506-.954l31.224-21.189-1.083-.735a1.154 1.154 0 0 0-1.295 0L18.506 37.507a1.154 1.154 0 0 0-.506.954v45c0 .638.517 1.154 1.154 1.154h3.461a1.154 1.154 0 0 1-1.153-1.154Z" fill="#E5563C"></path><path d="M72.23 43.077H30.693c-.637 0-1.153.516-1.153 1.154v39.23c0 .638.516 1.154 1.153 1.154h41.539c.637 0 1.154-.517 1.154-1.154v-39.23c0-.638-.517-1.154-1.154-1.154Z" fill="#435A96"></path><path d="M30.692 43.077c-.637 0-1.153.516-1.153 1.154v39.23c0 .638.516 1.154 1.153 1.154H33V43.077h-2.308Z" fill="#142246"></path><path d="M74.539 38.461H28.385c-.638 0-1.154.517-1.154 1.154v4.615c0 .638.517 1.154 1.154 1.154h46.154c.637 0 1.153-.517 1.153-1.154v-4.615c0-.637-.516-1.154-1.153-1.154Z" fill="#fff"></path><path d="M74.539 43.077H28.385a1.154 1.154 0 0 1-1.154-1.154v2.308c0 .637.517 1.153 1.154 1.153h46.154c.637 0 1.153-.516 1.153-1.153v-2.308c0 .637-.516 1.154-1.153 1.154Z" fill="#DDE1E6"></path><path d="M56.077 25.769h-9.23a1.154 1.154 0 0 1 0-2.308h9.23a1.154 1.154 0 1 1 0 2.308ZM56.077 30.384h-9.23a1.154 1.154 0 0 1 0-2.307h9.23a1.154 1.154 0 1 1 0 2.307ZM56.077 35h-9.23a1.154 1.154 0 0 1 0-2.308h9.23a1.154 1.154 0 0 1 0 2.307Z" fill="#E5563C"></path><path d="M44.538 52.307H30.692c-.637 0-1.153.517-1.153 1.154v13.846c0 .638.516 1.154 1.153 1.154l6.923 1.154 6.923-1.154c.638 0 1.154-.516 1.154-1.154V53.461c0-.637-.516-1.154-1.154-1.154Z" fill="#FFD591"></path><path d="M44.538 68.461H30.692c-.637 0-1.153.517-1.153 1.154v13.846c0 .637.516 1.154 1.153 1.154h13.846c.638 0 1.154-.517 1.154-1.154V69.615c0-.637-.516-1.154-1.154-1.154Z" fill="#FFD591"></path><path d="M31.846 83.461V69.615c0-.637.517-1.154 1.154-1.154h-2.308c-.637 0-1.153.517-1.153 1.154v13.846c0 .637.516 1.154 1.153 1.154H33a1.154 1.154 0 0 1-1.154-1.154ZM39.923 68.461h-4.615v5.77c0 .637.517 1.153 1.154 1.153h2.307c.638 0 1.154-.516 1.154-1.154v-5.769Z" fill="#FFA940"></path><path d="M39.923 82.307h-4.615a1.154 1.154 0 0 1 0-2.307h4.615a1.154 1.154 0 1 1 0 2.307Z" fill="#74757B"></path><path d="M31.846 67.307V53.461c0-.637.517-1.154 1.154-1.154h-2.308c-.637 0-1.153.517-1.153 1.154v13.846c0 .638.516 1.154 1.153 1.154H33a1.154 1.154 0 0 1-1.154-1.154ZM39.923 52.307h-4.615v5.77c0 .637.517 1.154 1.154 1.154h2.307c.638 0 1.154-.517 1.154-1.154v-5.77Z" fill="#FFA940"></path><path d="M39.923 66.153h-4.615a1.154 1.154 0 1 1 0-2.307h4.615a1.154 1.154 0 0 1 0 2.307Z" fill="#74757B"></path><path d="M60.692 68.461H46.846c-.637 0-1.154.517-1.154 1.154v13.846c0 .637.517 1.154 1.154 1.154h13.846c.638 0 1.154-.517 1.154-1.154V69.615c0-.637-.516-1.154-1.154-1.154Z" fill="#FFD591"></path><path d="M48 83.461V69.615c0-.637.517-1.154 1.154-1.154h-2.308c-.637 0-1.154.517-1.154 1.154v13.846c0 .637.517 1.154 1.154 1.154h2.308A1.154 1.154 0 0 1 48 83.46ZM56.077 68.461h-4.615v5.77c0 .637.516 1.153 1.153 1.153h2.308c.637 0 1.154-.516 1.154-1.154v-5.769Z" fill="#FFA940"></path><path d="M56.077 82.307h-4.615a1.154 1.154 0 0 1 0-2.307h4.615a1.154 1.154 0 0 1 0 2.307Z" fill="#74757B"></path></g><defs><linearGradient id="AhaSupply_svg__c" x1="33.833" y1="52.083" x2="94.25" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="AhaSupply_svg__e" x1="34.44" y1="43.692" x2="83.447" y2="81.591" gradientUnits="userSpaceOnUse"><stop stopColor="#FD773F"></stop><stop offset="1" stopColor="#FBA44A"></stop></linearGradient><clipPath id="AhaSupply_svg__a"><rect x="0.5" width="100" height="100" rx="8" fill="#fff"></rect></clipPath><clipPath id="AhaSupply_svg__d"><path fill="#fff" transform="translate(16.846 15.384)" d="M0 0h69.231v69.231H0z"></path></clipPath></defs></svg>
										</span>
										<div className='text-xl leading-12 text-black font-semibold'>
											ExpressSupply
										</div>
										<p className='text-base leading-6 text-black font-medium'>
										Cung cấp nguồn h&agrave;ng sỉ nhanh ch&oacute;ng v&agrave; bảo đảm với mức giá vô c&ugrave;ng cạnh tranh.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:relative mt-12 md:my-40'>
				<div className='mx-auto lg:flex max-w-7xl w-full'>
					<div className='py-7 lg:mt-36 lg:px-0 lg:py-0 lg:w-1/2 sm:pr-8'>
						<div>
							<h2 className='max-w-md font-bold text-4xl leading-12 text-gray-800'>
								Luôn chuyển động c&ugrave;ng bạn, d&ugrave; bạn l&agrave; ai
							</h2>
							<div className='font-medium my-6 md:my-3 max-w-lg py-3'>
								Ch&uacute;ng tôi mang đến cho doanh nghiệp của bạn v&agrave; khách h&agrave;ng những trải nghiệm h&agrave;i lòng nhất về thời gian, chi ph&iacute; v&agrave; sự an tâm tr&ecirc;n mỗi chuyến h&agrave;ng.
							</div>
							<Link href='./authentication/in'>
								<div className='button_primary max-w-sm'>
									Đăng k&yacute; trở th&agrave;nh khách h&agrave;ng
								</div>
							</Link>
						</div>
					</div>
					<div className='relative lg:w-1/2 sm:pl-12 xl:pl-16'>
						<Image src={register}
							width={500}
							height={500}
							alt=""
							layout='responsive' />
					</div>
				</div>
			</div>
			<div className='relative w-full bg-[#f1f8ff] py-10 h-full'>
				<div className=' container max-w-[80rem] w-full mx-auto'>
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
						<div>
							<h2 className='text-blue-600 font-bold'>
								777+
							</h2>
							<p className='text-base leading-6 text-black font-medium'>
								Doanh nghiệp/hộ kinh doanh tr&ecirc;n to&agrave;n quốc
							</p>
						</div>
						<div>
							<h2 className='text-blue-600 font-bold'>
								999+
							</h2>
							<p className='text-base leading-6 text-black font-medium'>
								Khách h&agrave;ng tin tưởng sử dụng dịch vụ
							</p>
						</div>
						<div>
							<h2 className='text-blue-600 font-bold'>
								1
							</h2>
							<p className='text-base leading-6 text-black font-medium'>
								Tỉnh th&agrave;nh c&oacute; sự hiện diện của Delivery Express
							</p>
						</div>
						<div>
							<h2 className='text-blue-600 font-bold'>
								100
							</h2>
							<p className='text-base leading-6 text-black font-medium'>
								Điểm giao th&agrave;nh công mỗi ng&agrave;y
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='lg:relative mt-12 md:my-20'>
				<div className='mx-auto lg:flex lg:items-center max-w-7xl'>
					<div className='relative lg:w-1/2 sm:pl-12 xl:pl-16 '>
						<div>
							<Image src={intergration}
								width={700}
								height={600}
								alt=""
								layout='responsive' />
						</div>
					</div>
					<div className='lg:px-0 lg:w-5/12 sm:pr-8 ml-20'>
						<h2 className='font-bold text-gray-800 py-5'>
							T&iacute;ch hợp mạnh mẽ để tiến về ph&iacute;a trước
						</h2>
						<div className='text-lg leading-7 text-black font-medium'>
							Tối ưu quy tr&igrave;nh vận h&agrave;nh v&agrave; đưa doanh nghiệp của bạn l&ecirc;n một tầm cao mới. Quá tr&igrave;nh t&iacute;ch hợp không thể dễ d&agrave;ng hơn khi đ&atilde; c&oacute; ch&uacute;ng tôi hỗ trợ bạn tối đa.
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[#fff2ea]'>
				<div className='mx-auto lg:flex max-w-7xl w-full pt-7 pb-7 lg:py-16 lg:text-left'>
					<div className='p-7 mb-12 md:mb-0 md:pl-4 md:py-0 lg:w-2/5 sm:pr-8 xl:pr-16'>
						<h2 className='text-[42px] leading-[58px] font-bold'>
							Cần l&agrave; c&oacute; &mdash; mọi l&uacute;c, mọi nơi theo cách bạn muốn
						</h2>
						<div className='font-medium my-5'>
							Tải ứng dụng ngay để tối ưu trải nghiệm
						</div>
						<QrCode  />
					</div>
					<div className='relative w-[750px]'>
						<Image src={download}
							width={800}
							alt=""
							height={500}
							layout='responsive'
							objectFit="cover" />
					</div>
				</div>
			</div>
			<div className='my-12 lg:my-40'>
				<div className='mx-auto lg:flex max-w-7xl w-full'>
					<div className='relative lg:w-1/2 sm:pr-12 xl:pr-16'>
						<Image src={driver}  alt="" width={800} height={800} layout='responsive' objectFit="cover" />
					</div>
					<div className='space-y-6 pl-14 w-1/2'>
						<h2 className='font-bold text-gray-800'>
							Trở th&agrave;nh đối tác T&agrave;i xế của Ahamove
						</h2>
						<div className='space-y-2'>
							<div className='lg:w-8'><Image alt="" src={cash} width={32} height={32} layout='responsive' objectFit="cover" /></div>

							<div className='text-xl leading-7 text-black font-bold'>Thu nhập hấp dẫn</div>
							<p className='text-base leading-6 text-black font-medium'>
								Nhanh ch&oacute;ng nhận được tiền cước ngay khi ho&agrave;n th&agrave;nh đơn h&agrave;ng, lương thưởng hấp dẫn.
							</p>
						</div>
						<div className='space-y-2'>
							<div className='lg:w-8'><Image alt="" src={time} width={32} height={32} layout='responsive' objectFit="cover" /></div>
							<div className='text-xl leading-7 text-black font-bold'>
								L&agrave;m chủ thời gian
							</div>
							<p className='text-base leading-6 text-black font-medium'>
								Nhận đơn để kiếm th&ecirc;m thu nhập bất cứ khi n&agrave;o bạn muốn
							</p>
						</div>
						<div className='space-y-2'>
							<div className='lg:w-8'>
								<Image src={tick}  alt="" width={32} height={32} layout='responsive' objectFit="cover" />

							</div>
							<div className='text-xl leading-7 text-black font-bold'>
								Đăng k&yacute; dễ d&agrave;ng
							</div>
							<p className='text-base leading-6 text-black font-medium'>
								Ch&uacute;ng tôi sẽ li&ecirc;n lạc để hỗ trợ sau khi bạn điền thông tin
							</p>
						</div>
						<Link href='./driver'>
							<div className='button_primary w-8/12 '>
								Đăng k&yacute; l&agrave;m Đối tác T&agrave;i xế
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className='my-20 md:my-28'>
				<div className='px-6 lg:px-0 mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl'>
					<div className='flex items-center justify-between'>
						<h2 className='font-bold text-gray-800'>
							Tin tức mới nhất
						</h2>
						<div className='hidden md:block text-primary pr-5'>
							Xem tất cả
						</div>
					</div>
					<div className="mt-10 max-w-md grid lg:gap-8 gap-6 sm:max-w-lg lg:grid-cols-3 lg:max-w-7xl">
						{[...Array(3)].map((_, index) => (
							<div key={index}>
								<div className='lg:w-[400px]'>
									<Image src={new1}
										layout="responsive"
										className='rounded-lg'
										alt=""
										width={400}
										height={240} />
								</div>
								<div>
									<div className='text-sm font-medium text-gray-700 leading-5 mt-6 mb-3'>
										23/05/2022
									</div>
									<div className='text-xl leading-7 text-black font-bold'>
										[AHAMART] BỮA TRƯA VUI VẺ &ndash; NHẬN DEAL 0 ĐỒNG CHO TẤT CẢ CÁC KHÁCH H&Agrave;NG
									</div>
								</div>
							</div>
						))}

					</div>
				</div>
			</div>

		</>
	);
}

Home.getLayout = function getLayout(page: any) {
	return (
		<LayoutDefault >{page}</LayoutDefault>
	)
}
