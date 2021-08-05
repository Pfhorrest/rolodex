import React from 'react';
import Contact from './Contact';
import './List.scss';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
			newName: "",
			newAddress: "",
			newPhone: ""
		};
	}
	handleNameChange = (event) => {
		 this.setState({newName: event.target.value});
	}
	handleAddressChange = (event) => {
		 this.setState({newAddress: event.target.value});
	}
	handlePhoneChange = (event) => {
		 this.setState({newPhone: event.target.value});
	}
	deleteContact = (id) => {
		var newState = this.state;
		newState.contacts = newState.contacts.filter(contact => contact.id !== id);
		this.setState(newState);
	}
	addContact = () => {
		var newState = this.state;
		newState.contacts.push({
			id: ( [...newState.contacts].sort()[0] == undefined ) ? 0 : [...newState.contacts].sort((a,b)=>b.id-a.id)[0].id + 1,
			name: newState.newName,
			address: newState.newAddress,
			phone: newState.newPhone
		});
		newState.newName = "";
		newState.newAddress = "";
		newState.newPhone = "";
		this.setState(newState);
	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>
							Name
						</th>
						<th>
							Address
						</th>
						<th>
							Phone Number
						</th>
						<th class="actions">
						</th>
					</tr>
				</thead>
				<tbody>
					{this.state.contacts.map((contact) => (
						<Contact
							key={contact.id}
							id={contact.id}
							name={contact.name}
							address={contact.address}
							phone={contact.phone}
							deleteContact={this.deleteContact}
						/>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>
							<input type='text' id="name" placeholder="Enter a name" value={this.state.newName} onChange={this.handleNameChange} />
						</td>
						<td>
							<input type='text' id="address" placeholder="Enter an address" value={this.state.newAddress} onChange={this.handleAddressChange} />
						</td>
						<td>
							<input type='text' id="phone" placeholder="Enter a phone number" value={this.state.newPhone} onChange={this.handlePhoneChange} />
						</td>
						<td>
							<button class="add" onClick={() => this.addContact()} type='submit'>Add</button>
						</td>
					</tr>
				</tfoot>
			</table>
		);
	}
}

export default List;
