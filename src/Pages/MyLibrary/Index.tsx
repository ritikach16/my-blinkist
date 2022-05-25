import { Box } from '@mui/material';
import Footer from '../../Components/Organism/Footer/Index';
import Header from '../../Components/Organism/Header/Index';
import MyLibrary from '../../Components/Templates/MyLibrary/Index';

const MyHomePage = () => {
    return (
        <Box>
            <MyLibrary
            header = {<Header/>}
            footer = {<Footer/>}
            />
        </Box>
    )
}

export default MyHomePage;
