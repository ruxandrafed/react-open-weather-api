var styles = {
  mainContainer: {
    width: '100%',
    height: '92%'
  },
  homeContainer: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  homeHeader: {
    color: '#fff',
    marginBottom: '10px',
    fontSize: '45px',
    fontWeight: '100'
  },
  homeForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    alignSelf: 'right'
  },
  headerForm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px',
    alignSelf: 'right'
  },
  formButton: {
    margin: '10px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: '10px'
  },
  headerTitle: {
    margin: 0
  },
  forecastHeader: {
    color: '#000',
    marginBottom: '10px',
    marginTop: '40px',
    fontSize: '45px',
    fontWeight: '100',
    textAlign: 'center'
  },
  forecastSubheader: {
    color: '#000',
    marginBottom: '10px',
    fontSize: '30px',
    fontWeight: '100',
    textAlign: 'center'
  },
  forecastContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '50px 10%',
  },
  dayForecastContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '60%',
    cursor: 'pointer'
  },
  weatherImg: {
    width: '100px'
  },
  dayForecastHeader: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: '100',
    textAlign: 'center'
  }
};

module.exports = styles;