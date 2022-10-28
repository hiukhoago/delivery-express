import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default';
import about1 from '../assets/images/about/about1.jpeg'
import about2 from '../assets/images/about/about2.jpeg'
import about3 from '../assets/images/about/about3.jpeg'
import about4 from '../assets/images/about/about4.jpeg'
import banner1 from '../assets/images/about/img-about-us.jpg'
import culture1 from '../assets/images/about/culture-1.jpg'
import arrow from '../assets/images/about/arrow.png'
import mission from '../assets/images/about/aha-mission.png'
import eye from '../assets/images/about/eye.png'
import vision from '../assets/images/about/aha-vision.png'
import quote from '../assets/images/about/quote.png'
import ceo from '../assets/images/about/CEO-aha.jpg'


export default function About() {
    return (
        <div className="relative overflow-hidden">
            <div className=' bg-cover bg-no-repeat overflow-hidden relative'>
                <Image alt="" src={banner1} priority={true} objectFit="cover" />
                <div className="pl-0 pr-0">
                    <div className='absolute'>
                        <h1 className="text-white font-bold">Về ch&uacute;ng tôi</h1>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="pl-0 pr-0 ml-10 mr-10">
                    <div className="mt-10 mb-20 ">
                        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
                            <div className="text-xl leading-7 text-black font-bold">Delivery Express thương hiệu giao h&agrave;ng theo nhu cầu chuy&ecirc;n nghiệp với nền tảng công nghệ hiện đại nhất khu vực được tối ưu hoá cho nhu cầu của địa phương, đáp ứng mọi nhu cầu vận chuyển của người ti&ecirc;u d&ugrave;ng v&agrave; chủ doanh nghiệp.</div>
                            <div>
                                <p className="text-base leading-6 text-black font-medium">Delivery Express vừa thành lập vào tháng 6 năm 2022, với mong muốn đơn giản h&oacute;a việc giao h&agrave;ng, gi&uacute;p các chủ cửa h&agrave;ng vừa v&agrave; nhỏ tại Việt Nam tận hưởng một dịch vụ cao cấp, tiện lợi với giá cả hợp l&yacute;.</p>
                                <p className="text-base leading-6 text-black font-medium mt-4">Sở hữu đội ngũ hơn 2 đối tác t&agrave;i xế hoạt động tr&ecirc;n cả nước, phục vụ h&agrave;ng triệu đơn h&agrave;ng, cung cấp giải pháp giao nhận cho hơn 1 chủ shop, chủ doanh nghiệp mỗi tháng tại hơn 1 th&agrave;nh phố lớn của Việt Nam.</p>
                                <p className="text-base leading-6 text-black font-medium mt-4">Delivery Express đ&atilde; hợp tác c&ugrave;ng các t&ecirc;n tuổi như s&agrave;n thương mại điện tử Lazada; chuỗi các ông lớn trong ng&agrave;nh F&amp;B như Ph&uacute;c Long, Highlands, Cheese Coffee, Pizza 4P's v&agrave; các hệ thống bán lẻ sản phẩm điện tử như FPT, Thế giới di động, Điện máy xanh... Với sự tận tâm v&agrave; thấu hiểu nhu cầu thiết yếu của người dân, Delivery Express phát triển v&agrave; hợp tác với các si&ecirc;u thị lớn v&agrave; chuỗi bán lẻ Big C, Lotte, Aeon Mall, Saigon Co.op Mart c&ugrave;ng chuỗi nh&agrave; thuốc Pharmacity, Long Châu, v&agrave; h&agrave;ng triệu khách h&agrave;ng SME khác&hellip;</p>
                                <p className="text-base leading-6 text-black font-medium mt-4">Với niềm tự h&agrave;o luôn giữ vững giá trị cốt l&otilde;i của công ty l&agrave; "công nghệ - vận h&agrave;nh" v&agrave; khẳng định l&agrave; doanh nghiệp đi đầu về công nghệ, xuất sắc về vận h&agrave;nh, Delivery Express, đang trở th&agrave;nh doanh nghiệp cung cấp dịch vụ ship h&agrave;ng nội th&agrave;nh h&agrave;ng đầu cho các chủ shop, chủ doanh nghiệp tại Việt Nam v&agrave; sẽ vươn ra khu vực.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-0 pr-0 ml-10 mr-10">
                    <div className="mt-10 mb-20">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 mx-auto lg:flex max-w-7xl">
                            <div>
                                <Image alt="" src={arrow}
                                    className="inline-block h-18 w-18"
                                // width={405}
                                // height={260}
                                // objectFit="cover"
                                />

                                <h2 className="mt-3 lg:mt-6 leading-10 font-bold">Sứ mệnh</h2>
                                <p className="text-base leading-6 text-black my-4 font-medium">Tạo cơ hội phát triển kinh doanh v&agrave; cuộc sống tiện lợi cho h&agrave;ng triệu người Việt Nam bằng ứng dụng giao h&agrave;ng công nghệ.</p>
                                <Image alt="" src={mission}
                                    className="inline-block w-full"
                                width={600}
                                height={350}
                                objectFit="cover"
                                />
                            </div>
                            <div>
                                <Image alt="" src={eye}
                                    className="inline-block h-18 w-18"
                                // width={405}
                                // height={260}
                                // objectFit="cover"
                                />
                                <h2 className="mt-3 lg:mt-6 leading-10 font-bold">Tầm nh&igrave;n</h2>
                                <p className="text-base leading-6 text-black my-4 font-medium">Vươn l&ecirc;n h&agrave;ng đầu trong lĩnh vực ứng dụng công nghệ giao h&agrave;ng Việt Nam v&agrave; vươn ra khu vực.</p>
                                <Image alt="" src={vision}
                                    className="w-full"
                                width={600}
                                height={400}
                                objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mt-28 relative bg-blue-111">
                    <div className="pl-0 pr-0 ml-10 mr-10 lg:pt-8">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-16">
                            <div className="">
                                <div className="py-3 lg:py-10 lg:pr-16">
                                    <Image alt="" src={quote}
                                        className=""
                                    // width={405}
                                    // height={260}
                                    // objectFit="cover"
                                    />
                                    <br />
                                    <h2 className="text-white font-bold">Trong tổ chức, d&ugrave; nhỏ hay lớn, đều cần c&oacute; sự ngăn nắp v&agrave; minh bạch, th&igrave; các cá nhân mới c&oacute; thể l&agrave;m việc, hợp tác với nhau một cách hiệu quả v&agrave; phát huy tối đa khả năng của m&igrave;nh.</h2>
                                    <div className="text-lg leading-7 text-white my-6 font-semibold">Trần Hiếu Khoa - CEO của Delivery Express</div>
                                </div>
                            </div>
                            <Image alt="" src={ceo}
                                className="rounded-t-full"
                                // width={405}
                                height={260}
                                objectFit="cover"
                            /></div>
                    </div>
                </div>
                <div className="my-20">
                    <div className="pl-0 pr-0 ml-10 mr-10">
                        <h2 className="text-center font-bold">Giá trị cốt l&otilde;i</h2>
                        <div className="my-6 ">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-16">
                                <div className="text-center hover:bg-blue-100 p-5 rounded-xl">
                                    <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="agility_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100" ><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#agility_svg__a)"><path d="M70.832 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#agility_svg__b)"></path></g><circle cx="56.275" cy="54.993" r="24.138" fill="#FFF2E8"></circle><path d="M62.245 16H50.323c-.987 0-1.788.8-1.788 1.788v3.577c0 .987.8 1.788 1.788 1.788h11.922c.988 0 1.788-.8 1.788-1.788v-3.577c0-.987-.8-1.788-1.788-1.788Z" fill="#435A96"></path><path d="M27.67 42.227H15.75a1.788 1.788 0 1 0 0 3.577h11.92a1.788 1.788 0 1 0 0-3.577ZM27.072 58.321a1.788 1.788 0 0 0-1.788-1.788H13.362a1.788 1.788 0 0 0 0 3.577h11.922a1.788 1.788 0 0 0 1.788-1.789ZM26.48 63.686h-8.344a1.788 1.788 0 1 0 0 3.577h8.345a1.788 1.788 0 1 0 0-3.577ZM27.074 51.169a1.789 1.789 0 0 0-1.788-1.789H9.788a1.789 1.789 0 0 0 0 3.577h15.498a1.788 1.788 0 0 0 1.788-1.788Z" fill="#FC8F1D"></path><path d="M56.282 54.745V34.478c-11.175 0-20.266 9.092-20.266 20.267 0 11.175 9.091 20.267 20.266 20.267 11.175 0 20.267-9.092 20.267-20.267H56.282Z" fill="#FF8200"></path><path d="m75.894 36.468 1.917-1.917a1.788 1.788 0 1 0-2.528-2.53l-1.996 1.996a26.713 26.713 0 0 0-13.43-5.857V24.94h-7.153v3.219a26.712 26.712 0 0 0-13.43 5.856l-1.996-1.995a1.79 1.79 0 1 0-2.529 2.529l1.918 1.917a26.724 26.724 0 0 0-7.21 18.278c0 14.79 12.033 26.823 26.824 26.823 14.79 0 26.823-12.033 26.823-26.823a26.723 26.723 0 0 0-7.21-18.277ZM56.28 76.8a22.055 22.055 0 1 1 0-44.11 22.055 22.055 0 0 1 0 44.11Z" fill="#435A96"></path><defs><linearGradient id="agility_svg__b" x1="33.332" y1="52.083" x2="93.749" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
                                    <h4 className="font-semibold my-4">Tốc độ</h4>
                                    <p className="text-base leading-6 text-black font-medium">Luôn dẫn đầu, bắt kịp những công nghệ mới nhất. Luôn nắm bắt sớm nhất nhu cầu khách h&agrave;ng. Đảm bảo nhanh ch&oacute;ng trong tốc độ cung cấp dịch vụ v&agrave; sản phẩm.</p>
                                </div>
                                <div className="text-center hover:bg-blue-100 p-5 rounded-xl">
                                    <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto"><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="together_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100" ><path d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#together_svg__a)"><path d="M70.832 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#together_svg__b)"></path></g><path d="M57.968 71.882 40.243 54.353a2.785 2.785 0 0 1-.003-3.972 2.826 2.826 0 0 1 1.555-.785 2.856 2.856 0 0 1 2.462.788l-4.564-4.514a2.786 2.786 0 0 1-.003-3.972 2.862 2.862 0 0 1 3.747-.228L41.7 39.951a2.79 2.79 0 0 1-.005-3.974 2.824 2.824 0 0 1 1.557-.785 2.857 2.857 0 0 1 2.462.788l1.989 1.967a2.788 2.788 0 0 1-.003-3.972 2.864 2.864 0 0 1 4.017.003l11.519 11.392.032-.045a5.172 5.172 0 0 1 2.006-1.233 5.242 5.242 0 0 1 5.34 1.239l5.371 5.311A5.418 5.418 0 0 1 77.6 54.49l.003 3.323a5.832 5.832 0 0 0 1.738 4.143l1.198 1.184-13.7 13.548-1.53-1.514a5.964 5.964 0 0 0-3.807-1.706 5.535 5.535 0 0 1-3.534-1.585Z" fill="#FECBAA"></path><path d="m66.094 77.428 15.185-15.185c.5-.5 1.311-.5 1.812 0l5.408 5.407c.5.501.5 1.312 0 1.812L73.314 84.647c-.5.5-1.312.5-1.812 0l-5.408-5.407c-.5-.5-.5-1.312 0-1.812Z" fill="#FE5F00"></path><path d="M81.762 69.131a1 1 0 1 0 1.416-1.413 1 1 0 0 0-1.416 1.413Z" fill="#FF8812"></path><path d="M67.245 49.485 62.94 45.55l.035-.045c.634-.58 1.38-.99 2.177-1.236l3.898 3.563a1.098 1.098 0 0 1 0 1.652c-.5.456-1.308.455-1.806 0Z" fill="#FFAE85"></path><path d="M42.907 71.882 60.63 54.353a2.786 2.786 0 0 0 .004-3.972 2.826 2.826 0 0 0-1.555-.785 2.858 2.858 0 0 0-2.462.788l4.564-4.513a2.786 2.786 0 0 0 .003-3.973 2.862 2.862 0 0 0-3.747-.228l1.737-1.718a2.788 2.788 0 0 0 .005-3.974 2.827 2.827 0 0 0-1.558-.784 2.855 2.855 0 0 0-2.461.788l-1.99 1.967a2.789 2.789 0 0 0 .004-3.973 2.864 2.864 0 0 0-4.017.003l-11.52 11.392-.031-.045a5.173 5.173 0 0 0-2.006-1.232 5.242 5.242 0 0 0-5.341 1.237l-5.371 5.312a5.418 5.418 0 0 0-1.614 3.846l-.004 3.323a5.83 5.83 0 0 1-1.738 4.143l-1.197 1.184 13.699 13.548 1.53-1.514a5.964 5.964 0 0 1 3.808-1.706 5.535 5.535 0 0 0 3.534-1.585Z" fill="#FECBAA"></path><path d="M34.78 77.427 19.595 62.243c-.5-.5-1.311-.5-1.812 0l-5.408 5.407c-.5.501-.5 1.312 0 1.812L27.56 84.647c.5.5 1.312.5 1.812 0l5.408-5.407c.5-.5.5-1.312 0-1.813Z" fill="#0E4174"></path><path d="M29.55 79.416a1.056 1.056 0 1 0-1.493-1.495 1.056 1.056 0 0 0 1.492 1.495Z" fill="#EF6085"></path><path d="m33.63 49.485 4.303-3.934-.035-.045a5.707 5.707 0 0 0-2.176-1.236l-3.899 3.563a1.1 1.1 0 0 0 0 1.652c.5.456 1.308.455 1.807 0Z" fill="#FFAE85"></path><path d="M61.087 29.777v24.759c0 1.552-1.222 2.807-2.73 2.807a2.66 2.66 0 0 1-1.598-.532 2.826 2.826 0 0 1-1.132-2.275v6.375a2.837 2.837 0 0 1-1.132 2.276 2.661 2.661 0 0 1-3.178.013 2.815 2.815 0 0 1-1.125-1.938v2.427a2.841 2.841 0 0 1-1.14 2.282 2.656 2.656 0 0 1-3.188-.006 2.826 2.826 0 0 1-1.133-2.276v-2.778c0 .936-.446 1.767-1.132 2.276-.448.335-1 .532-1.597.532-1.507 0-2.73-1.258-2.73-2.808v-16.09l-.053.01a4.865 4.865 0 0 1-2.212-.53c-1.646-.84-2.78-2.587-2.78-4.605v-7.503a5.52 5.52 0 0 1 1.547-3.844l2.283-2.348a5.938 5.938 0 0 0 1.667-4.14v-1.673h18.633v2.138c0 1.422.504 2.796 1.416 3.864a5.526 5.526 0 0 1 1.313 3.587Z" fill="#FEDFC5"></path><path d="M60.651 50.211a2.787 2.787 0 0 0-1.534-.777 2.81 2.81 0 0 0-2.428.78l4.502-4.469a2.764 2.764 0 0 0 .003-3.933 2.816 2.816 0 0 0-3.696-.226l1.714-1.701a2.768 2.768 0 0 0 .004-3.935 2.783 2.783 0 0 0-1.536-.777 2.812 2.812 0 0 0-2.428.78l-1.962 1.948a2.768 2.768 0 0 0 .003-3.933 2.818 2.818 0 0 0-3.962.003l-11.362 11.28-.032-.045a5.098 5.098 0 0 0-1.978-1.22 5.181 5.181 0 0 0-2.658-.163 7.437 7.437 0 0 0 2.914 2.546c.336.165.68.303 1.03.415v13.987c0 2.806 2.298 5.088 5.122 5.088.34 0 .675-.032 1-.096a5.08 5.08 0 0 0 1.594 1.882c.425.307.888.543 1.376.706l14.31-14.207a2.766 2.766 0 0 0 .004-3.933Z" fill="#FFAE85"></path><path d="M63.867 54.867V44.859c-.243.17-.474.365-.69.582l-.033.045L51.67 33.987a2.826 2.826 0 0 0-4.793 1.549c-.14.866.126 1.788.794 2.457l-1.982-1.985a2.822 2.822 0 0 0-2.452-.796 2.8 2.8 0 0 0-1.552.793 2.808 2.808 0 0 0-.826 2.004c0 .725.278 1.453.83 2.007l1.731 1.734a2.823 2.823 0 0 0-4.56 2.236c0 .725.278 1.45.83 2.004l4.548 4.557a2.822 2.822 0 0 0-4.002-.004 2.84 2.84 0 0 0 .003 4.01l11.83 11.854c.317.06.642.092.971.092 1.097 0 2.145-.341 3.027-.982a5.158 5.158 0 0 0 2.146-4.207v-1.277c.16.015.32.022.482.022 2.852 0 5.173-2.327 5.173-5.188Z" fill="#FFAE85"></path><path d="M61.087 29.777v24.759c0 1.552-1.222 2.807-2.73 2.807-.04 0-.085 0-.128-.003a2.657 2.657 0 0 1-1.466-.527l-.004-.002a2.826 2.826 0 0 1-1.132-2.275v6.375a2.837 2.837 0 0 1-1.132 2.276 2.661 2.661 0 0 1-3.178.013 2.815 2.815 0 0 1-1.125-1.938v2.427a2.841 2.841 0 0 1-1.14 2.282 2.656 2.656 0 0 1-3.188-.006 2.826 2.826 0 0 1-1.133-2.276v-2.778c0 .936-.446 1.767-1.132 2.276-.448.335-1 .532-1.597.532-1.507 0-2.73-1.258-2.73-2.808v-16.09l-.053.01a4.865 4.865 0 0 1-2.212-.53c-1.646-.84-2.78-2.587-2.78-4.605v-7.503a5.52 5.52 0 0 1 1.547-3.844l2.283-2.348a5.978 5.978 0 0 0 1.667-4.14v-1.673h18.633v2.138c0 .48.05.985.18 1.446.217.89.64 1.719 1.236 2.418a5.57 5.57 0 0 1 1.313 3.587Z" fill="#FEDFC5"></path><path d="M61.088 29.75v24.687c0 1.547-1.203 2.8-2.69 2.8-.04 0-.083 0-.126-.004a2.6 2.6 0 0 1-1.445-.525l.046-23.789c0-.144-.031-.371-.09-.66-1.026-5.196-5.246-8.678-10.35-8.678h-6.648a6.03 6.03 0 0 0 .252-1.724v-1.669h18.36v2.132c0 .478.05.982.178 1.442a5.892 5.892 0 0 0 1.218 2.41 5.594 5.594 0 0 1 1.295 3.578Z" fill="#FECBAA"></path><path d="M59.806 20.188H38.29a1.281 1.281 0 0 1-1.283-1.278v-7.632c0-.706.575-1.278 1.283-1.278h21.515a1.28 1.28 0 0 1 1.283 1.278v7.632c0 .706-.575 1.278-1.283 1.278Z" fill="#125598"></path><path d="M42.824 15.688a1.056 1.056 0 1 0-2.113-.001 1.056 1.056 0 0 0 2.113 0Z" fill="#5186FF"></path><path d="M57.135 41.861v15.11a2.779 2.779 0 0 1-1.154-2.258v6.323a2.773 2.773 0 0 1-1.153 2.258V41.86a1.154 1.154 0 0 1 2.307 0ZM51.592 41.861v21.445a2.78 2.78 0 0 1-1.146-1.92v2.406a2.779 2.779 0 0 1-1.16 2.264V41.86a1.154 1.154 0 0 1 2.306 0ZM46.041 41.861V66.05a2.78 2.78 0 0 1-1.153-2.257v-2.756a2.78 2.78 0 0 1-1.154 2.258V41.86a1.154 1.154 0 0 1 2.307 0ZM39.326 39.582v5.495l-.054.009a5.06 5.06 0 0 1-2.252-.526v-4.978a1.154 1.154 0 0 1 2.306 0Z" fill="#FECBAA"></path><defs><linearGradient id="together_svg__b" x1="33.332" y1="52.083" x2="93.749" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
                                    <h4 className="font-semibold my-4">Đồng h&agrave;nh</h4>
                                    <p className="text-base leading-6 text-black font-medium">Để tiến xa, ch&uacute;ng ta đi c&ugrave;ng nhau. Đồng h&agrave;nh để thấu hiểu v&agrave; đ&oacute;n đầu những nhu cầu mới, để luôn c&oacute; mặt khi cần v&agrave; hỗ trợ tr&ecirc;n từng chuyến h&agrave;ng.</p>
                                </div>
                                <div className="text-center hover:bg-blue-100 p-5 rounded-xl">
                                    <svg width="101" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#BDE6F2"></path><mask id="innovate_svg__a" maskUnits="userSpaceOnUse" x="0" y="0" width="101" height="100"><path d="M50.5 100c27.614 0 50-22.386 50-50S78.114 0 50.5 0 .5 22.386.5 50s22.386 50 50 50Z" fill="#C1C7CD"></path></mask><g mask="url(#innovate_svg__a)"><path d="M71.332 143.75c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z" fill="url(#innovate_svg__b)"></path></g><path d="M43.182 62.924c0-5.751-6.542-8.263-9.191-12.677-3.052-5.085-3.294-11.655-1.35-17.177 2.56-7.272 9.74-11.992 17.342-12.249a20.756 20.756 0 0 1 1.394 0c7.601.257 14.782 4.977 17.342 12.25 1.944 5.52 1.702 12.09-1.35 17.176-2.65 4.414-9.19 6.926-9.19 12.677l-7.5 3.322-7.497-3.322Z" fill="#FFCE1C"></path><path d="M47.222 62.924c0-5.751-6.541-8.263-9.19-12.677-3.052-5.085-3.294-11.655-1.35-17.177 2.41-6.848 8.919-11.432 16.018-12.157a19.502 19.502 0 0 0-2.717-.092c-7.602.257-14.782 4.977-17.342 12.25-1.944 5.521-1.702 12.091 1.35 17.176 2.65 4.414 9.19 6.926 9.19 12.677l7.499 3.322 2.02-.895-5.478-2.427Z" fill="#ECB000"></path><path d="M26.31 46.54h-4.8a1.01 1.01 0 1 1 0-2.02h4.8a1.01 1.01 0 1 1 0 2.02ZM50.682 17.82a1.01 1.01 0 0 1-1.01-1.01v-4.8a1.01 1.01 0 1 1 2.02 0v4.8a1.01 1.01 0 0 1-1.01 1.01ZM31.243 26.68c-.178 0-.36-.047-.523-.146l-4.104-2.487a1.01 1.01 0 0 1 1.047-1.728l4.104 2.486a1.01 1.01 0 0 1-.524 1.875ZM79.849 46.54h-4.8a1.01 1.01 0 1 1 0-2.02h4.8a1.01 1.01 0 1 1 0 2.02ZM70.113 26.68a1.01 1.01 0 0 1-.525-1.874l4.105-2.487a1.01 1.01 0 0 1 1.047 1.728l-4.105 2.487a1.009 1.009 0 0 1-.522.146Z" fill="#FFCE1C"></path><path d="M58.174 62.924H43.177a2.95 2.95 0 1 0 0 5.902l7.499 2.95 7.498-2.95a2.95 2.95 0 1 0 0-5.902Z" fill="#125598"></path><path d="M47.218 68.826a2.95 2.95 0 1 1 0-5.902h-4.04a2.95 2.95 0 0 0 0 5.902l7.498 2.95 2.02-.795-5.478-2.155Z" fill="#0E4174"></path><path d="M47.863 70.504v5.631a2.816 2.816 0 1 0 5.632 0v-5.631h-5.632Z" fill="#0E4174"></path><path d="M58.174 68.826H43.177a2.95 2.95 0 1 0 0 5.901h14.997a2.95 2.95 0 1 0 0-5.901Z" fill="#125598"></path><path d="M44.267 71.776a2.95 2.95 0 0 1 2.951-2.95h-4.04a2.95 2.95 0 1 0 0 5.901h4.04a2.95 2.95 0 0 1-2.95-2.95Z" fill="#0E4174"></path><defs><linearGradient id="innovate_svg__b" x1="33.832" y1="52.083" x2="94.249" y2="139.583" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD5DF"></stop><stop offset="0" stopColor="#5FBFDD"></stop><stop offset="0.391" stopColor="#3D89B5"></stop><stop offset="1" stopColor="#14528B"></stop></linearGradient></defs></svg>
                                    <h4 className="font-semibold my-4">Đổi mới</h4>
                                    <p className="text-base leading-6 text-black font-medium">Tại Ahamove, đổi mới luôn diễn ra từng giờ, từng ng&agrave;y, trong mọi hoạt động. Ch&uacute;ng ta không h&agrave;i lòng với th&agrave;nh quả đang c&oacute; v&agrave; luôn t&igrave;m kiếm những giải pháp tốt hơn.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className="mt-20">
                    <div className="pl-0 pr-0 ml-10 mr-10">
                        <h2 className="text-center">Văn hoá tại Ahamove</h2>
                        <div className="text-lg leading-7 text-black my-2 text-center">Always Moving - Không ngừng chuyển động!</div>
                        <div className="my-10">
                            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                                <div>
                                    <Image alt="" src={culture1}
                                        width={405}
                                        height={260}
                                        objectFit="cover"
                                    />
                                    <div className="text-xl leading-7 text-black font-semibold my-5">Công bằng v&agrave; Tôn Trọng</div>
                                    <p className="text-base leading-6 text-black font-medium">Ahamove lấy "con người l&agrave;m trọng tâm", đề cao sự minh bạch, công bằng v&agrave; tôn trộng giá trị của mỗi cá nhân. Mỗi nhân tố luôn l&agrave; một mắt x&iacute;ch quan trọng trong h&agrave;nh tr&igrave;nh phát triển v&agrave; chinh phục đỉnh cao của Ahamove.</p>
                                </div>
                                <div>
                                    <Image alt="" src={culture1}
                                        width={405}
                                        height={260}
                                        objectFit="cover"
                                    />
                                    <div className="text-xl leading-7 text-black font-semibold my-5">Gắn kết v&agrave; Phát triển</div>
                                    <p className="text-base leading-6 text-black font-medium">Tại Aha, các hoạt động, chương tr&igrave;nh gi&uacute;p tăng t&iacute;nh kết nối, gắn kết v&agrave; phát triển tập thể luôn được ch&uacute; trọng. V&igrave; Ahamove hiểu rằng: Chỉ khi ch&uacute;ng ta l&agrave; một, ch&uacute;ng ta mới c&oacute; thể vươn đến vị tr&iacute; số một!</p>
                                </div>
                                <div>
                                    <Image alt="" src={culture1}
                                        width={405}
                                        height={260}
                                        objectFit="cover"
                                    />
                                    <div className="text-xl leading-7 text-black font-semibold my-5">Truyền cảm hứng v&agrave; Chia sẻ</div>
                                    <p className="text-base leading-6 text-black font-medium">Ahamove xây dựng một môi trường l&agrave;m việc sẻ chia, lan toả những năng lượng t&iacute;ch cực, truyền cảm hứng v&agrave; tạo động lực để c&ugrave;ng nhau tạo n&ecirc;n những việc &yacute; nghĩa.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <a href=''>
                                <button className='bg-primary text-white w-auto p-2 cursor-pointer rounded-md border border-transparent text-center text-base leading-6 font-semibold mt-4 mb-4' type='submit'>
                                    Gia nhập Ahamove ngay
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
About.getLayout = function getLayout(page: any) {
    return (
        <LayoutDefault >{page}</LayoutDefault>
    )
}

