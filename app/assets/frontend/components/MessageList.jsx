export default class MessageList extends React.Component {
render() {
	let messages = this.props.messages.map(message => <Message {...message} />)
	return (
		<div>
		<ul className="collection">
		{messages}
		 </ul>
		</div> 
		);
	}
}

}
