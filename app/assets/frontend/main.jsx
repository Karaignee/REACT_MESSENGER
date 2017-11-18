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
      // rerender using the new MessagesList state object...
      this.setState({MessagesList: newMessagesList, edit: false});
    })
    .error(error => console.log(error))
  }

  componentDidMount() {
     $.ajax({
       url: "/messages",
       dataType: "json"
     })
     .success(data => this.setState({MessagesList: data}))
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