const Styles = (theme) => ({
  background: {
    width: '100%',
    minHeight: '100%',
    position: 'fixed', 
    backgroundColor : '#282c34', 
    color: '#ffc72c', //'#61dafb',
    overflowY : 'scroll'
  },
  container: {
    minHeight: '100vh' 
  },
  panel: {
    minWidth: '300px',
    height: 'auto',
  },
  media: {
    height: '10rem', 
    paddingTop: '56.25%',
    width: 'auto',
    backgroundSize: 'contain'
  },
  resetButton: {
    color: '#282c34',
    minWidth: '100%',
    backgroundColor: '#ffc72c',
    textTransform: 'none',
  }
});

export default Styles;
