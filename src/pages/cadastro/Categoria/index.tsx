import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

class CadastroCategoria extends React.Component {

    render(): JSX.Element {
        return (
            <PageDefault>
                <h1>Cadastro de Categoria</h1>
                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                </Link>
            </PageDefault>
        );
    }
}

export default CadastroCategoria;