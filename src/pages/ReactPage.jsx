
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import perguntasAngular from "../data/PeguntasReact.js";
import ButtonConfirmar from "../components/ButtonConfirmar.jsx";
import { useState , useEffect} from "react";

import Modal from '../components/Modal.jsx';
import { FaReact } from "react-icons/fa";






export default function AngularPage() {
  const [index, setIndex] = useState(1);
  const [selected, setSelected] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  
  // Estados para contagem de respostas
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  
  // Novo estado para modal de confirmação
  const [confirmExitModalIsOpen, setConfirmExitModalIsOpen] = useState(false);
  const [tempoRestante, setTempoRestante] = useState(15);

  const navigate = useNavigate();
  const perguntaAtual = perguntasAngular.find(pergunta => pergunta.id === index);

  const handleIncrementar = () => {
    if (selected !== null) {
      const isCorreta = perguntaAtual.alternativas[selected].correta;
      setFeedbackMessage(isCorreta ? "Resposta correta!" : "Resposta incorreta!");
      setModalIsOpen(true);

      if (isCorreta) {
        setAcertos(prev => prev + 1);
      } else {
        setErros(prev => prev + 1);
      }

      setTimeout(() => {
        setModalIsOpen(false);
        if (index < perguntasAngular.length) {
          setIndex(prevIndex => prevIndex + 1);
          setSelected(null);
          setTempoRestante(15); // Resetando o tempo
        } else {
          setModalIsOpen(true);
        }
      }, 2000);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    navigate('/');
  };

  const handleExit = () => {
    setConfirmExitModalIsOpen(true); // Abre a modal de confirmação
  };

  const confirmExit = () => {
    setConfirmExitModalIsOpen(false);
    navigate('/'); // Redireciona para a página inicial
  };

  const cancelExit = () => {
    setConfirmExitModalIsOpen(false); // Fecha a modal de confirmação
  };

  // Temporizador de 15 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setTempoRestante(prev => prev - 1);
    }, 1000);

    if (tempoRestante === 0) {
      setModalIsOpen(true);
      setFeedbackMessage("Tempo esgotado!");
      setTimeout(() => {
        setModalIsOpen(false);
        if (index < perguntasAngular.length) {
          setIndex(prevIndex => prevIndex + 1);
          setSelected(null);
          setTempoRestante(15); // Resetando o tempo
        } else {
          setModalIsOpen(true);
        }
      }, 2000);
    }

    return () => clearTimeout(timer); // Limpa o temporizador se o componente for desmontado
  }, [tempoRestante, index]); // Reexecuta o efeito ao mudar de pergunta

  return (
    <section className="seccao-home text-white">
      <div className="container pt-5">
        <div className="row ">
          <div className="header d-flex justify-content-between">
          <a href="#" className="d-block itens arrajoItens">
              <FaReact  className="fs-3" style={{ color: "#17a2b8" }} />
              &nbsp;React.js
            </a>
            <a href="#" className="botaoSair" onClick={handleExit}>
              <MdOutlineLogout className="fs-1" />
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="mb-4">
              <span>Pergunta {perguntaAtual.id} / {perguntasAngular.length}</span>
              <h5 className="mt-5 fs-2">{perguntaAtual.pergunta}</h5>
              <h6 className="mt-3">Tempo restante: {tempoRestante} segundos</h6>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            {perguntaAtual.alternativas.map((alternativa, idx) => (
              <button
                key={idx}
                className={`text-start text-white d-block itens w-100 activada5 ${selected === idx ? 'selected' : ''}`}
                onClick={() => setSelected(idx)}
              >
                <span className="colorirLetra">{alternativa.letra}&nbsp;&nbsp;</span>
                {alternativa.texto}
              </button>
            ))}
            <ButtonConfirmar 
              useClick={handleIncrementar} 
              useP="w-100 itens text-white fw-bold" 
              useCor={"#17a2b8"} 
              useText="Confirmar" 
            />
          </div>
        </div>

        {/* Zona para exibir acertos e erros */}
        <div className="resultados1 mt-5">
          <h5>Resultados</h5>
          <p>Acertos: {acertos}</p>
          <p>Erros: {erros}</p>
        </div>
      </div>
      
      {/* Modal de feedback */}
      <Modal 
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <h2>{index === perguntasAngular.length ? "Fim do jogo!" : feedbackMessage}</h2>
        {index === perguntasAngular.length && (
          <div>
            <p>Acertos: {acertos}</p>
            <p>Erros: {erros}</p>
            {acertos >= 8 ? <h3>Parabéns! Você se saiu bem.</h3> : <h3>Pratique mais, você esteve mal!</h3>}
            <button onClick={handleCloseModal} className="itens text-white mx-auto d-block mt-3" style={{backgroundColor:"#17a2b8"}}>Fechar e voltar para o início</button>
          </div>
        )}
      </Modal>

      {/* Modal de confirmação de saída */}
      <Modal 
        isOpen={confirmExitModalIsOpen}
        onClose={cancelExit}
      >
        <h2>Você tem certeza que deseja sair?</h2>
 <button onClick={confirmExit} className="mx-2 itens text-white" style={{backgroundColor: "#17a2b8"}}>Sim</button>        <button onClick={cancelExit} className="mx-2 itens text-white" style={{backgroundColor: "gray"}}>Não</button>
      </Modal>
    </section>
  );
}
