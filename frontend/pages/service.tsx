import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import LayoutDefault from '../layouts/default'
import dichvuhoatoc from '../assets/images/service/thumb-dichvuhoatoc.png'
import chuyenphatnhanh from '../assets/images/service/thumb-dichvuphatnhanh.png'
import chuyenphattietkiem from '../assets/images/service/thumb-dichvutietkiem.png'
import vanchuyengiatricao from '../assets/images/service/thumb-hanghoa.png'
import phathangthutien from '../assets/images/service/thumb-phathangthutien.png'

const Service = () => {
  return (
    <section>
      <div >
        <div >
          <div>
            <h1 className='text-4xl text-center py-2 text-blue'>Các Dịch Vụ Của <strong>FUTA EXPRESS</strong></h1>
            <div className=''>
              <div className='flex gap-2 justify-center items-start py-20'>
                <div>
                  <div className='text-center px-10' >
                    <Image alt="" src={dichvuhoatoc}
                      width={110}
                      height={110} />
                    <h3 className='text-secondary text-2xl py-3'>Dịch vụ hỏa tốc</h3>
                    <p className='text-justify'>Mỗi ng&agrave;y, c&oacute; h&agrave;ng ngh&igrave;n lượt xe hoạt động tr&ecirc;n hầu hết các tỉnh th&agrave;nh trong cả nước với thời gian giữa các 
                      chuyến xe ngắn hơn l&agrave; lợi thế để công ty FUTAEx cung cấp đến khách h&agrave;ng dịch vụ chuyển phát nhanh hỏa tốc, 
                      đáp ứng y&ecirc;u cầu khẩn cấp, ch&iacute;nh xác về thời gian của khách h&agrave;ng.</p>
                  </div>
                </div>
                <div>
                  <div className='text-center'>
                    <Image alt="" src={chuyenphatnhanh}
                      width={110}
                      height={110} />
                    <h3 className='text-secondary text-2xl py-3'>Chuyển phát nhanh</h3>
                    <p className='text-justify'>Công ty FUTAEx nhận chuyển phát nhanh các loại thư t&iacute;n, tận văn phòng, phục vụ cho nhu cầu thiết yếu của các doanh nghiệp.</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className='text-center'>
                    <Image alt="" src={chuyenphattietkiem}
                      width={110}
                      height={110} />
                    <h3 className='text-secondary text-2xl py-3'>Dịch vụ chuyển phát tiết kiệm</h3>
                    <p>L&agrave; dịch vụ mang lại lợi &iacute;ch t&agrave;i ch&iacute;nh cho khách h&agrave;ng, thay v&igrave; chuyển phát nhanh, đ&uacute;ng giờ, khách h&agrave;ng c&oacute; thể lựa chọn khung thời gian quy định để tiết kiệm chi ph&iacute;.</p>
                    <p >Ngo&agrave;i ra dịch vụ chuyển phát tiết kiệm còn nhằm đáp ứng nhu cầu chuyển phát nhanh h&agrave;ng h&oacute;a số lượng lớn với giá cả hợp l&yacute;.</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 justify-between items-start py-5'>
                <div>
                  <div className='text-center px-10'>
                    <Image alt="" src={vanchuyengiatricao}
                      width={110}
                      height={110} />
                    <h3 className='text-secondary text-2xl py-3'>Vận chuyển h&agrave;ng h&oacute;a giá trị cao</h3>
                    <p className='text-justify'>Mỗi ng&agrave;y, c&oacute; h&agrave;ng ngh&igrave;n lượt xe hoạt động tr&ecirc;n hầu hết các tỉnh th&agrave;nh trong cả nước với thời gian giữa các chuyến xe ngắn hơn l&agrave; lợi thế để công ty FUTAEx cung cấp đến khách h&agrave;ng dịch vụ chuyển phát nhanh hỏa tốc, đáp ứng y&ecirc;u cầu khẩn cấp, ch&iacute;nh xác về thời gian của khách h&agrave;ng.</p>
                  </div>
                </div>
                <div>
                  <div className='text-center'>
                    <Image alt="" src={phathangthutien}
                      width={110}
                      height={110} />
                    <h3 className='text-secondary text-2xl py-3'>Dịch vụ phát h&agrave;ng v&agrave; thu tiền ( COD )</h3>
                    <p className='text-justify'>Với phương châm coi chất lượng l&agrave; uy t&iacute;n v&agrave; danh dự, FUTAEx còn cung cấp dịch vụ mới cho khách h&agrave;ng c&oacute; nhu cầu vận chuyển h&agrave;ng h&oacute;a, thu nhận tiền từ đối tác. FUTAEx sẽ đại diện cho khách h&agrave;ng giao, chuyển h&agrave;ng, đồng thời thu nhận tiền h&agrave;ng, đảm bảo đủ số lượng, thời gian chuyển tiền theo hợp đồng cho khách h&agrave;ng.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
  )
}


export default Service

Service.getLayout = function getLayout(page: any) {
    return (
      <LayoutDefault >{page}</LayoutDefault>
    )
  }
  