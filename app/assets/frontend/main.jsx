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

   addMessage(newMessage) {
 +    let newMessagesList = this.state.messagesList;
 +    newMessagesList.unshift({id: Date.now(), name: 'Guest', body: newMessage})
 +    // rerender using the new tweetsList state object...
 +    this.setState({messagesList: newMessagesList, edit: false});
 +  }
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