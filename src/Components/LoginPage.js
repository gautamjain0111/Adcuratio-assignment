import React from "react";
import '../Styles/LoginPage.css'
import DataComponent from "./DataComponent";

class LoginPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email:'',
            password:'',
            showDataPage:false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})	
	}

	handleSubmit(event){
		const { password,email } = this.state;
		const regularExpressionPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		const regularExpressionEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        const isPasswordOk = regularExpressionPassword.test(password);
		const isEmailOk = regularExpressionEmail.test(email)


        if(isEmailOk){
			if(isPasswordOk){
				this.setState({
					showDataPage:true
				});
			}
			else{
				alert("Please Enter Valid password");
				this.setState({
					password:''
				});
			}
		}
		else{
			alert("Please Enter Valid Email and Password");
				this.setState({
					email:'',
					password:''
				});
		}
        //event.preventDefault();
	}

	render(){
        if(this.state.showDataPage){
			return <DataComponent />
		}
		return(
			
		<div className="login-box">
			<h2>Login</h2>
			<form>
				<div className="user-box">
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
					<label>Email</label>
				</div>
				<div className="user-box">
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
					<label>Password</label>
				</div>
				<button onClick={this.handleSubmit}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Submit
				</button>
			</form>
		</div>
		);
	}
}

export default LoginPage