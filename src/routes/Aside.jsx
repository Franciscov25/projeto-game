import { AsideContainer } from "../styles/AsideStyled"
import Filtro from './Filtro'

const Aside = () => {
  return (
    <AsideContainer>
      <h2>Buscar</h2>
      <input type="text" placeholder="Pesquisar"/>
      <Filtro titulo="Categorias" opcoes={["Aventura","Desenho","Terror"]}/>
      <Filtro titulo="Preco" type="range" min="0" max="2000" valor="1000"/>
      <Filtro titulo="Marcas" opcoes={["Marca A", "Marca B", "Marca C"]}/>
    </AsideContainer>
  )
}

export default Aside
