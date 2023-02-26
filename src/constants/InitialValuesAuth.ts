import { IFormSignUp, IFormSignIn } from '@/types/components/AuthLayoutWrapper/type';

export const initialSignupalues: IFormSignUp = {
	group_form_username: '',
	group_form_email: '',
	group_form_address: '',
	group_form_male: '',
	group_form_female: '',
	password1: '',
	password2: '',
};

export const initialSigninValues: IFormSignIn = {
	group_form_email: '',
	group_form_password: '',
};
