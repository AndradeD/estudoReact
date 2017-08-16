var data = [{
    id: 1, name: 'Mariana', email: 'mariana@mail.com', subject: '3', message: 'My message test'
}, {
    id: 2, name: 'João', email: 'joao@mail.com', subject: '1', message: 'My message test'
}];

var Page = React.createClass({
    displayName: 'Page',

    render: function () {
        return React.createElement(
            'myElement',
            null,
            React.createElement(Nav, { title: 'React', linkUrl: 'index.html' }),
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    Title,
                    null,
                    'Reclame Aqui!'
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(Form, null),
                    React.createElement(
                        Button,
                        { textActive: 'Loading...' },
                        'Enviar.'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(List, { data: data })
                )
            )
        );
    }

});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));