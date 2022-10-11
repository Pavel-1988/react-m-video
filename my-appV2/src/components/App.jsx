import { PageTitle } from './PageTitle/PageTitle'
import { EventBoard } from './EventBoard/EventBoard'
import upcomingEvents from '../upcoming-events.json'

export const App = () => {
    return (
        <>
            <PageTitle text="24th core worlds coalition conference"/>
            <EventBoard events={upcomingEvents} />
        </>
    )
};