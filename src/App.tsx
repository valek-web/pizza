import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Layout} from './page/Layout'
import {Menu} from './page/Menu/Menu'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<p>12</p>} />
                <Route path='menu' element={<Menu />} />
                <Route path='menu/:id' element={<Menu />} />
            </Route>
            <Route path='*' element={<p>Not found 404</p>} />
        </Routes>
    )
}

export default App
