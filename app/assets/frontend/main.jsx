import MessageBox from './components/MessageBox'
import MessageBox from './components/MessageList'


class Main extends React.Component {
	render() {
	return (
		<div className="container">
		<MessageBox />
		<MessageList />
		</div> 
		);
	}
}

let documentReady = () => {
	React.render(
	<Main />,
	document.getElementById('react')
	);
};

$(documentReady);