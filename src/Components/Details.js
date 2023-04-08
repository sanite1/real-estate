import { Grid, Typography, TextField, IconButton, Snackbar, Alert } from "@mui/material";
import Box from "@mui/material/Box"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Details = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    

    
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");

    const handleSnackBar = () => {
        setOpenSnackBar(true);
      };


    const navigate = useNavigate()

    localStorage.setItem('loggedIn', false);

    const [loading, setLoading] = useState(false);


    return (
        <Box
            sx={{
                height: "100vh",
                width: "90%",
                margin: "auto"
            }}
        >
            
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="error" sx={{ width: '100%' }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>
            <Grid container >
                <Box item md={5} xs={12}
                    sx={{
                        position: "fixed",
                        left: 0,
                        width: "50vw",

                        textAlign: "center",
                        height: "85vh",
                        // display: {xs: "none", md: "block"}
                    }}
                >
                    
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID?rel=0&amp;showinfo=0" frameborder="1" allowfullscreen controllers></iframe> */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            height: "85vh",
                            // display: {xs: "none", md: "block"}
                        }}
                    >
                        <video width="80%" height="315" src="my-video.mp4" controls>
                        Your browser does not support the video tag.
                        </video>
                    </Box>

                </Box>
                <Box item md={7} xs={12}
                    sx={{
                        width: {xs: "100%", md: "100%"},
                        marginLeft: {xs: "0", md: "50%"},
                        textAlign: "center",
                        // marginTop: {xs: "15vh", md: "15vh"}
                    }}
                >
                    <Box 
                        sx={{
                            margin: "auto",
                            width: {xs: "80%", md: "90%"},
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            color="inherit" 
                            component="div"
                            sx={{
                                textAlign: "left",
                                marginTop: 6,
                                fontWeight: 600,
                                fontFamily: "monospace",
                                fontSize: "30px",
                                marginBottom: "20px",
                                // color: "#f1f5f8"
                            }}
                        >
                            Details About This Home
                        </Typography>
                        
                        <p className="para">
                        Lorem ipsum dolor sit amet. Qui dolores voluptatem ut doloribus nulla ea omnis minus et quisquam voluptate. Quo ratione quas qui adipisci ipsam aut velit delectus et neque nobis aut sunt necessitatibus est similique nostrum. 33 incidunt similique est eveniet galisum et molestias quae non incidunt consectetur! Sed quibusdam nihil ut vitae dolores et galisum Quis vel facere praesentium.
                        </p>
                        <br />
                        <p className="para">Sed tenetur nihil et voluptatum eius vel nemo voluptatem id possimus natus et asperiores molestias et tenetur ipsam ut veritatis nulla. A veritatis voluptatum nam eveniet officiis vel consequatur quis ut internos accusamus ut fugit aperiam et saepe omnis qui repellendus corporis. In accusamus quae est dolorem sequi qui magni velit. Est consequatur ipsam ex dolorem modi non eaque exercitationem sit ipsum dolor.</p>
                        <br />
                        <p className="para">Eum commodi commodi ad iure nemo qui quia velit et deserunt veritatis et sequi ipsam ab itaque ipsa in excepturi architecto. Est voluptas natus aut minima internos nam quod rerum ut tenetur adipisci eos possimus dolore.</p>
                        
                        <a href="https://my.matterport.com/show/?m=iQ4qqQ8Q78K&amp;play=1" class="wpm-tour wpmiQ4qqQ8Q78K wpm-overlay" >
				        	hello
                        </a>

                        
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
}
 
export default Details;