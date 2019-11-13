import React, { Component} from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

class DeedCalendar extends Component {


    constructor(props){
        super(props)
        this.state ={
            deeds: this.props.deeds
        }
    }

    componentDidMount() {
        console.log("These are the deeds passed to calendar", this.props.deeds)
        this.setState({deeds: this.props.deeds})
    }
  
  
    render(props) {
       
    return (
            <div style={{ height: '500pt'}}>
                {this.state.deeds ? 
              <Calendar
                events={this.state.deeds}
                startAccessor="start"
                endAccessor="end"
                defaultDate={moment().toDate()}
                localizer={localizer}
              />   : null }
            </div>
        );
      }
    
}

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.


// const Calendar = props => (
//   <div>
//     <BigCalendar
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//     />
//   </div>
// )

export default DeedCalendar

