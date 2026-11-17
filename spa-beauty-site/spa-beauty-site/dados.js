/* ============================================================
   DADOS EDITÁVEIS DO SITE — mexa só aqui para trocar textos,
   contatos, preços e imagens. Salve e recarregue a página.
   Imagens: coloque o arquivo na pasta imagens/ e escreva o
   caminho, por exemplo img:"imagens/facial.jpg".
   Deixando img:"" o site usa a ilustração padrão.
   ============================================================ */

/* Contatos (fictícios) e logo */
var CONFIG={wa:"553898700943",waShow:"+55 (38) 9870-0943",mail:"spabeauty@gmail.com",insta:"@spabeauty.com",addr:"Endereço a definir (projeto acadêmico)",logo:"imagens/logo.jpg",logoMostrarNome:true,imgInicio:"imagens/logo.jpg"};

/* Serviços */
var SV=[
{img:"imagens/estetica.jpg",id:"Estética facial",ic:"spark",a:"#e8a9b4",b:"#c98a96",d:"Cuidados para a pele do rosto, com protocolos pensados para cada necessidade.",l:["Limpeza de pele","Hidratação facial","Cuidados estéticos faciais","Tratamentos personalizados"],b2:"Pele mais limpa, hidratada e viçosa.",t:"60 min",p:"R$ 120"},
{img:"imagens/esteticacorporal.jpg",id:"Estética corporal",ic:"leaf",a:"#dcbfa6",b:"#b08a57",d:"Tratamentos para o corpo que unem cuidado estético e uma pausa na rotina.",l:["Cuidados corporais","Hidratação corporal","Tratamentos estéticos","Experiências de autocuidado"],b2:"Pele macia e sensação de renovação.",t:"75 min",p:"R$ 150"},
{img:"imagens/massagem.jpg",id:"Massagens e relaxamento",ic:"hand",a:"#c9a0aa",b:"#a5546a",d:"Massagens realizadas por profissional habilitado, para aliviar a tensão e desacelerar.",l:["Massagem relaxante","Massagem terapêutica (profissional habilitado)","Massagem nos pés","Momentos de relaxamento"],b2:"Menos tensão muscular e mais bem-estar.",t:"50 min",p:"R$ 130"},
{img:"imagens/areakids.jpg",id:"Espaço Kids",ic:"kid",a:"#f2c7a5",b:"#d98aa0",d:"Área recreativa infantil com atividades supervisionadas, enquanto os responsáveis aproveitam o spa.",l:["Área recreativa infantil","Brinquedos apropriados","Ambiente lúdico e acolhedor","Atividades supervisionadas"],b2:"Tranquilidade para quem cuida e diversão para quem brinca.",t:"2 h",p:"R$ 40"}];

/* Galeria: [nome, cor1, cor2, ícone, imagem] */
var GL=[["Recepção do spa","#e8a9b4","#c98a96","home","imagens/recepção.jpg"],["Sala de massagem","#c9a0aa","#a5546a","hand","imagens/slmassagem.jpg"],["Ambiente de estética","#e9cdbb","#b08a57","spark","imagens/slestetica.jpg"],["Espaço Kids","#f2c7a5","#d98aa0","kid","imagens/slkids.jpg"],["Decoração","#d9b9a3","#9c6b6f","heart","imagens/sldecoração.jpg"],["Área de relaxamento","#c7b3b8","#8a5a6a","leaf","imagens/slrelaxa.jpg"]];

/* Diferenciais */
var DF=[["heart","Beleza e bem-estar em um só lugar"],["kid","Área recreativa infantil integrada ao spa"],["hand","Atendimento acolhedor e humanizado"],["leaf","Ambiente planejado para dar tranquilidade"],["spark","Variedade de serviços de estética e relaxamento"],["home","Experiência pensada para as famílias"]];

/* Integrantes */
var TM=["Kauany","Ingrid","Ana Clara","Letícia"];

/* Nosso projeto */
var PR=[["Como surgiu","O Spa Beauty e Estética nasceu de uma atividade em sala de aula, nas aulas de Empreendedorismo. A proposta era criar um empreendimento que unisse beleza, autocuidado e praticidade."],["Problema identificado","Muitas pessoas, especialmente pais e responsáveis por crianças pequenas, têm dificuldade de reservar momentos de autocuidado por falta de alternativas para conciliar compromissos e cuidados infantis."],["Nossa solução","Um espaço com serviços de estética e massagens junto a uma área recreativa infantil, para uma experiência mais prática e acolhedora para as famílias."],["Proposta de valor","Ir além da estética tradicional, unindo cuidado pessoal, relaxamento e acolhimento familiar em um único ambiente."],["Objetivo do projeto","Demonstrar como uma ideia empreendedora pode identificar uma necessidade do público e transformá-la em oportunidade de negócio."]];
