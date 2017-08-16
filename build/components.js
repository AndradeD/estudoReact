
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

    render: function () {
        var InputStyle = {
            padding: "20px",
            fontSize: "16px",
            color: "#A7A5A5"
        };

        return React.createElement(
            "form",
            null,
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", id: "name", placeholder: "Name", style: InputStyle })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "Email"
                ),
                React.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "Email", style: InputStyle })
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
                    { defaultValue: "3", className: "form-control", id: "subject" },
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
                React.createElement("textarea", { className: "form-control", id: "message", rows: "3", style: InputStyle })
            )
        );
    }
});

var List = React.createClass({
    displayName: "List",

    render: function () {
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
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        { scope: "row" },
                        "1"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Mariana"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "mariana@mail.com"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "3"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "My message test"
                    )
                )
            )
        );
    }
});