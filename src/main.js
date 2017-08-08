
var Nav = React.createClass({
    render : function(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href={ this.props.linkUrl } className="navbar-brand">
                            { this.props.title }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
})

var Title = React.createClass({
    render: function(){
        return (
            <div className="row">
                <h1> { this.props.title } </h1>
            </div>
        );
    }
})


var Button = React.createClass({

    getInitialState:function(){
      return {
        click:false
      };
    },
    toggleClick:function(){
        this.setState({
           click: !this.state.click
        });
    },
    render: function(){

        var btnClass = null;
        var title = null;
        if (this.state.click){
            btnClass = 'btn btn-warning';
            title = this.props.textActive;
        }else{
            btnClass = 'btn btn-success';
            title = this.props.title;
        }

        return (
              <button onClick={ this.toggleClick } className={ btnClass }>
                  { title }
              </button>
        );
    }
})

var Page = React.createClass({
   render:function(){
       return(
            <myElement>
                <Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title title="My Component title!" />
                    <div className="row">
                        <Button title="My Button" textActive="Loading..." />
                    </div>
                </div>
            </myElement>

       );
   }

});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);