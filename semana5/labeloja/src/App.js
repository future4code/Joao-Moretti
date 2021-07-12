import logo from './logo.svg';
import './App.css';

function App() {

  const titulo = 'Labetube'

  function reproduzVideo(){
    alert("O vídeo está sendo reprozido")
  }
  return (
    <div>
      <div className="tela-inteira">
      <header>
        <div className="logo">
           <h1> <img src="https://image.flaticon.com/icons/png/512/1384/1384060.png"/>{titulo}</h1>
        </div>
            <div className="pesquisar">
            <input type="text" placeholder="Pesquisar" id="campoDeBusca"/> 
            <button type="submit"> <img src="https://images.vexels.com/media/users/3/140723/isolated/lists/158241d2079a635fb0cae49accb56da5-icono-de-lupa.png"/> </button>
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div class="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/fRh_vgS2dFE/maxresdefault.jpg" alt=""/>
                    <h4>Justin Bieber - Sorry(PURPOSE:The Movement)</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/HxUnFsIpUJM/maxresdefault.jpg" alt=""/>
                    <h4>COMO JUKES REALMENTE JOGA LEAGUE OF LEGENDS</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/WMweEpGlu_U/maxresdefault.jpg" alt=""/>
                    <h4>BTS (방탄소년단) 'Butter' Official MV</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/9sJ5F6S32Ec/maxresdefault.jpg" alt=""/>
                    <h4>Gols | Botafogo 3x3 Cruzeiro | Campeonato Brasileiro</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/XZp3Mtn-YsI/maxresdefault.jpg" alt=""/>
                    <h4>Starset - It Has Begun (Audio)</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="http://listadejutsus.weebly.com/uploads/5/7/3/5/5735980/rock-lee_7813318_orig.jpg" alt=""/>
                    <h4>Rock lee vs Gaara - Linkin park</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/KbNL9ZyB49c/maxresdefault.jpg" alt=""/>
                    <h4>Take Over (com Jeremy McKinnon do A Day To Remember, MAX, Henry) | Mundial 2020 - League of Legends</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://i.ytimg.com/vi/VQGCKyvzIM4/maxresdefault.jpg" alt=""/>
                    <h4>Demon Slayer: Kimetsu no Yaiba Trailer 1</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
