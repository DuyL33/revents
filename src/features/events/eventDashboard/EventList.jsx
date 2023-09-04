import React from "react";
import EventListItems from "./EventListItems";


export default function EventList({events, selectEvent, deleteEvent}){
    return (
        <>
        {events.map(event => (
            <EventListItems event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent}/>
        ))}
        

        </>
    )
}