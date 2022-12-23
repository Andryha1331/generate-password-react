const ViewGenerpass = function (props) {

  function copyPass(event) {
    if (event.target.value) {
      navigator.clipboard.writeText(event.target.value).then(
        alert('Copy is success!')
      )
    }
  }

  return (
    <>
      <hr className="line-style" />

      <div className="container-generate-view">
        <input className="generate-view" onClick={(event) => copyPass(event)} value={props.passOne} type="text" name="generate-password1" id="password1" maxLength="8" readOnly />
        <input className="generate-view" onClick={(event) => copyPass(event)} value={props.passTwo} type="text" name="generate-password2" id="password2" maxLength="8" readOnly />
      </div>
    </>
  )
}

export default ViewGenerpass;
