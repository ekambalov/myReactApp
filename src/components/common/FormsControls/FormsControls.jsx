import React from 'react';
import styles from './FormsControls.module.css';

export const FormControl = ({ input, meta, child, ...props }) => {
	let hasError = meta.touched && meta.error;
	return (
		<div className={styles.formControls + ' ' + (hasError ? styles.error : '')}>
			{props.children}
			{hasError && <span> {meta.error}</span>}
		</div>
	);
};

export const Textarea = props => {
	const { input, meta, ...restProps } = props;
	return (
		<FormControl {...props}>
			<textarea {...restProps} {...input} />
		</FormControl>
	);
};
export const Input = props => {
	const { input, meta, ...restProps } = props;
	return (
		<FormControl {...props}>
			<input {...restProps} {...input} />
		</FormControl>
	);
};
