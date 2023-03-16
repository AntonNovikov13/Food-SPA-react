import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Main } from './pages/Main.jsx';
import { About } from './pages/About.jsx';
import { Contacts } from './pages/Contacts.jsx';
import { Category } from './pages/Category.jsx';
import { MealRecipe } from './pages/MealRecipe.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route exact path='/' element={<Main />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/meal/:id' element={<MealRecipe />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
