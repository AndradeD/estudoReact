var data = [
    {
        id:1,name:'Mariana',email:'mariana@mail.com',subject:'3',message:'My message test'
    },
    {
        id:2,name:'João',email:'joao@mail.com',subject:'1',message:'My message test'
    }
];

var Page = React.createClass({

    getInitialState: function(){
        return {
            data:[
                {
                    id:1,name:'Mariana',email:'mariana@mail.com',subject:'3',message:'My message test'
                },
                {
                    id:2,name:'João',email:'joao@mail.com',subject:'1',message:'My message test'
                }
            ]}
    },

    handleContactSubmit: function(contact){
        console.log(contact);
        var newContacts = this.state.data.concat([contact]);
        this.setState({
            data: newContacts
        });
    },

   render:function(){
       return(
            <myElement>
                <Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title>
                        Reclame Aqui!
                    </Title>
                    <div className="row">
                        <Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1} />
                    </div>
                    <div className="row">
                        <List data={this.state.data} />
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