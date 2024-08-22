import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';

const produtos = [{
  nome:"Zelda Breath of the wild",
  preco: 10.00,
  },
  {
    nome:"zelda a link to the past edição de GBA",
    preco: 2.00,
    },
    {
      nome:"zelda Links Awakening Switch",
      preco: 10.00,
      },
      {
        nome:"zelda Majoras mask 3ds",
        preco: 2.00,
        },
];

function App() {
  return (
  <div>
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos={produtos}/>
  </div>
  );
}

export default App;