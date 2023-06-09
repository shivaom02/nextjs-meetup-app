import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

export default function MeetupList(props) {
    return (
        <ul className="classes list">
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    props={meetup}
                />
            ))}
        </ul>
    );
}