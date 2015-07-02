var QuizItem = React.createClass({
	getInitialState: function () {
	    return {
	        checker: false,
	        classer: 'answer col-sm-height col-middle col-sm-6',
	        icon: ''
	    };
	},
	toggleCheck: function() {
		if(this.state.checker == false){
			this.setState({
				checker: true,
				classer: 'answer col-sm-height col-middle col-sm-6 picked',
				icon: 'fa fa-check pull-right'
			});

		} else {
			this.setState({
				checker: false,
				classer: 'answer col-sm-height col-middle col-sm-6',
				icon: 'fa fa-check pull-right'
			});
		}
	},
	render: function() {
		return (
			<div className={this.state.classer} onClick={this.toggleCheck}>
		        <div className="clearfix">
		            <div className="answerText col-xs-10">{this.props.choiceTitle}</div>
		            <div className="fa col-xs-2 fa-check fa-2x"></div>
		        </div>
		    </div>
	    )
	}
});

var QuizRow = React.createClass({
	render: function() {
		return (
			<div className="answers">
			    <div className="answerWrapper container-sm-height">
			        <div className="row answerRow row-sm-height">
			            <QuizItem choiceTitle="Choice 1" />
						<QuizItem choiceTitle="Choice 2" />
			        </div>
			    </div>
			</div>

		)
	}
});

React.render(
	<QuizRow />,
	document.getElementById('quiz')
);

var Contact = React.createClass({
	render: function() {
		return (
			<div className="contact col-md-3">{this.props.contactName}</div>
		)
	}
});

