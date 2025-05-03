import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material" 
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

// type Props = {
//     selectedActivity: Activity;
//     // //activity: Activity;
//     // cancelSelectActivity: () => void;
//     // openForm: (id: string) => void; 
// }

export default function ActivityDetails() {
    

    //short term fix
    // const {activities} = useActivities();
    // const activity = activities?.find(x => x.id === selectedActivity.id);

    const navigate = useNavigate();
    //this id name must be the same as the id in Router.ts
    const {id} = useParams();
    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <Typography>Activity not found</Typography>
    //const activity = {} as Activity;
    if (!activity) return <Typography>Loading....</Typography>
    
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia  style={{ height: "190px" }}
                component='img'
                src={`/images/categoryImages/${activity.category}.jpg`} /> 
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>                
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/manage/${activity.id}`} color="primary" >Edit</Button>
                <Button onClick={() => navigate('/activities')} color="inherit">Cancel</Button>
            </CardActions>
    </Card>
    )
}
