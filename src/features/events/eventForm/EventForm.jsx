import React, { useState } from "react";
import {Segment, Header, Form, Button} from 'semantic-ui-react';
import cuid from "cuid";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}) {

    const initialValues = selectedEvent ??{
        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }
    const [values, setValues] = useState(initialValues);

    function handleFormSubmit(){
        selectedEvent
        ? updateEvent({...selectedEvent, ...values})
        :createEvent({...values, id: cuid(), hostedBy: 'BOb', attendees: [], hostPhotoURL: '/assets/user.png'});
        setFormOpen(false);
    }

    function handleInputChange(e){
        const {name , value} = e.target;
        setValues({...values, [name]: value});
    }
    return(
        <Segment clearing>
            <Header  content={selectedEvent ? 'Edit the event' : 'Create new even'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input  type='text' placeholder='Event title' name='title'value={values.title} onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' name='category'value={values.category} onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Desciption' name='description'value={values.description} onChange={(e) => handleInputChange(e)}/> 
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' name='city'value={values.city} onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue' name='venue'value={values.venue} onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' name='date'value={values.date} onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Button type='submit' floated='right' content='Submit' positive/>
                <Button as={Link} to='/event' type='submit' floated='right' content='Cancel' />
            </Form>
            
        </Segment>
    )
}