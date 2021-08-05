import React from 'react';

class Contact extends React.Component {
	render() {
		return (
			<tr>
				<td>
					{this.props.name}
				</td>
				<td>
					{this.props.address}
				</td>
				<td>
					{this.props.phone}
				</td>
				<td><button class="delete" onClick={() => this.props.deleteContact(this.props.id)}>Delete</button></td>
			</tr>
		);
	}
}

export default Contact;
