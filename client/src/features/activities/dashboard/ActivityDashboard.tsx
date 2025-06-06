import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";
//import { useActivities } from "../../../lib/hooks/useActivities";

//Passed down from App.tsx
// type Props = {
//   activities: Activity[]
//   selectActivity: (id: string) => void;
//   cancelSelectActivity: () => void;
//   selectedActivity?: Activity;
//   openForm: (id: string) => void;
//   closeForm: () => void;
//   editMode: boolean;
//   submitForm: (activity: Activity) => void;
//   //deleteActivity: (id: string) => void;
// }

export default function ActivityDashboard(
//  { 
//   // activities,
//   //   selectActivity,
//   //   cancelSelectActivity,
//   //   selectedActivity,
//   //   openForm,
//   //   closeForm,
//   //   editMode,
//     //submitForm,
//     //deleteActivity
//     }:
//     Props
) 
{

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={8}>
        <ActivityList
          // activities={activities}
          // selectActivity={selectActivity}
          // 
          />
      </Grid2>
      <Grid2 size={4}>
        <ActivityFilters />
        {/* {selectedActivity && !editMode &&
          <ActivityDetail
            selectedActivity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        }
        {editMode &&
          <ActivityForm 
          closeForm={closeForm}
          activity={selectedActivity}/>             
        } */}
      </Grid2>
    </Grid2>
  )
}
