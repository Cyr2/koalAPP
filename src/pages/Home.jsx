import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
    return (
        <>
            <h1>Accueil</h1>
            <ul className='tableQuestion'>
            </ul>
        </>
    )
}