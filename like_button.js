
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const root = ReactDOM.createRoot(document.querySelector('#like_button_container'));
root.render(e(LikeButton ));

//JSX
/*'use strict'

//const e= React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }
    render(){
        if(this.state.liked) {
            return 'you like this picture.';
        }
        return(
            <button onClick={() => this.setState({liked: true})}>
                like
            </button>
        );
    }
}
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<LikeButton />)
let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
*/