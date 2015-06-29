var contacts = ['Joey','Johnny','Matt','Moe','Stacy','Nani','Chrissy'];


var Contact = React.createClass({
	render: function() {
		return (
			<div className="contact col-md-3">{this.props.contactName}</div>
		)
	}
});

var ContactGroup = React.createClass({
	getInitialState: function () {
	    return {
	        contacts: contacts  
	    };
	},
	onButtonClick: function() {
		var name = $("#name").val();
		contacts.push(name);
		this.setState({
			contacts: contacts
		})
	},
	render: function() {
		var array = [];
		var totalCount = 10;
		for (var i = 0; i < this.state.contacts.length; i++) {
			var contact = this.state.contacts[i];
			array.push(
				<Contact contactName={contact} />
			);
		};
		return(
			<div className="app col-md-12">
				<div className="contactGroup row">{array}</div>
				<div className="col-md-12">
					<div className="input-group">
						<input type="text" id="name" className="form-control" />
						<span className="input-group=btn">
							<a className="btn btn-primary" onClick={this.onButtonClick}>Add One</a>
						</span>
					</div>
				</div>
			</div>
		)
	}
});

React.render(
	<ContactGroup contactCount="10" />,
	document.getElementById("stuff")
);

class HelloComponent extends React.Component {  
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

React.render(
	<HelloComponent name="yall" />,
	document.body
);
