

var Page = React.createClass({
   render:function(){
       return(
            <myElement>
                <Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title>
                        Reclame Aqui!
                    </Title>
                    <div className="row">
                        <Form />
                        <Button textActive="Loading...">
                            Enviar.
                        </Button>
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