import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp1 = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

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
        .min(5, 'Địa chỉ quá ngắn.')
        .max(100, 'Địa chỉ quá dài')
        .required('Vui lòng nhập địa chỉ.'),
});
export const passwordSchema = Yup.object().shape({
    newPassword: Yup.string().matches(passwordRegExp, 'Mật khẩu ít nhất 8 ký tự gồm chữ in hoa và chữ thường'),
    newPasswordAgain: Yup.string().matches(passwordRegExp, 'Mật khẩu ít nhất 8 ký tự gồm chữ in hoa và chữ thường'),
});