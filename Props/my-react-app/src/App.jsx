import Student from "./Student"

function App() {
  return(
    <>
      <Student name="Bob Sponja" age={30} student={true} ></Student>
      <Student name="Patrick" age={27} student={false} ></Student>
      <Student name="Lula Molusco" age={35} student={true} ></Student>
      <Student name="Sandy" age={25} student={true} ></Student>
      <Student name="Larry"></Student>
    </>
  )
}

export default App
