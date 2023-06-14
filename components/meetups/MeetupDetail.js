import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={classes.details}>
        <img src={props.data.image} alt={props.data.title} />
        <h1>{props.data.title}</h1>
        <address>{props.data.address}</address>
        <p>{props.data.description}</p>
    </section>
  );
}

export default MeetupDetail;