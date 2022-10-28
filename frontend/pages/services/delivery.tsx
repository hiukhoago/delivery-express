import React from 'react'
import LayoutDefault from '../../layouts/default'
import QrCode from '../../components/qrcode';
import Image from 'next/image';
import guide from '../../assets/images/customer/1.jpg'
import iphone from '../../assets/images/customer/iphone.png'
import shadowIphone from '../../assets/images/customer/iphone-shadow.png'

const Delivery = () => {
    const services = [
        ['1', 'Siêu Tốc - Đồ Ăn', 'Giao siêu nhanh chỉ trong 30 phút', '20,000 VNĐ/3km đầu'],
        ['2', 'Siêu Tốc', 'Giao hàng nội thành trong 1 giờ', '25,000 VNĐ/4km đầu'],
        ['3', 'Siêu Rẻ', 'Giao hàng tối đa 2 giờ, tiết kiệm 20%', '20,000 VNĐ/4km đầu'],
        ['4', '4H', 'Giao hàng nội thành, cam kết trong 4 giờ', '27,000 VNĐ/0-10km đầu'],
    ]
    return (

        <>
            <div className="bg-[url('../assets/images/service/banner/1.png')] h-screen bg-cover bg-center bg-no-repeat bg-blue-100 overflow-hidden">
                <div className='bg-blue-100 w-[620px] min-h-screen absolute rounded-tr-[100px]'>
                    <div className='ml-10 mt-40 mr-10'>
                        <h1 className='font-bold'>
                            Lợi &iacute;ch khi sử dụng dịch vụ giao h&agrave;ng
                        </h1>
                        <div className='sub_title mt-3'>
                            Ahamove luôn muốn đem đến những trải nghiệm dịch vụ đỉnh cao d&agrave;nh cho khách h&agrave;ng v&agrave; đối tác.
                        </div>
                        <QrCode />
                    </div>
                </div>
            </div>
            <div className='p-6 relative pt-16 bg-white max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0'>
                <div className='mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl'>
                    <h2 className='max-w-lg mx-auto'>
                        Lợi &iacute;ch khi sử dụng dịch vụ giao h&agrave;ng
                    </h2>
                    <div className='sub-title font-medium max-w-2xl mx-auto mt-3'>
                        Ch&uacute;ng tôi luôn muốn đem đến những trải nghiệm dịch vụ đỉnh cao d&agrave;nh cho khách h&agrave;ng v&agrave; đối tác của Ahamove
                    </div>
                    <div className="mt-6">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
                            <div className="pl-6 pr-6 pt-6 pb-6">
                                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 inline-flex items-center justify-center"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="fast_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#fast_svg__a)"><path d="M70.833 143.75c27.615 0 50-22.386 50-50s-22.385-50-50-50c-27.614 0-50 22.386-50 50s22.386 50 50 50Z" fill="url(#fast_svg__b)"></path></g><circle cx="56" cy="57" r="26" fill="#FFF2E8"></circle><path d="M62.426 15h-12.84a1.926 1.926 0 0 0-1.927 1.926v3.852c0 1.064.863 1.927 1.926 1.927h12.841a1.926 1.926 0 0 0 1.926-1.927v-3.852A1.926 1.926 0 0 0 62.426 15Z" fill="#435A96"></path><path d="M25.188 43.25H12.347a1.926 1.926 0 1 0 0 3.852h12.84a1.926 1.926 0 0 0 0-3.852ZM24.546 60.585a1.926 1.926 0 0 0-1.927-1.926H9.78a1.926 1.926 0 1 0 0 3.852h12.84a1.926 1.926 0 0 0 1.927-1.926ZM23.903 66.364h-8.988a1.926 1.926 0 0 0 0 3.852h8.988a1.926 1.926 0 1 0 0-3.852ZM24.546 52.88a1.927 1.927 0 0 0-1.927-1.925H5.926a1.926 1.926 0 1 0 0 3.852H22.62a1.926 1.926 0 0 0 1.927-1.926Z" fill="#FC8F1D"></path><path d="M56.006 56.733v-21.83c-12.037 0-21.83 9.793-21.83 21.83 0 12.037 9.793 21.83 21.83 21.83 12.037 0 21.83-9.793 21.83-21.83h-21.83Z" fill="#FF8200"></path><path d="m77.132 37.047 2.065-2.066a1.926 1.926 0 1 0-2.724-2.724l-2.15 2.15a28.772 28.772 0 0 0-14.465-6.31v-3.466h-7.705v3.467a28.772 28.772 0 0 0-14.465 6.308l-2.15-2.15a1.927 1.927 0 1 0-2.724 2.724l2.066 2.066a28.784 28.784 0 0 0-7.766 19.687c0 15.931 12.96 28.892 28.892 28.892 15.93 0 28.892-12.96 28.892-28.892a28.784 28.784 0 0 0-7.766-19.686ZM56.006 80.489a23.756 23.756 0 1 1 0-47.512 23.756 23.756 0 0 1 0 47.512Z" fill="#435A96"></path><defs><linearGradient id="fast_svg__b" x1="33.333" y1="52.083" x2="93.75" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
                                <div className="text-xl leading-7 text-black font-semibold mt-2 mb-2">Nhanh ch&oacute;ng</div>
                                <p className="text-base leading-6 text-black font-medium">Chỉ từ 30 ph&uacute;t, giao h&agrave;ng nhanh ch&oacute;ng v&agrave; kịp thời ngay khi bạn cần.</p>
                            </div>
                            <div className="flow-root rounded-2xl px-2 lg:px-6 py-7">
                                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 inline-flex items-center justify-center"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="good-service_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#good-service_svg__a)"><path d="M70.833 143.75c27.615 0 50-22.386 50-50s-22.385-50-50-50c-27.614 0-50 22.386-50 50s22.386 50 50 50Z" fill="url(#good-service_svg__b)"></path></g><path d="M69.798 65.746c.054-1.643-1.3-3.007-2.967-3.007h-.007l.248-.001c1.618-.001 2.93-1.289 2.928-2.876-.002-1.587-1.314-2.864-2.932-2.863h-12.19a.491.491 0 0 1-.475-.642l1.069-3.198c.909-2.722.747-4.575.747-7.764 0-1.875-1.55-3.395-3.462-3.395-1.737 0-3.205 1.262-3.432 2.95-.252 1.87-.422 5.192-3.572 8.167l-2.223 2.099a6.715 6.715 0 0 1-4.61 1.822H36v18.848h2.392c4.244-.004 3.856 4.119 9.135 4.114h17.966c1.615 0 2.925-1.285 2.925-2.87 0-1.585-1.31-2.87-2.925-2.87h.514c1.59 0 2.949-1.213 3.002-2.771.055-1.63-1.276-2.968-2.925-2.968h.712c1.592 0 2.95-1.215 3.002-2.775Z" fill="#FFF2E8"></path><path d="M32.249 55H26.75c-.415 0-.751.706-.751 1.576v20.848c0 .87.336 1.576.75 1.576h5.499c.415 0 .751-.706.751-1.576V56.576c0-.87-.336-1.576-.751-1.576Z" fill="#142246"></path><path d="M35.792 27.37a.67.67 0 0 0-.38-1.148l-4.34-.619a.684.684 0 0 1-.516-.368l-1.942-3.86a.69.69 0 0 0-1.228 0l-1.942 3.86a.686.686 0 0 1-.516.368l-4.34.62a.669.669 0 0 0-.38 1.146l3.14 3.005a.665.665 0 0 1 .198.596l-.742 4.242c-.096.55.492.969.995.71l3.882-2.004a.696.696 0 0 1 .638 0l3.883 2.003c.503.26 1.09-.16.994-.709l-.742-4.243a.665.665 0 0 1 .198-.595l3.14-3.005ZM80.792 27.37a.67.67 0 0 0-.38-1.148l-4.34-.619a.685.685 0 0 1-.516-.368l-1.942-3.86a.69.69 0 0 0-1.228 0l-1.942 3.86a.686.686 0 0 1-.516.368l-4.34.62a.669.669 0 0 0-.38 1.146l3.141 3.005a.665.665 0 0 1 .197.596l-.742 4.242c-.096.55.492.969.995.71l3.882-2.004a.696.696 0 0 1 .638 0l3.883 2.003c.503.26 1.09-.16.994-.709l-.741-4.243a.663.663 0 0 1 .197-.595l3.14-3.005ZM62.675 22.19c.636-.622.286-1.706-.593-1.834l-6.783-.991a1.07 1.07 0 0 1-.806-.589L51.46 12.6c-.393-.8-1.527-.8-1.92 0l-3.033 6.176a1.07 1.07 0 0 1-.806.589l-6.783.99c-.878.129-1.229 1.213-.594 1.836l4.908 4.808c.253.247.368.603.308.952l-1.158 6.789c-.15.879.768 1.55 1.553 1.134l6.067-3.205c.312-.165.684-.165.996 0l6.066 3.205c.786.415 1.704-.255 1.554-1.134l-1.159-6.789a1.08 1.08 0 0 1 .308-.952l4.908-4.808Z" fill="#FF8200"></path><defs><linearGradient id="good-service_svg__b" x1="33.333" y1="52.083" x2="93.75" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
                                <div className="text-xl leading-7 text-black font-semibold mt-2 mb-2">Tiện lợi</div>
                                <p className="text-base leading-6 text-black font-medium">Đáp ứng mọi nhu cầu giao h&agrave;ng, giao đồ đạc, giấy tờ t&agrave;i liệu, chuyển nh&agrave;, mua hộ...</p>
                            </div>
                            <div className="flow-root rounded-2xl px-2 lg:px-6 py-7">
                                <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 inline-flex items-center justify-center"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="cod_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#cod_svg__a)"><path d="M70.834 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50c-27.615 0-50 22.386-50 50s22.385 50 50 50Z" fill="url(#cod_svg__b)"></path></g><path d="M58.998 50h-25.5a3.003 3.003 0 0 0-3 3v21a1.5 1.5 0 0 0 1.5 1.5h28.5a1.5 1.5 0 0 0 1.5-1.5V53a3.003 3.003 0 0 0-3-3Z" fill="url(#cod_svg__c)"></path><path d="M42.503 50v8.249a.748.748 0 0 0 1.135.643l2.614-1.569 2.615 1.569a.75.75 0 0 0 1.136-.643V50h-7.5Z" fill="url(#cod_svg__d)"></path><path d="M66.236 71.177a4.15 4.15 0 0 0-4.473-2.637l-10.869 1.611a4.062 4.062 0 0 0-2.713-3.786l-9.34-3.06a8.37 8.37 0 0 0-5.222.013l-9.594 3.202A1.5 1.5 0 0 0 23 67.943v11.12a1.5 1.5 0 0 0 1.747 1.48l7.044-1.18a2.474 2.474 0 0 1 1.516.228l4.604 2.302a10.434 10.434 0 0 0 8.017.57l17.747-5.916a4.13 4.13 0 0 0 2.562-5.37Z" fill="url(#cod_svg__e)"></path><path d="M22.997 62.753h-3a3 3 0 0 0-3 3v13.5a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3v-13.5a3 3 0 0 0-3-3Z" fill="url(#cod_svg__f)"></path><path d="m75.825 21.572-19.307-4.293a10.483 10.483 0 0 0-7.061.805l-5.845 2.68a10.566 10.566 0 0 0-3.528 2.863l-3.525 4.437a1.5 1.5 0 0 0 1.175 2.433H75.5a1.5 1.5 0 0 0 1.5-1.5v-5.961a1.5 1.5 0 0 0-1.174-1.464Z" fill="url(#cod_svg__g)"></path><path d="M64.998 27.5h-31.5a3 3 0 0 0-3 3V44a3 3 0 0 0 3 3h31.5a3 3 0 0 0 3-3V30.5a3 3 0 0 0-3-3Z" fill="url(#cod_svg__h)"></path><path d="M39.5 43.253h-3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h3.75a1.5 1.5 0 1 1 0 3h-2.25v6h2.25a1.5 1.5 0 1 1 0 3Z" fill="url(#cod_svg__i)"></path><path d="M59.002 43.253h3.75a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-3.75a1.501 1.501 0 1 0 0 3h2.25v6h-2.25a1.501 1.501 0 1 0 0 3Z" fill="url(#cod_svg__j)"></path><path d="M49.25 43.253a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="url(#cod_svg__k)"></path><path d="M75.5 24.503H64.25a1.502 1.502 0 0 0-1.41.987l-1.08 2.972a4.52 4.52 0 0 1-3.399 2.885L48.475 33.2a3.178 3.178 0 0 0 .586 6.303H64.58c1.477.002 2.938-.31 4.286-.915l7.246-3.235a1.5 1.5 0 0 0 .889-1.37v-7.98a1.5 1.5 0 0 0-1.5-1.5Z" fill="url(#cod_svg__l)"></path><path d="M80.003 18.5h-3a3 3 0 0 0-3 3V35a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V21.5a3 3 0 0 0-3-3Z" fill="url(#cod_svg__m)"></path><defs><linearGradient id="cod_svg__b" x1="33.334" y1="52.083" x2="93.75" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient><linearGradient id="cod_svg__c" x1="46.247" y1="49.92" x2="46.247" y2="70.791" gradientUnits="userSpaceOnUse"><stop stopColor="#FED200"></stop><stop offset="1" stopColor="#F59815"></stop></linearGradient><linearGradient id="cod_svg__d" x1="46.252" y1="50.281" x2="46.252" y2="59.502" gradientUnits="userSpaceOnUse"><stop stopColor="#FD9B02"></stop><stop offset="1" stopColor="#FF7302"></stop></linearGradient><linearGradient id="cod_svg__e" x1="44.751" y1="63.662" x2="44.751" y2="82.466" gradientUnits="userSpaceOnUse"><stop stopColor="#F1D2BD"></stop><stop offset="1" stopColor="#FEB592"></stop></linearGradient><linearGradient id="cod_svg__f" x1="21.497" y1="62.753" x2="21.497" y2="82.253" gradientUnits="userSpaceOnUse"><stop stopColor="#FE5F00"></stop><stop offset="1" stopColor="#FF9150"></stop></linearGradient><linearGradient id="cod_svg__g" x1="12390.2" y1="271.57" x2="12390.2" y2="2372.97" gradientUnits="userSpaceOnUse"><stop stopColor="#F1D2BD"></stop><stop offset="1" stopColor="#FEB592"></stop></linearGradient><linearGradient id="cod_svg__h" x1="4352.19" y1="2048.62" x2="11294.5" y2="8130.01" gradientUnits="userSpaceOnUse"><stop stopColor="#34CA82"></stop><stop offset="1" stopColor="#37A477"></stop></linearGradient><linearGradient id="cod_svg__i" x1="28.902" y1="32.842" x2="64.837" y2="51.013" gradientUnits="userSpaceOnUse"><stop stopColor="#37AA79"></stop><stop offset="1" stopColor="#398A70"></stop></linearGradient><linearGradient id="cod_svg__j" x1="1002.06" y1="839.915" x2="3009.52" y2="1412.13" gradientUnits="userSpaceOnUse"><stop stopColor="#37AA79"></stop><stop offset="1" stopColor="#398A70"></stop></linearGradient><linearGradient id="cod_svg__k" x1="1533.65" y1="1218.95" x2="4576.97" y2="2815.83" gradientUnits="userSpaceOnUse"><stop stopColor="#37AA79"></stop><stop offset="1" stopColor="#398A70"></stop></linearGradient><linearGradient id="cod_svg__l" x1="10545.6" y1="307.356" x2="10545.6" y2="2642.2" gradientUnits="userSpaceOnUse"><stop stopColor="#F1D2BD"></stop><stop offset="1" stopColor="#FEB592"></stop></linearGradient><linearGradient id="cod_svg__m" x1="78.503" y1="18.5" x2="78.503" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#FE5F00"></stop><stop offset="1" stopColor="#FF9150"></stop></linearGradient></defs></svg>
                                <div className="text-xl leading-7 text-black font-semibold mt-2 mb-2">Ứng COD</div>
                                <p className="text-base leading-6 text-black font-medium">Xác thực t&agrave;i khoản bằng eKYC nhanh ch&oacute;ng v&agrave; bảo mật, bạn c&oacute; thể được t&agrave;i xế ứng tiền trước l&ecirc;n đến 500,000đ/đơn h&agrave;ng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:relative py-10 bg-orange-100 min-h-screen'>
                <div className="mx-auto flex max-w-7xl w-full py-7 px-5 md:px-0 text-center lg:py-12 lg:text-left">
                    <div className="relative w-1/2">
                        <div className="absolute z-10 left-1/4 w-1/2 text-center">
                            <Image alt="" src={iphone}
                                className="rounded-3xl"
                                width={310}
                                height={640}
                                objectFit="cover"
                            />
                        </div>
                        <div className="absolute left-1/4 w-1/2 text-center">
                            <Image alt="" src={shadowIphone}
                                className="rounded-3xl"
                                width={310}
                                height={640}
                                objectFit="cover"
                            />
                        </div>
                        <div className="absolute left-1/4 w-1/2 rounded-2xl overflow-hidden">
                            <div className="absolute z-10  left-1/4 w-1/2 text-center">
                                <Image alt="" src={guide}
                                    className="rounded-3xl"
                                    width={310}
                                    height={640}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 sm:pl-8 xl:pl-0 xl:pr-8">
                        <h2 className="max-w-xl ml-auto mr-auto font-bold leading-12 text-4xl">Hướng dẫn sử dụng dịch vụ giao h&agrave;ng</h2>
                        <div className="flex my-5 p-3 rounded-xl cursor-pointer bg-primary text-white">
                            <div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
                            <div>
                                <div className=" mt-0 font-bold text-xl leading-7">Bước 1</div>
                                <div className="mt-0 font-bold text-xl leading-7">Chọn &ldquo;Bạn muốn giao h&agrave;ng đến đâu?&rdquo;</div>
                            </div>
                        </div>
                        <div className="flex my-5 p-3 rounded-xl cursor-pointer">
                            <div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
                            <div>
                                <div className="mt-0 font-bold text-xl leading-7">Bước 2</div>
                                <div className="mt-0 font-medium text-xl leading-7">Nhập địa chỉ giao h&agrave;ng</div>
                            </div>
                        </div>
                        <div className="flex my-5 p-3 rounded-xl cursor-pointer">
                            <div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
                            <div>
                                <div className="mt-0 font-bold text-xl leading-7">Bước 3</div>
                                <div className="mt-0 font-medium text-xl leading-7">Nhập thông tin người nhận h&agrave;ng</div>
                            </div>
                        </div>
                        <div className="flex my-5 p-3 rounded-xl cursor-pointer">
                            <div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
                            <div>
                                <div className="mt-0 font-bold text-xl leading-7">Bước 4</div>
                                <div className="mt-0 font-medium text-xl leading-7">Kiểm tra lại thông tin của người gửi v&agrave; người nhận</div>
                            </div>
                        </div>
                        <div className="flex my-5 p-3 rounded-xl cursor-pointer">
                            <div className="hidden md:inline-block text-xl font-bold pr-2">&bull;</div>
                            <div>
                                <div className="mt-0 font-bold text-xl leading-7">Bước 5</div>
                                <div className="mt-0 font-medium text-xl leading-7">Chọn y&ecirc;u cầu đặc biệt (nếu c&oacute;) v&agrave; kiểm tra thông tin thanh toán đơn h&agrave;ng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-6 relative pt-16 bg-white max-w-md px-5 mx-auto sm:max-w-3xl lg:max-w-7xl md:px-0 py-16 md:py-20'>
                <div>
                    <div>
                        <h2>
                            Dịch vụ ph&ugrave; hợp với nhu cầu của bạn
                        </h2>
                    </div>
                    <button className='button_primary my-3'>
                        Xem chi tiết các dịch vụ
                    </button>
                </div>
                <div className='mt-8'>
                    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                        {services?.map((service, index) => (
                            <div key={index}>
                                <div className='border rounded-2xl px-3 py-7 min-h-[320px]'>
                                    <div className='flex justify-center'><Image src={require(`../../assets/images/service/delivery/${service[0]}.png`)} alt='icon_delivery' /></div>
                                    <div className='mt-5 text-center'>
                                        <div>
                                            <div className='font-semibold text-xl leading-7 text-black'>
                                                {service[1]}
                                            </div>
                                            <p className='font-medium text-base leading-6 text-gray-600'>
                                                {service[2]}
                                            </p>
                                        </div>
                                        <div className='font-bold text-lg leading-7 text-primary'>
                                            {service[3]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Delivery

Delivery.getLayout = function getLayout(page: any) {
    return (
        <LayoutDefault >{page}</LayoutDefault>
    )
}