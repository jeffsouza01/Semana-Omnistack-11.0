import React from 'react';
import {Link} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css';
import logoIMG from '../../assets/logo.svg';


export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoIMG} alt="Be The Hero"/>
                <span>Bem Vinda, APAD</span>

                <Link className='button' to='/incident/new'>Cadastrar novo Caso</Link>
                <button type='button'>
                    <FiPower size={18} color='#e02041'/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>
            </ul>

        </div>

    );
}