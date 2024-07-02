import './App.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
import HeroBullets from './Components/HeroBullets';
import ActionToggle from './Components/ActionToggle';

const theme = createTheme({
    /** Put your mantine theme override here */
    primaryColor: 'red'
});

function App(){
    return (
        <div>
            <MantineProvider theme={theme}>
                <HeroBullets></HeroBullets>
                <ActionToggle></ActionToggle>
                <Button></Button>
            </MantineProvider>
        </div>
    );
}

export default App;