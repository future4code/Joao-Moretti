import React from "react"
import { useHistory } from "react-router-dom"
import { usePermissionLogin } from "../../hooks/HookControl"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Form } from "./styles";
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

function CreateTripPage() {
    usePermissionLogin()
    const history = useHistory()
    const [personName, setPersonName] = React.useState([]);
    const theme = useTheme();
    

    const goBack = () => {
        history.goBack()
    }

    const useStyles = makeStyles((theme) => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
    }));

    const classes = useStyles();
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    function getStyles(name, personName, theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }

    const handleChange = (event) => {
      setPersonName(event.target.value);
    };

    const names = [
      'Mercúrio',
      'Vênus',
      'Terra',
      'Marte',
      'Júpiter',
      'Saturno',
      'Urano',
      'Netuno',
      'Plutão'
    ];

  return (
    <div>
      <Typography variant="h1" align={'center'} gutterBottom >LabeX</Typography>
      <Button onClick={goBack}>Voltar</Button>

      <Form >
      <TextField label="Outlined" variant="outlined"
      label="Nome"
      name={'nome'}
      type={'text'}
      // value={form.email}
      // onChange={onChange}
    //   placeholder={'E-mail'}
      required
      />
<FormControl className={classes.formControl}>
<InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple        
          value={personName}
          onChange={handleChange}
          input={<Input />}    
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}    
          variant="outlined"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
             <option>{name}</option> 
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      <TextField label="Outlined" variant="outlined"
      label="Descrição"
      name={'descricao'}
      type={'text'}
      // value={form.password}
      // onChange={onChange}
    //   placeholder={'Senha'}
      required
      />
      <Button variant="contained" color="primary">Enviar</Button>
      </Form>
    </div>
  )
}

export default CreateTripPage