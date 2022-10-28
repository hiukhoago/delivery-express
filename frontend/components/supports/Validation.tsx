import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp1 = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
const checkNumber = /[0-9]/

export const UpdateProfileSchema = Yup.object().shape({

    name: Yup.string()
        .min(5, 'Họ và tên tối thiểu 5 ký tự!')
        .max(50, 'Họ và tên tối đa 50 ký tự!')
        .required('Vui lòng nhập Họ và tên.'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Không đúng định dạng số')
        .matches(phoneRegExp1, 'Phải bắt đầu bằng số 0 và đủ 10 ký tự')
        .min(10, 'Số điện thoại chưa đủ 10 số')
        .max(10, 'số điện thoại quá 10 số rồi')
        .required('Vui lòng nhập số điện thoại.'),
    // email: Yup.string().email('Email không hợp lệ').required('Yêu cầu nhập Email.'),
    address: Yup.string()
        .min(5, 'Địa chỉ quá ngắn!')
        .max(100, 'Địa chỉ quá dài!')
        .required('Vui lòng nhập địa chỉ.'),
});
export const NewsSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, 'Tiêu đề tối thiểu 2 ký tự!')
        .max(50, 'Tiêu đề tối đa 50 ký tự!')
        .required('Vui lòng nhập tiêu đề tin tức.'),
    content: Yup.string()
        .min(5, 'Nội dung quá ngắn!')
        .max(5000, 'Nội dung quá dài!')
        .required('Vui lòng nhập nội dung.'),
    image: Yup.string()
        .required('Vui lòng chọn ảnh.'),
});
export const ServiceSchema = Yup.object().shape({
    code: Yup.string()
        .max(50, 'Mã dịch vụ tối đa 50 ký tự!')
        .required('Vui lòng nhập mã dịch vụ.'),
    name: Yup.string()
        .min(2, 'Tên dịch vụ quá ngắn!')
        .max(50, 'Tên dịch vụ tối đa 50 ký tự!')
        .required('Vui lòng nhập tên dịch vụ.'),
    fee: Yup.number()
        .required('Vui lòng nhập đơn giá'),
    content: Yup.string()
        .min(5, 'Nội dung quá ngắn!')
        .max(5000, 'Nội dung quá dài!')
        .required('Vui lòng nhập nội dung.'),
});
export const OrderShema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Họ và tên tối thiểu 5 ký tự!')
        .max(50, 'Họ và tên tối đa 50 ký tự!')
        .required('Vui lòng nhập Họ và tên.'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Không đúng định dạng số')
        .matches(phoneRegExp1, 'Phải bắt đầu bằng số 0 và đủ 10 ký tự')
        .min(10, 'Số điện thoại chưa đủ 10 số')
        .max(10, 'số điện thoại quá 10 số rồi')
        .required('Vui lòng nhập số điện thoại.'),
    nameProduct: Yup.string()
        .min(5, 'Họ và tên tối thiểu 5 ký tự!')
        .max(50, 'Họ và tên tối đa 50 ký tự!')
        .required('Vui lòng nhập Họ và tên.'),
    height: Yup.number()
        .required('Vui lòng nhập tổng khối lượng sản phẩm'),
    amount: Yup.number()
        .required('Vui lòng nhập số lượng sản phẩm'),
    value: Yup.number()
        .required('Vui lòng nhập giá trị bưu kiện'),
});
export const AccountSchema = Yup.object().shape({

    name: Yup.string()
        .min(5, 'Tên tài khoản tối thiểu 5 ký tự!')
        .max(50, 'Tên tài khoản tối đa 50 ký tự!')
        .required('Vui lòng nhập tên tài khoản.'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Không đúng định dạng số')
        .matches(phoneRegExp1, 'Phải bắt đầu bằng số 0 và đủ 10 ký tự')
        .min(10, 'Số điện thoại chưa đủ 10 số')
        .max(10, 'số điện thoại quá 10 số rồi')
        .required('Vui lòng nhập số điện thoại.'),
    email: Yup.string().email('Email không hợp lệ').required('Yêu cầu nhập Email.'),
    password: Yup.string().matches(passwordRegExp, 'Mật khẩu ít nhất 8 ký tự gồm chữ in hoa và chữ thường'),
});
export const passwordSchema = Yup.object().shape({
    newPassword: Yup.string().matches(passwordRegExp, 'Mật khẩu ít nhất 8 ký tự gồm chữ in hoa và chữ thường'),
    newPasswordAgain: Yup.string().matches(passwordRegExp, 'Mật khẩu ít nhất 8 ký tự gồm chữ in hoa và chữ thường'),
});
export const idSchema = Yup.object().shape({
    id: Yup.string()
    .matches(checkNumber, 'Vui lòng nhập mã đơn hàng bằng số !')
    .min(8, 'Mã đơn hàng chưa đủ 8 số.')
    .max(8, 'Mã đơn hàng quá 8 số rồi.')
});
export const supportSchema = Yup.object().shape({
    volume: Yup.string()
    .matches(checkNumber, 'Vui lòng nhập khối lượng bằng số !')
    .required('Vui lòng nhập khối lượng sản phẩm.'),
    amount:Yup.string()
    .matches(checkNumber, 'Vui lòng nhập số lượng bằng số !')
    .required('Vui lòng nhập số lượng sản phẩm.'),
    serviceType: Yup.string().required('Vui lòng chọn loại dịch vụ.'),
});