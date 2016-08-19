var Heading = React.createClass({
        render: function() {
          return (
            <h1>Where should we eat?</h1>
          )
        }
      });

      ReactDOM.render(
        <Heading/>,
        document.getElementById('app')
      );