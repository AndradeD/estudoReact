

var Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { title: "React", linkUrl: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    Title,
                    null,
                    "Reclame Aqui!"
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Form, null),
                    React.createElement(
                        Button,
                        { textActive: "Loading..." },
                        "Enviar."
                    )
                )
            )
        );
    }

});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));