// import React, { useState } from 'react';
// import { ChevronLeft, Star } from 'lucide-react'; // Usando lucide-react para ícones
// import Footer from "./components/Footer"

// // Componente para o campo de avaliação de 0 a 5
// const RatingInput = ({ rating, setRating }) => {
//   const maxRating = 5;
  
//   // Array de estrelas para mapear
//   const stars = Array(maxRating).fill(0);

//   return (
//     <div className="flex space-x-1">
//       {stars.map((_, index) => {
//         const value = index + 1;
//         const isFilled = value <= rating;

//         return (
//           <Star
//             key={value}
//             size={24}
//             className={`cursor-pointer transition-colors duration-200 ${
//               isFilled ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600 hover:text-yellow-400'
//             }`}
//             onClick={() => setRating(value)}
//             // Permite desmarcar todas as estrelas se clicar na primeira
//             onDoubleClick={() => setRating(value === 1 && rating === 1 ? 0 : value)}
//           />
//         );
//       })}
//     </div>
//   );
// };

// // Componente principal da página
// const FormAvaliation = () => {
//   // ATENÇÃO: Substitua este valor pelo endpoint real da sua API
//   const API_ENDPOINT = 'https://api-viviane-3.onrender.com/avaliacao'; 

//   const [formData, setFormData] = useState({
//     nome: '',
//     dia: '',
//     mes: '',
//     ano: '',
//     avaliacao: '',
//     nota: 0,
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleRatingChange = (newRating) => {
//     setFormData(prev => ({ ...prev, nota: newRating }));
//   };

//   const handleSubmit = async (e) => { // Tornando a função assíncrona
//     e.preventDefault();
//     setIsSubmitting(true);
//     setMessage(null);

//     // Preparar os dados para o formato JSON da API
//     const dataToSend = {
//       clientName: formData.nome,
//       reviewDate: `${formData.ano}-${formData.mes}-${formData.dia}`, // Formatando data (ex: 2023-11-24)
//       reviewText: formData.avaliacao,
//       rating: formData.nota,
//       // Adicione outros campos necessários pela sua API aqui
//     };

//     try {
//       // Fazendo a requisição POST para a API
//       const response = await fetch(API_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Adicione cabeçalhos de autenticação, se necessário (ex: 'Authorization': 'Bearer token')
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) {
//         // Lidar com erros HTTP (4xx, 5xx)
//         const errorData = await response.json().catch(() => ({ message: 'Erro desconhecido.' }));
//         throw new Error(`Falha no envio da avaliação. Status: ${response.status}. Detalhe: ${errorData.message || 'Verifique a API.'}`);
//       }

//       // Sucesso no envio
//       console.log('Dados da Avaliação Enviados com sucesso:', dataToSend);
//       setMessage({ type: 'success', text: 'Sua avaliação foi enviada com sucesso! Agradecemos o seu feedback.' });
      
//       // Resetar o formulário
//       setFormData({
//         nome: '',
//         dia: '',
//         mes: '',
//         ano: '',
//         avaliacao: '',
//         nota: 0,
//       });

//     } catch (error) {
//       // Lidar com erros de rede ou a exceção lançada acima
//       console.error('Erro ao enviar avaliação:', error);
//       setMessage({ type: 'error', text: `Ocorreu um erro ao enviar: ${error.message || 'Verifique a conexão de rede.'}` });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleGoBack = () => {
//     // Em um ambiente de aplicação real (com React Router, etc.), faríamos a navegação.
//     // Aqui, apenas simulamos a ação e tentamos voltar no histórico do navegador.
//     if (window.history.length > 1) {
//       window.history.back();
//     } else {
//       console.log('Ação de Voltar: Não há histórico anterior para voltar.');
//       setMessage({ type: 'info', text: 'Simulação de Voltar: Não há página anterior no histórico do navegador.' });
//     }
//   };

//   // Classes de estilo para inputs e botões, seguindo a paleta escura/dourada
//   const inputStyle = "w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-500";
//   const labelStyle = "block text-sm font-medium text-gray-300 mb-1";
  
//   return (
//     <div>
//         <div className="min-h-screen bg-gray-950 p-4 sm:p-8 flex items-center justify-center font-sans">
//         <div className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-2xl border border-yellow-800/20">
            
//             {/* Botão Voltar */}
//             <button
//             onClick={handleGoBack}
//             className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors mb-6 text-sm sm:text-base"
//             aria-label="Voltar para a página anterior"
//             >
//             <ChevronLeft size={20} className="mr-1" />
//             Voltar para a página anterior
//             </button>

//             {/* Título Principal - Estilo Dourado/Elegante */}
//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text font-Italiana font-bold">
//             Nos Avalie
//             </h1>

//             {/* Mensagens de Feedback */}
//             {message && (
//             <div className={`p-3 rounded-lg mb-4 ${
//                 message.type === 'success' 
//                 ? 'bg-green-600/20 text-green-300' 
//                 : message.type === 'error'
//                 ? 'bg-red-600/20 text-red-300'
//                 : 'bg-blue-600/20 text-blue-300' // 'info'
//             }`}>
//                 {message.text}
//             </div>
//             )}

//             {/* Formulário */}
//             <form onSubmit={handleSubmit} className="space-y-6">
            
//             {/* Campo Nome */}
//             <div>
//                 <label htmlFor="nome" className={labelStyle}>Nome Completo</label>
//                 <input
//                 type="text"
//                 id="nome"
//                 name="nome"
//                 value={formData.nome}
//                 onChange={handleInputChange}
//                 className={inputStyle}
//                 required
//                 placeholder="Digite seu nome"
//                 />
//             </div>

//             {/* Campo Data Atual (Dia, Mês, Ano) */}
//             <div className="grid grid-cols-3 gap-4">
//                 <div>
//                 <label htmlFor="dia" className={labelStyle}>Dia</label>
//                 <input
//                     type="number"
//                     id="dia"
//                     name="dia"
//                     value={formData.dia}
//                     onChange={handleInputChange}
//                     className={inputStyle}
//                     required
//                     min="1"
//                     max="31"
//                     placeholder="DD"
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="mes" className={labelStyle}>Mês</label>
//                 <input
//                     type="number"
//                     id="mes"
//                     name="mes"
//                     value={formData.mes}
//                     onChange={handleInputChange}
//                     className={inputStyle}
//                     required
//                     min="1"
//                     max="12"
//                     placeholder="MM"
//                 />
//                 </div>
//                 <div>
//                 <label htmlFor="ano" className={labelStyle}>Ano</label>
//                 <input
//                     type="number"
//                     id="ano"
//                     name="ano"
//                     value={formData.ano}
//                     onChange={handleInputChange}
//                     className={inputStyle}
//                     required
//                     min="2020" // Ajuste conforme necessário
//                     max={new Date().getFullYear()}
//                     placeholder="AAAA"
//                 />
//                 </div>
//             </div>
            
//             {/* Campo Texto de Avaliação */}
//             <div>
//                 <label htmlFor="avaliacao" className={labelStyle}>Texto da Avaliação</label>
//                 <textarea
//                 id="avaliacao"
//                 name="avaliacao"
//                 value={formData.avaliacao}
//                 onChange={handleInputChange}
//                 rows="5"
//                 className={`${inputStyle} resize-none`}
//                 required
//                 placeholder="Compartilhe sua experiência e feedback..."
//                 ></textarea>
//             </div>

//             {/* Campo Nota de 0 a 5 */}
//             <div>
//                 <label className={labelStyle}>Nota de 0 a 5</label>
//                 <RatingInput rating={formData.nota} setRating={handleRatingChange} />
//                 <p className="mt-2 text-sm text-gray-500">
//                 {formData.nota} {formData.nota === 1 ? 'estrela selecionada' : 'estrelas selecionadas'}
//                 </p>
//             </div>

//             {/* Botão de Envio (Estilo Dourado/Contraste) */}
//             <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 
//                 ${isSubmitting 
//                     ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
//                     : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 shadow-lg shadow-yellow-500/30'
//                 }`}
//             >
//                 {isSubmitting ? 'Enviando Avaliação...' : 'Enviar Avaliação'}
//             </button>
//             </form>
//         </div>
//         </div>
//         <Footer/>
//     </div>
//   );
// };

// export default FormAvaliation;



import React, { useState } from 'react';
import { ChevronLeft, Star } from 'lucide-react'; 
// Importe o Footer se ele for um componente acessível
// import Footer from "./components/Footer" 

// Interface para garantir a tipagem (Se estiver usando TypeScript, você pode definir essa interface)
/*
interface FormData {
    nome: string;
    dia: string;
    mes: string;
    ano: string;
    avaliacao: string;
    nota: number;
}
*/

// Componente para o campo de avaliação de 0 a 5
const RatingInput = ({ rating, setRating }) => {
  const maxRating = 5;
  
  // Array de estrelas para mapear
  const stars = Array(maxRating).fill(0);

  return (
    <div className="flex space-x-1">
      {stars.map((_, index) => {
        const value = index + 1;
        const isFilled = value <= rating;

        return (
          <Star
            key={value}
            size={24}
            className={`cursor-pointer transition-colors duration-200 ${
              isFilled ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600 hover:text-yellow-400'
            }`}
            onClick={() => setRating(value)}
            // Permite desmarcar todas as estrelas se clicar na primeira
            onDoubleClick={() => setRating(value === 1 && rating === 1 ? 0 : value)}
          />
        );
      })}
    </div>
  );
};

// Componente principal da página
const FormAvaliation = () => {
  // Endpoint da API
  const API_ENDPOINT = 'https://api-viviane.onrender.com/avaliacao'; 

  const [formData, setFormData] = useState({
    nome: '',
    dia: '',
    mes: '',
    ano: '',
    avaliacao: '',
    nota: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Para inputs numéricos, armazena como string (como você pediu para a API)
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setFormData(prev => ({ ...prev, nota: newRating }));
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validação simples
    if (formData.nota === 0) {
        setMessage({ type: 'error', text: 'Por favor, selecione uma nota de 1 a 5 estrelas.' });
        setIsSubmitting(false);
        return;
    }

    // ✅ CORREÇÃO: Estrutura do JSON ajustada para enviar dia, mes e ano separadamente.
    // Usamos padStart(2, '0') para formatar dia/mes com 2 dígitos, o que pode ser útil.
    const dataToSend = {
      // Assumindo que a API espera as chaves com os mesmos nomes:
      nome: formData.nome,             // String
      dia: formData.dia.toString().padStart(2, '0'),   // String (ex: "05")
      mes: formData.mes.toString().padStart(2, '0'),   // String (ex: "11")
      ano: formData.ano.toString(),    // String (ex: "2023")
      avaliacao: formData.avaliacao,   // String
      nota: formData.nota,             // Int (Number no JS)
    };
    
    console.log('Dados a enviar:', dataToSend);

    try {
      // Fazendo a requisição POST para a API
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Adicione cabeçalhos de autenticação, se necessário
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        // Tentar obter a mensagem de erro do backend para melhor debug
        const errorText = await response.text();
        let detail = `Status: ${response.status}. Detalhe: ${errorText}`;
        try {
            const errorJson = JSON.parse(errorText);
            detail = `Status: ${response.status}. Mensagem API: ${errorJson.message || JSON.stringify(errorJson)}`;
        } catch (e) {
             // Se não for JSON, usa o texto puro
        }
        throw new Error(`Falha no envio da avaliação. ${detail}`);
      }

      // Sucesso no envio
      setMessage({ type: 'success', text: 'Sua avaliação foi enviada com sucesso! Agradecemos o seu feedback.' });
      
      // Resetar o formulário
      setFormData({
        nome: '',
        dia: '',
        mes: '',
        ano: '',
        avaliacao: '',
        nota: 0,
      });

    } catch (error) {
      // Lidar com erros de rede, CORS ou a exceção lançada acima
      console.error('Erro ao enviar avaliação:', error);
      setMessage({ 
        type: 'error', 
        text: `Ocorreu um erro ao enviar. Verifique o console para detalhes ou o CORS da API. Mensagem: ${error.message}` 
    });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    // Ação de Voltar
    if (window.history.length > 1) {
      window.history.back();
    } else {
      console.log('Ação de Voltar: Não há histórico anterior para voltar.');
      setMessage({ type: 'info', text: 'Simulação de Voltar: Não há página anterior no histórico do navegador.' });
    }
  };

  // Classes de estilo para inputs e botões, seguindo a paleta escura/dourada
  const inputStyle = "w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-gray-500";
  const labelStyle = "block text-sm font-medium text-gray-300 mb-1";
  
  return (
    <div>
        <div className="min-h-screen bg-gray-950 p-4 sm:p-8 flex items-center justify-center font-sans">
        <div className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-2xl border border-yellow-800/20">
            
            {/* Botão Voltar */}
            <button
            onClick={handleGoBack}
            className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors mb-6 text-sm sm:text-base"
            aria-label="Voltar para a página anterior"
            >
            <ChevronLeft size={20} className="mr-1" />
            Voltar para a página anterior
            </button>

            {/* Título Principal - Estilo Dourado/Elegante */}
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text font-Italiana font-bold">
            Nos Avalie
            </h1>

            {/* Mensagens de Feedback */}
            {message && (
            <div className={`p-3 rounded-lg mb-4 ${
                message.type === 'success' 
                ? 'bg-green-600/20 text-green-300' 
                : message.type === 'error'
                ? 'bg-red-600/20 text-red-300'
                : 'bg-blue-600/20 text-blue-300' // 'info'
            }`}>
                {message.text}
            </div>
            )}

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Campo Nome */}
            <div>
                <label htmlFor="nome" className={labelStyle}>Nome Completo</label>
                <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                className={inputStyle}
                required
                placeholder="Digite seu nome"
                />
            </div>

            {/* Campo Data Atual (Dia, Mês, Ano) */}
            <div className="grid grid-cols-3 gap-4">
                <div>
                <label htmlFor="dia" className={labelStyle}>Dia</label>
                <input
                    type="number"
                    id="dia"
                    name="dia"
                    value={formData.dia}
                    onChange={handleInputChange}
                    className={inputStyle}
                    required
                    min="1"
                    max="31"
                    placeholder="DD"
                />
                </div>
                <div>
                <label htmlFor="mes" className={labelStyle}>Mês</label>
                <input
                    type="number"
                    id="mes"
                    name="mes"
                    value={formData.mes}
                    onChange={handleInputChange}
                    className={inputStyle}
                    required
                    min="1"
                    max="12"
                    placeholder="MM"
                />
                </div>
                <div>
                <label htmlFor="ano" className={labelStyle}>Ano</label>
                <input
                    type="number"
                    id="ano"
                    name="ano"
                    value={formData.ano}
                    onChange={handleInputChange}
                    className={inputStyle}
                    required
                    min="2020" // Ajuste conforme necessário
                    max={new Date().getFullYear()}
                    placeholder="AAAA"
                />
                </div>
            </div>
            
            {/* Campo Texto de Avaliação */}
            <div>
                <label htmlFor="avaliacao" className={labelStyle}>Texto da Avaliação</label>
                <textarea
                id="avaliacao"
                name="avaliacao"
                value={formData.avaliacao}
                onChange={handleInputChange}
                rows="5"
                className={`${inputStyle} resize-none`}
                required
                placeholder="Compartilhe sua experiência e feedback..."
                ></textarea>
            </div>

            {/* Campo Nota de 0 a 5 */}
            <div>
                <label className={labelStyle}>Nota de 0 a 5 <span className="text-red-400">*</span></label>
                <RatingInput rating={formData.nota} setRating={handleRatingChange} />
                <p className="mt-2 text-sm text-gray-500">
                {formData.nota} {formData.nota === 1 ? 'estrela selecionada' : 'estrelas selecionadas'}
                </p>
            </div>

            {/* Botão de Envio (Estilo Dourado/Contraste) */}
            <button
                type="submit"
                disabled={isSubmitting || formData.nota === 0}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 
                ${isSubmitting || formData.nota === 0
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 shadow-lg shadow-yellow-500/30'
                }`}
            >
                {isSubmitting ? 'Enviando Avaliação...' : 'Enviar Avaliação'}
            </button>
            </form>
        </div>
        </div>
        {/* Se você precisar do componente Footer, descomente: */}
        {/* <Footer/> */}
    </div>
  );
};

export default FormAvaliation;