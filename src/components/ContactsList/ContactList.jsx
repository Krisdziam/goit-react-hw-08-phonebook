import { useDeleteContactMutation } from 'redux/contactsApi';
import styles from './ContactsList.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Typography,
  ListItemText,
  ListItemIcon,
  Grid,
  List,
  ListItem,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const ContactList = ({ contacts }) => {
  const [deleteContact, { isLoading }] =
    useDeleteContactMutation();
  const removeContact = (id, name) => {
    deleteContact(id, name);
    toast.success(`Contact ${name} has been deleted`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };
  const noContacts = contacts.length === 0;
  return (
    <Box sx={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection:'column',
      paddingTop: '15px'
    }}>
      <Card
        sx={{
          width: 500,
          margin: '0 auto',
          padding: '10px 30px',
          borderRadius: '10px',
          color: 'rgb(0, 0, 0)',
          backgroundColor: 'rgba(244, 244, 246, 0.4)',
          boxShadow: 'rgb(0 0 0 / 20%) 5px 5px 23px 9px',
        }}
        variant="outlined"
      >
          <CardContent
          sx={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Typography
        variant="h5"
        sx={{
          fontWeight: '700',
        }}
      >
        Contacts
      </Typography>
      {noContacts ? (
        <Typography variant="h6">
          There are no contacts in your list!
        </Typography>
      ) : (
     
       
            <List>
              {contacts.map(({ name, number, id }) => (
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      disabled={isLoading}
                        onClick={() =>
                          removeContact(id, name)
                        }
                    >
                      <DeleteIcon
                        
                      />
                    </IconButton>
                  }
                  key={id}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: '700',
                      marginRight: '5px'
                    }}
                  >
                    {name}:
                  </Typography>
                  <ListItemText>{number}</ListItemText>
                </ListItem>
              ))}
            </List>
        
      )}
          </CardContent></Card>
</Box>
  );
};

//  <Grid container spacing={2}>
//   <Grid item xs={12} md={6}>

//     <List>
//       {null(
//         <ListItem
//           secondaryAction={
//             <IconButton edge="end" aria-label="delete">
//               <DeleteIcon />
//             </IconButton>
//           }
//         >

//           <ListItemText primary="Single-line item" />
//         </ListItem>
//       )}
//     </List>
//   </Grid>
// </Grid>;
