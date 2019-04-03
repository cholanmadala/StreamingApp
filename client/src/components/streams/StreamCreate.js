import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {

	renderError = ({error, touched}) => {
		if(touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>				
				</div>
			);
		}
	}

	renderInput = ({input, label, meta}) => {
		const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	}

	onSubmit = (formValues) => {
		console.log('submitting...', formValues);
		this.props.createStream(formValues);
	}

	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<h3>StreamCreate</h3>
				<Field name="title" component={this.renderInput} label="Enter Title"/>
				<Field name="description" component={this.renderInput} label="Enter Description"/>
				<button type="submit" className="ui button primary">Submit</button>
				<button type="cancel" className="ui button primary">Cancel</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}

	if (!formValues.description) {
		errors.description = "You must enter a description";
	}
	return errors;
}

const formedStreamCreate = reduxForm({
	form: 'streamCreate',
	validate
})(StreamCreate);

export default connect(null,{createStream})(formedStreamCreate);