var data = [{
    id: 1, name: 'Mariana', email: 'mariana@mail.com', subject: '3', message: 'My message test'
}, {
    id: 2, name: 'João', email: 'joao@mail.com', subject: '1', message: 'My message test'
}];

var Page = React.createClass({
    displayName: 'Page',


    getInitialState: function () {
        return {
            data: [{
                id: 1, name: 'Mariana', email: 'mariana@mail.com', subject: '3', message: 'My message test'
            }, {
                id: 2, name: 'João', email: 'joao@mail.com', subject: '1', message: 'My message test'
            }] };
    },

    handleContactSubmit: function (contact) {
        console.log(contact);
        var newContacts = this.state.data.concat([contact]);
        this.setState({
            data: newContacts
        });
    },

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
                    React.createElement(Form, { onContactSubmit: this.handleContactSubmit, idNumber: this.state.data.length + 1 })
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(List, { data: this.state.data })
                )
            )
        );
    }

});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));