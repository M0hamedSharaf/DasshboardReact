import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form"

const regMail =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const phoneRegExp =
  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/


const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manger',
    label: 'Manger',
  },
  {
    value: 'User',
    label: 'User',
  },
];




const Form = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = () => {
    handleClick()
  }

  const [open, setOpen] = React.useState(false);
  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };



  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3
      }}
      noValidate
      autoComplete="off"
    >


      <Stack direction={"row"} sx={{ gap: 2 }} >
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "This field is required & min 3 character" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) ? "This field is required & min 3 character" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>


      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "Please provide a vid email ddress" : null}
        {...register("email", { required: true, pattern: regMail })}
        label="Email" variant="filled"

      />






      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={Boolean(errors.contactNumber) ? "Please provide a vid Phone number" : null}
        {...register("contactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number" variant="filled"
      />

      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="outlined-select-currency"
        variant="filled"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </TextField>


      <Button type="submit" variant="contained" sx={{ textTransform: "capitalize" }}>
        Create New User
      </Button>

      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical:"top", horizontal:"right" }}
        
       >
        <Alert 
          onClose={handleClose} 
          severity="info" 
          sx={{ width: '100%' }}
        >
          Account created successfully
        </Alert>
      </Snackbar>
    </Box>
  )

};

export default Form

