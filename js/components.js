
var Nav = React.createClass({
    displayName: "Nav",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-inverse" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { href: this.props.linkUrl, className: "navbar-brand" },
                        this.props.title
                    )
                )
            )
        );
    }
});

var Title = React.createClass({
    displayName: "Title",

    render: function () {
        var TitleStyle = {
            color: "#777676",
            fontSize: "35px"
        };

        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "h1",
                { style: TitleStyle },
                " ",
                this.props.children,
                " "
            )
        );
    }
});

var Button = React.createClass({
    displayName: "Button",


    getInitialState: function () {
        return {
            click: false
        };
    },
    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },
    render: function () {

        var btnClass = null;
        var title = null;
        if (this.state.click) {
            btnClass = 'btn btn-warning';
            title = this.props.textActive;
        } else {
            btnClass = 'btn btn-success';
            title = this.props.children;
        }

        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }
});

var Form = React.createClass({
    displayName: "Form",


    getInitialState: function () {
        return {
            name: '',
            email: '',
            subject: '3',
            message: ''
        };
    },

    handleNameChange: function (e) {
        this.setState({ name: e.target.value });
    },
    handleEmailChange: function (e) {
        this.setState({ email: e.target.value });
    },
    handleSubjectChange: function (e) {
        this.setState({ subject: e.target.value });
    },
    handleMessageChange: function (e) {
        this.setState({ message: e.target.value });
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var subject = this.state.subject;
        var message = this.state.message.trim();

        if (!name || !email || !subject || !message) {
            return;
        }
        this.props.onContactSubmit({
            id: this.props.idNumber,
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    },

    render: function () {
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };

        return React.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", onChange: this.handleNameChange, placeholder: "Name", style: InputStyle })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "Email"
                ),
                React.createElement("input", { type: "email", className: "form-control", onChange: this.handleEmailChange, placeholder: "Email", style: InputStyle })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "subject" },
                    "Subject"
                ),
                React.createElement(
                    "select",
                    { defaultValue: this.state.subject, className: "form-control", onChange: this.handleSubjectChange },
                    React.createElement(
                        "option",
                        { value: "1" },
                        "Angular"
                    ),
                    React.createElement(
                        "option",
                        { value: "2" },
                        "JQuery"
                    ),
                    React.createElement(
                        "option",
                        { value: "3" },
                        "React"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "message" },
                    "Mensagem"
                ),
                React.createElement("textarea", { className: "form-control", onChange: this.handleMessageChange, rows: "3", style: InputStyle })
            ),
            React.createElement(
                Button,
                { textActive: "Loading..." },
                "Enviar."
            )
        );
    }
});

var Contact = React.createClass({
    displayName: "Contact",

    render: function () {
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                { scope: "row" },
                this.props.idNumber
            ),
            React.createElement(
                "td",
                null,
                this.props.name
            ),
            React.createElement(
                "td",
                null,
                this.props.email
            ),
            React.createElement(
                "td",
                null,
                this.props.subject
            ),
            React.createElement(
                "td",
                null,
                this.props.children
            )
        );
    }
});

var List = React.createClass({
    displayName: "List",

    render: function () {
        var contactNodes = this.props.data.map(function (contact) {
            return React.createElement(
                Contact,
                { idNumber: contact.id, name: contact.name, email: contact.email, subject: contact.subject },
                contact.message
            );
        });

        return React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "Id"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Email"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Subject"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Message"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                contactNodes
            )
        );
    }
});