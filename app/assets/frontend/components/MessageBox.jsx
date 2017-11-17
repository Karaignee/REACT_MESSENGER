export default class MessageBox extends React.Component {

	sendMessage(event) {
     event.preventDefault();
     // call parent prop which in turn calls
     // the method to add the message in the list
     this.props.sendMessage(this.refs.messageextArea.value);
     this.refs.messageTextArea.value = '';
   }

render() {
	return (
		<div>
		<form onSubmit={this.sendMessage.bind(this)}>
		<textarea ref="messageTextArea" />
		<label> What is your message? </label>
		<button type="submit" className="btn right">Send</button>
		</form>
		</div> 
		);
	}
}

}