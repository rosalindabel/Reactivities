 
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react"

function App() {

  //react hooks to keep hold of data
  //[where to store it and fn to store it  ]
  //useState can include the type of activities lib/types/index.d.ts
  const [activities, setActivities] = useState<Activity[]>([]);

  //What happens when our component loads/mounts and exe code in useEffect fn below
  // if in strict mode in main.tsx - useEffect executed x2 one to fetch and the other to clean up return () => {}
  // useEffect(() => {
  //   fetch('https://localhost:5001/api/activities') //returns a javascript promise
  //     .then(response => response.json()) //unwrap the promise. () = execute
  //     .then(data => setActivities(data))

  //   return () => { }
  // }, [])

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities') //returns a javascript promise
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  return (

    //only return one thing froma javascript fn = an object an array but only one thing. Hence the div or Fragment
    //loop over activities
    // acivites = array
    // Fragment can be replaced by empty tags <>
    <>
      <Typography variant='h3'>Reactivities</Typography>

      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
