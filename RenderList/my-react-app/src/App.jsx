import List from "./List"

function App() {

  const frutas = [
                  {id: 1, name: "maça", caloria: 95}, 
                  {id: 2, name: "laranja", caloria: 45}, 
                  {id: 3, name: "banana", caloria: 105},
                  {id: 4, name: "abacaxi", caloria: 37}
                  ]


  const vegetais = [
                    {id: 7, name: "almerão", caloria: 95}, 
                    {id: 8, name: "alface", caloria: 45}, 
                    {id: 9, name: "cenoura", caloria: 105},
                    {id: 10, name: "couve", caloria: 37}
                  ]


  return(
    <>
      {frutas.length > 0 ? <List items = {frutas} categoria = "frutas"/> : null}
      {vegetais.length > 0 ? <List items = {vegetais} categoria = "vegetais" ></List> : null}
    </>
  )
}

export default App
