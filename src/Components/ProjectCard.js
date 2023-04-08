
import {RiSendPlaneFill} from "react-icons/ri"
import {VscGithub} from "react-icons/vsc"
import projectData from "../data";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";


const ProjectCard = () => {

    const navigate = useNavigate()

    const onImgClick = (dest) => {
        navigate("/")
    }


    const cards = projectData.map((item, pos) => {
        
        return(
            <Grid key={pos} item xs={12} md={3} sm={6}>
                <Card sx={{ heigh: 416,  }} className="p-card" >
                    <a href={item.link}>
                        <CardMedia
                            component="img"
                            alt="img"
                            height="200"
                            image={item.img}
                        />
                    </a>
                    <CardContent>
                        <Typography
                            sx={{fontFamily: "monospace", textAlign: "start", }}
                            gutterBottom variant="h6" component="div" >
                            {`Type: ${item.name}`}
                        </Typography>
                        <Typography
                            sx={{fontFamily: "monospace", textAlign: "start", }}
                            gutterBottom variant="h6" component="div" >
                            {`Location: ${item.location}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    })

    return (
        <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
            <Grid container spacing={2}>
                { cards }
            </Grid>
        </Box>
    );
}
 
export default ProjectCard;