
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
                <h1 style={ TitleStyle }> { this.props.children } </h1>
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
            title = this.props.children;
        }

        return (
            <button onClick={ this.toggleClick } className={ btnClass }>
                { title }
            </button>
        );
    }
});


var Form = React.createClass({

    getInitialState:function(){
        return {
            name:'',
            email:'',
            subject:'3',
            message:''
        }
    },

    handleNameChange:function(e){
        this.setState({name: e.target.value});
    },
    handleEmailChange:function(e){
        this.setState({email: e.target.value});
    },
    handleSubjectChange:function(e){
        this.setState({subject: e.target.value});
    },
    handleMessageChange:function(e){
        this.setState({message: e.target.value});
    },
    handleSubmit:function(e){
        e.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var subject = this.state.subject;
        var message = this.state.message.trim();

        if(!name || !email || !subject || !message){
            return;
        }
        this.props.onContactSubmit({
            id: this.props.idNumber,
            name: name,
            email:email,
            subject:subject,
            message:message
        });
    },

   render: function() {
       var InputStyle = {
           padding: "20px",
           fontSize: "16px",
           color: "#A7A5A5"
       };

       return (
           <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input type="text" className="form-control" onChange={ this.handleNameChange } placeholder="Name" style={InputStyle}/>
               </div>
               <div className="form-group">
                   <label htmlFor="email">Email</label>
                   <input type="email" className="form-control" onChange={this.handleEmailChange} placeholder="Email" style={InputStyle}/>
               </div>
               <div className="form-group">
                   <label htmlFor="subject">Subject</label>
                   <select defaultValue={this.state.subject} className="form-control" onChange={this.handleSubjectChange}>
                       <option value="1">Angular</option>
                       <option value="2">JQuery</option>
                       <option value="3">React</option>
                   </select>
               </div>
               <div className="form-group">
                   <label htmlFor="message">Mensagem</label>
                   <textarea className="form-control" onChange={this.handleMessageChange} rows="3" style={InputStyle}/>
               </div>
               <Button textActive="Loading...">
                   Enviar.
               </Button>
           </form>
       );
   }
});

var Contact = React.createClass({
   render: function(){
       return (
           <tr>
               <th scope="row">{this.props.idNumber}</th>
               <td>{this.props.name}</td>
               <td>{this.props.email}</td>
               <td>{this.props.subject}</td>
               <td>{this.props.children}</td>
           </tr>
       );
   }
});

var List = React.createClass({
    render: function () {
        var contactNodes = this.props.data.map(function (contact) {
            return(
                <Contact idNumber={contact.id} name={contact.name} email={contact.email} subject={contact.subject}>
                    {contact.message}
                </Contact>
            );
        });

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                </tr>
                </thead>
                <tbody>
                    {contactNodes}
                </tbody>
            </table>
        );
    }
});
