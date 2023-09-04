import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';
export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent}) {

    const [events, setEvents] = useState(sampleData);

    function handleCreateEvent(event){
        setEvents([...events,event])
    }
    function handleUpdateEvent(updatedEvent){
        setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent: evt));
        selectEvent(null);
    }
    function handleDeleteEvent(eventID){
        setEvents(events.filter(evt => evt.id !== eventID));
    }
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {/*if form open is true then display event form.*/}
                {formOpen &&
                <EventForm setFormOpen={setFormOpen}
                 setEvents={setEvents}
                  createEvent={handleCreateEvent}
                 selectedEvent={selectedEvent}
                 updateEvent={handleUpdateEvent}
                 key={selectedEvent ? selectedEvent.id : null}
                 />
                }
            </Grid.Column>
        </Grid>
    )
}