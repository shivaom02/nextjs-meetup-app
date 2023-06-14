import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import Layout from '@/components/layout/Layout';

const NewMeetupPage = () => {
  function addMeetupHandler(data) {
    console.log(data);
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />    
  )
}

NewMeetupPage.getLayout = (page) => <Layout>
  {page}
</Layout>


export default NewMeetupPage;