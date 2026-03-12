/* ╔══════════════════════════════════════════════════════════════════════╗
   ║                                                                      ║
   ║   CONFIGURAÇÃO DA OFICINA — edite este arquivo para personalizar     ║
   ║   o simulador de vendas com as informações da sua oficina.           ║
   ║                                                                      ║
   ║   Este arquivo é carregado automaticamente pelo simulador.           ║
   ║   Salve e recarregue a página para aplicar qualquer mudança.         ║
   ║                                                                      ║
   ╚══════════════════════════════════════════════════════════════════════╝ */

const oficina = {

  /* ── NOME DA OFICINA ──────────────────────────────────────────────────
     Aparece nas avaliações, relatórios e no coach de vendas.          */
  nome: "Oficina Premium",


  /* ── SERVIÇOS QUE A OFICINA FAZ ───────────────────────────────────────
     Os clientes simulados vão pedir esses serviços naturalmente.
     Adicione ou remova linhas conforme necessário.
     Formato: "Descrição do serviço",                                  */
  faz: [
    "Revisões gerais (troca de óleo, filtros, fluidos)",
    "Troca de itens de suspensão (amortecedores, buchas, pivôs, barras estabilizadoras)",
    "Manutenção de motores (correia dentada, bomba d'água, velas, bobinas)",
    "Diagnóstico e reparo de sensores e módulos eletrônicos",
    "Freios (pastilhas, discos, cilindros, fluido de freio)",
    "Embreagem (disco, platô, rolamento)",
    "Câmbio manual",
    "Vazamentos em geral (óleo, água, combustível)",
    "Escapamento e catalisador",
    "Pré-inspeção veicular",
  ],


  /* ── SERVIÇOS QUE A OFICINA NÃO FAZ ──────────────────────────────────
     IMPORTANTE: os clientes simulados vão pedir esses serviços
     de vez em quando, propositalmente, para testar se o atendente
     sabe comunicar os limites da oficina com clareza e indicar
     alternativas. Quanto mais difícil a persona, mais provável
     que ela insista ou reclame ao ouvir o "não fazemos".
     Adicione ou remova conforme a realidade da sua oficina.           */
  nao_faz: [
    "Alinhamento e balanceamento",
    "Ar condicionado (instalação ou manutenção)",
    "Autoelétrica em geral (som, alarme, vidros elétricos, faróis, chicotes)",
    "Funilaria e pintura",
    "Injeção eletrônica — reprogramação de ECU/chip",
    "Pneus (troca ou recapagem)",
  ],


  /* ── DIFERENCIAIS DA OFICINA ──────────────────────────────────────────
     O que torna sua oficina especial? Esses pontos são usados pelo
     coach de vendas para treinar argumentos de valor.                 */
  diferenciais: [
    "Ambiente limpo e organizado — diferente das oficinas tradicionais",
    "Transparência total no orçamento antes de qualquer serviço",
    "Mão de obra qualificada com mecânicos certificados",
    "Uso de peças originais ou de qualidade equivalente certificada",
    "Garantia de 90 dias em todos os serviços realizados",
    "Fotos e vídeos do serviço enviados por WhatsApp durante o processo",
  ],


  /* ── POLÍTICA DE PREÇO ────────────────────────────────────────────────
     Como a oficina se posiciona em termos de preço?
     Isso influencia como o coach orienta o atendente a responder
     objeções de preço.                                                */
  politica_preco: `
    A oficina cobra um pouco acima da média do mercado, mas justifica
    pelo nível de serviço, qualidade das peças e transparência.
    Não pratica "preço de portão" — sempre apresenta orçamento formal.
    Desconto é possível em serviços múltiplos ou cliente recorrente,
    mas nunca como resposta a pressão ou chantagem do cliente.
  `,


  /* ── PRAZO MÉDIO ──────────────────────────────────────────────────────
     Informação importante para o atendente comunicar corretamente.   */
  prazo_medio: `
    Revisão simples (óleo + filtros): entrega no mesmo dia.
    Serviços de suspensão: 1 a 2 dias úteis.
    Serviços de motor: combinado após diagnóstico, geralmente 2 a 5 dias.
    Diagnóstico eletrônico: até 24h para o laudo.
  `,


  /* ── FORMAS DE PAGAMENTO ──────────────────────────────────────────────  */
  pagamento: "Pix, dinheiro, cartão de débito e crédito (até 3x sem juros).",


  /* ── OBSERVAÇÕES GERAIS ───────────────────────────────────────────────
     Qualquer informação extra relevante para o contexto do roleplay.
     Escreva em texto livre.                                           */
  observacoes: `
    A oficina não faz orçamento por foto ou WhatsApp — o carro precisa
    estar presencialmente para diagnóstico correto.

    Para frotas com mais de 3 veículos, existe condição especial de
    atendimento prioritário e faturamento quinzenal — assunto tratado
    diretamente com a gerência.

    Clientes que chegam indicados por outros clientes têm desconto
    de 10% no primeiro serviço.
  `,


  /* ── CENÁRIOS DE TESTE ────────────────────────────────────────────────
     Situações específicas que os clientes simulados vão provocar
     durante a conversa para testar como o atendente reage.

     Cada cenário tem:
       situacao        → o que o cliente vai dizer ou perguntar
       resposta_esperada → o que o atendente deveria responder corretamente

     O cliente vai introduzir esses cenários de forma natural,
     sem avisar que é um teste. Quanto mais difícil a persona,
     mais insistente ela será ao provocar a situação.

     Adicione quantos cenários quiser. Deixe o array vazio [] para
     desativar completamente.                                         */
  cenarios_teste: [

    {
      situacao: "Dizer que já tem as peças compradas e perguntar se a oficina instala",
      resposta_esperada: "Explicar educadamente que a oficina não instala peças do cliente — apenas peças fornecidas pela própria oficina, pois não pode garantir a qualidade ou procedência. Oferecer de fazer a cotação das peças corretas.",
    },

    {
      situacao: "Pedir desconto prometendo indicar amigos ou deixar avaliação 5 estrelas",
      resposta_esperada: "Agradecer a intenção, mas não ceder desconto como troca — o preço reflete a qualidade do serviço. Pode mencionar o desconto de indicação formal (10% no primeiro serviço do indicado), mas não como moeda de troca imediata.",
    },

    {
      situacao: "Perguntar se pode parcelar em muitas vezes (ex: 10x, 12x)",
      resposta_esperada: "Informar as condições reais de pagamento (até 3x sem juros no cartão). Não inventar condições que não existem. Se o cliente pressionar, sugerir Pix ou negociar o escopo do serviço.",
    },

    {
      situacao: "Questionar se o mecânico que vai mexer no carro é experiente / pedir para falar com o mecânico",
      resposta_esperada: "Transmitir confiança na equipe sem prometer algo irreal. Pode dizer que os mecânicos são certificados e que o atendente é o ponto de contato, mas registrar a preferência do cliente.",
    },

    // ── Adicione novos cenários abaixo seguindo o mesmo formato: ──────
    //
    // {
    //   situacao: "Descrever o problema aqui",
    //   resposta_esperada: "O que o atendente deveria fazer ou dizer",
    // },

  ],

};
/* ════════════════════════════════════════════════════════════════════════
   FIM DA CONFIGURAÇÃO — não edite abaixo desta linha
   ════════════════════════════════════════════════════════════════════════ */
