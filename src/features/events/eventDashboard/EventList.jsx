import React from "react";
import EventListItems from "./EventListItems";


export default function EventList({events}){
    return (
        <>
        {events.map(event => (
            <EventListItems event={event} key={event.id}/>
        ))}
        

        </>
    )
}