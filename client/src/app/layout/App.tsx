
//import { CssBaseline, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Container, CssBaseline } from "@mui/material";
//import { Fragment, useEffect, useState } from "react"
//import { useEffect, useState } from "react"
//import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"; 
import { Outlet } from "react-router";

function App() {

  //react hooks to keep hold of data
  //[where to store it and fn to store it  ]
  //useState can include the type of activities lib/types/index.d.ts
  //const [activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  // const [editMode, setEditMode] = useState(false);
  //const { activities, isPending } = useActivities();


  //What happens when our component loads/mounts and exe code in useEffect fn below
  // if in strict mode in main.tsx - useEffect executed x2 one to fetch and the other to clean up return () => {}
  // useEffect(() => {
  //   fetch('https://localhost:5001/api/activities') //returns a javascript promise
  //     .then(response => response.json()) //unwrap the promise. () = execute
  //     .then(data => setActivities(data))

  //   return () => { }
  // }, [])

  // this is using axios instead of the JavaScript fetch above

  // useEffect(() => {
  //   axios.get<Activity[]>('https://localhost:5001/api/activities') //returns a javascript promise
  //     .then(response => setActivities(response.data))

  //   return () => { }
  // }, [])
// replaced by routing
  // const handleSelectActivity = (id: string) => {
  //   setSelectedActivity(activities!.find(x => x.id === id));
  // }

  // const handleCancelSelectActivity = () => {
  //   setSelectedActivity(undefined);
  // }

  // const handleOpenForm = (id?: string) => {
  //   if (id) handleSelectActivity(id);
  //   else handleCancelSelectActivity();
  //   setEditMode(true);
  // }

  // const handleFormClose = () => {
  //   setEditMode(false);
  // }

  // initially we do not want to submit form to server. 
  //2 x types of submssion = create or update
  //   const handleSubmitForm = (activity: Activity) => {
  //     // if (activity.id) {
  //     //   // set an existing activity in list - so we map it
  //     //   // map mehtod calls the callback fn one time for each element on array
  //     //   //loop thru array of activities = find one matches activities by id otherwise just return activity looping over (x)
  //     //   setActivities(activities!.map(x => x.id === activity.id ? activity : x))
  //     // }
  //     // else //creating
  //     // {
  //     //   // spread operator ... (current list of activities we have inside state spread over as an array) and add new activity on with an id
  //     //   //setActivities([...activities,{...activity, id: activities.length.toString()}])

  //     //   const newActivity = {...activity, id: activities.length.toString()}
  //     //   setSelectedActivity(newActivity);
  //     //   setActivities([...activities,newActivity])

  //     // }
  //     console.log(activity);
  //     //Close window after it has been submitted
  //     setEditMode(false)
  // ;  }

  // const handleDelete = (id: string) => {
  //   //setActivities(activities.filter(x => x.id !== id))
  //   console.log(id)
  //     ;
  // }

  // return (

  //   //only return one thing froma javascript fn = an object an array but only one thing. Hence the div or Fragment
  //   //loop over activities
  //   // acivites = array
  //   // Fragment can be replaced by empty tags <>
  //   <>
  //     <Typography variant='h3'>Reactivities</Typography>

  //     <List>
  //       {activities.map((activity) => (
  //         <ListItem key={activity.id}>
  //           <ListItemText>{activity.title}</ListItemText>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </>
  // )

  return (

    //only return one thing froma javascript fn = an object an array but only one thing. Hence the div or Fragment
    //loop over activities
    // acivites = array
    // Fragment can be replaced by empty tags <>
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      {/* <NavBar openForm={handleOpenForm} /> */}
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <Outlet />
      {/* <ActivityDashboard /> */}

        {/* {!activities || isPending ? (
          <Typography>Loading</Typography>
        ) : (
          <ActivityDashboard
            // activities={activities}
            // selectActivity={handleSelectActivity}
            // cancelSelectActivity={handleCancelSelectActivity}
            // selectedActivity={selectedActivity}
            // editMode={editMode}
            // openForm={handleOpenForm}
            // closeForm={handleFormClose}
            //submitForm={handleSubmitForm}
            //deleteActivity={handleDelete} 
            />
        )} */}

      </Container>
    </Box>
  )
}

export default App
