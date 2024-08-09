
import * as Yup from 'yup';

export const Transferschema = Yup.object().shape({
  walletaddress: Yup.string()
    .required('Wallet address is required')
    .matches(/^[0-9a-zA-Z]{10}$/, 'Wallet address must be exactly 10 characters'),
  walletname: Yup.string()
    .required('Wallet name is required')
    .min(2, 'Wallet name must be at least 2 characters')
    .max(50, 'Wallet name must be less than 50 characters'),
  ammount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive')
    .min(1, 'Amount must be at least 1'),
  remark: Yup.string()
    .max(100, 'Remark must be less than 100 characters'),
  // Add other fields as necessary
});
