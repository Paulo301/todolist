import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form:{
    display: 'flex',
    flexDirection: 'column'
  },
  email: {
    width: 500,
    fontSize: '1.3rem'
  },
  password: {
    width: 500,
    fontSize: '1.3rem',
    marginTop: 20
  }
}));