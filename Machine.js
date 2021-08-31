class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = ((s1 === s2) && (s2 === s3));
    const colors = {fontSize: '35px', backgroundColor: 'purple'}
    return (
      <div className='Machine'>
        <h2 style={colors}>
          {s1}
          {s2}
          {s3}
        </h2>
        <p className={winner? 'win' : 'lose'} >{winner ? "Winner!" : "Loser!"}</p>
        {/* <p style={{ color: 'white' }} >{winner ? 'Winner!' : 'Loser!'}</p> */}
      </div>
    );
  }
}