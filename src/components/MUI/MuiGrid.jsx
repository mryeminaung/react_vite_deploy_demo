import MuiCard from "./MuiCard";
import { Data } from "./Data";
import { Container, CssBaseline, Grid } from "@mui/material";

const MuiGrid = () => {
    return (
        <Container sx={{ padding: 3 }}>
            <CssBaseline />
            <Grid
                container
                rowSpacing={5}
                columnSpacing={5}
                justifyContent="center"
            >
                {Data.map((item, id) => (
                    <Grid item key={id}>
                        {console.log(item.img)}
                        <MuiCard imgUrl={item.img} title={item.title} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MuiGrid;
