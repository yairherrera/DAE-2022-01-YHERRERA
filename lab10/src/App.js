import {Component} from 'react'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/title';
import Productos from './components/Productos';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      carro:[],
      esCarroVisible: false
    }
}

  state = {
    productos:[]
  }

  componentDidMount() {
    fetch('http://localhost:8000/productos')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ productos: prod })
      })    
  }
  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.nombre === producto.nombre)) {
      const newCarro = carro.map(x => x.nombre === producto.nombre
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }
 


  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )  
  }

}

export default App;