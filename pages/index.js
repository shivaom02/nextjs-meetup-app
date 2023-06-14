import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Title 1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Address 1',
        description: 'This is description one of many.'
    },
    {
        id: 'm2',
        title: 'Title 2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Address 2',
        description: 'This is description two of many.'
    },
    {
        id: 'm3',
        title: 'Title 3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Address 3',
        description: 'This is description three of many.'
    }
]

export default function HomePage(props) {
    return <MeetupList meetups={props.meetups} />;
}

// It will run before rendering HomePage component.
// It won't run on client, or server, but in the build process only.
// It will pre render page when app is build for production
// If page content changes, app needs to be redeployed
export async function getStaticProps() {
    // fetch data from an API
    return {
        // this props will be given as props to HomePage component
        props: {
            meetups: DUMMY_MEETUPS
        },
        // regenerate the page after these many seconds incrementally
        revalidate: 50
    }
}

/*
// Always runs on the server, for every incoming requests
// As it runs on server side, we can use credintials here and it won't be exposed to client
export async function getServerSideProps(context) {
    // context is an optional arg you get. It gives access to req and res object. 
    // req has extra info, such as, credintials for authentication.
    const req = context.req;
    const res = context.res;

    // Fetch APIs
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}
*/

HomePage.getLayout = (page) => {
    return <Layout>{page}</Layout>;
}