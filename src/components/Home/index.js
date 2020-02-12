import React, {Component} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios'

import '../../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class App extends Component {
	state = {
		events: [
			{
				start: new Date(),
				end: new Date(moment().add(1, 'hour')),
				title: 'Some title'
			}
		]
	};

	componentDidMount() {
		axios
			.get('/api/events')
			.then(response => {
        console.log('response:', response.data.events)
				let appointments = response.data.events;

				for (let i = 0; i < appointments.length; i++) {
					appointments[i].start = moment.utc(appointments[i].start).toDate();
					appointments[i].end = moment.utc(appointments[i].end).toDate();
				}
				this.setState({
					events: appointments
				});
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<div className='App'>
				<Calendar
					localizer={localizer}
					defaultDate={new Date()}
					defaultView='month'
					events={this.state.events}
					style={{ height: '100vh' }}
				/>
			</div>
		);
	}
}

export default App;