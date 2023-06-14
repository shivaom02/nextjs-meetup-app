import Layout from "@/components/layout/Layout";
import MeetupDetail from "@/components/meetups/MeetupDetail";

const data = {
    id: 'm1',
    title: 'Title 1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Address 1',
    description: 'This is description one of many.'
};

const MeetupDetailsPage = () => {
  return (
    <>
        <MeetupDetail data={data} />
    </>
  )
}

MeetupDetailsPage.getLayout = (page) => <Layout>
  {page}
</Layout>;

export default MeetupDetailsPage