import Produtos from "./Produtos"
import {Main} from "../styles/HomeStyled"

// map = percorre item por item 
const Home = ({Dados}) => {
  return (
    
      <Main>
      {Dados.map(produto =>(
        <Produtos
        key={produto.id}
        imagem={produto.imagem}
        titulo={produto.titulo}
        descricao={produto.descricao}
        preco={produto.preco}
        />
      ))}
      </Main>
    
  )
}

export default Home
