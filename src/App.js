import './App.css';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router';
import CustomRoutes from './Components/CustomRoutes';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useState, useContext } from 'react';
import { GlobalContext } from './Context/Context';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {state} = useContext(GlobalContext)
  console.log("state", state)
  const firebaseConfig = {
    apiKey: "AIzaSyBpzoaV6tPolS69SMsNlPrQNUP-UanS4po",
    authDomain: "quizz-web1.firebaseapp.com",
    projectId: "quizz-web1",
    storageBucket: "quizz-web1.firebasestorage.app",
    messagingSenderId: "27331264374",
    appId: "1:27331264374:web:0cbb51b452da0461974457"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Admin Login', icon: <PersonIcon />, path: '/adminLogin' },
    { text: 'About', icon: <PersonIcon />, path: '/userLogin' },
    { text: 'Question Add', icon: <AddTaskIcon />, path: '/addQuestion' },
  ];

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Quiz App

            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
        >
          <List sx={{ width: 250 }}>
            {drawerItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <CustomRoutes/>
    </div>
  );
}

export default App;
