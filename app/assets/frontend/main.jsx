import MessageBox from './components/MessageBox'
import MessageBox from './components/MessageList'

let mockMessages = [
   { id: 1, name: 'John Doe', body: 'Hello World! #1' },
   { id: 2, name: 'Sarah Olah', body: 'Hello World! #2' },
   { id: 3, name: 'Linus Pharaoh', body: 'Hello World! #3' },
 ]

class Main extends React.Component {
	constructor(props) {
		  super(props);
		  this.state = { messageList: [] };
   }


class Main extends React.Component {
	render() {
	return (
		<div className="container">
		<MessageBox />
		<MessageList messages={mockMessages}/>
		</div> 
		);
	}
}

  formattedMessages(newMessageList) {
     let formattedMessageList = newMessageList.map(Message => {
       Message.formattedDate = moment(Message.created_at).fromNow();
       return Message;
     })
 
     return {
       MessagesList: formattedMessageList
     };
   }


 addMessage(newMessage) {
    $.ajax({
      url: "/Messages",
      method: "POST",
      data: { Message: { body: newMessage } },
      dataType: "json"
    })
    .success(Message => {
      let newMessagesList = this.state.MessagesList;
      newMessagesList.unshift(Message)
       this.setState(this.formattedTweets(newTweetsList));
     
    })
    .error(error => console.log(error))
  }

  componentDidMount() {
     $.ajax({
       url: "/messages",
       dataType: "json"
     })
     .success(data => this.setState((this.formattedMessages(data)))
     .error(error => console.log(error))
   }


let documentReady = () => {
	let reactNode = document.getElementById('react');
	if (reactNode) {
		console.log(reactNode);
		// // render directly... or
       // R.render(<h1>Hello World</h1>,reactNode);
  		// render from a component (inline or separate file)
     R.render(<Main />, reactNode);
   }
  }		 
  $(documentReady);		