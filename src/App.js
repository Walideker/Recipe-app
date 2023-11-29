import { useEffect, useState } from 'react';
import { FaAirbnb } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Recipe from './components/Recipe';

function App() {

    const App_Id = 'b51d58ad'
    const App_Key = 'a017a3d3a4036da21c20ee2e6bd7aece'

    const [recepices, setRecepices] = useState([])
    const [data, setData] = useState('')
    const [search, setSearch] = useState('')


    const GetRecipe = async () => {
        const respone = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`)
        const responeJson = await respone.json()
        setRecepices(responeJson.hits)
        console.log(responeJson.hits);
    }

    useEffect(() => {
        GetRecipe()
    }, [search])
    function getData(e) {
        e.preventDefault()
        setSearch(data)
        setData('')
    }
    return (
        <div className="App">
            <nav className='navbar navbar-expand 	bg-light'>
                <div className='container'><FaAirbnb className='navbar-brand logo' /></div>
                <div className='navbar-text'>
                    <form className='form' onSubmit={getData}>
                        <input placeholder='Type your recipe...' className='input' type="text" value={data} onChange={(e) => setData(e.target.value)} />
                        <button className='btn btn-success' >search</button>
                    </form></div>
            </nav>
            <div className='all'>
                {recepices.map(Element => (
                    <Recipe title={Element.recipe.label}
                        calories={Element.recipe.calories}
                        image={Element.recipe.image}
                        ingredients={Element.recipe.ingredients} />
                ))}
            </div>
        </div>
    );
}

export default App;
