
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
});

var Title = React.createClass({
    render: function(){
        var TitleStyle = {
            color:"#777676",
            fontSize:"35px"
        };

        return (
            <div className="row">
                <h1 style={ TitleStyle }> { this.props.title } </h1>
            </div>
        );
    }
});


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
});

var Form = React.createClass({
   render: function(){
       var InputStyle = {
            padding:"20px",
            fontSize:"16px",
            color:"#A7A5A5"
       };

       return(
           <form>
               <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input type="text" className="form-control" id="name" placeholder="Name" style={InputStyle}/>
               </div>
               <div className="form-group">
                   <label htmlFor="email">Email</label>
                   <input type="email" className="form-control" id="email" placeholder="Email" style={InputStyle} />
               </div>
               <div className="form-group">
                   <label htmlFor="message">Mensagem</label>
                   <textarea className="form-control" id="message" rows="3" style={InputStyle}></textarea>
               </div>
           </form>
       );
   }


});