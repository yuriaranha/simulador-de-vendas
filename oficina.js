/* ╔══════════════════════════════════════════════════════════════════════╗
   ║                                                                      ║
   ║   CONFIGURAÇÃO DA OFICINA — edite este arquivo livremente.           ║
   ║                                                                      ║
   ║   Salve o arquivo e recarregue o simulador para aplicar.             ║
   ║   Não é necessário mexer no index.html para personalizar.            ║
   ║                                                                      ║
   ╚══════════════════════════════════════════════════════════════════════╝ */

const oficina = {


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ NOME DA OFICINA                                                     │
     └─────────────────────────────────────────────────────────────────────┘ */
  nome: "Oficina Premium",


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ FREQUÊNCIA DOS CENÁRIOS DE TESTE                                    │
     │                                                                     │
     │ Controla com que frequência um cenário de teste vai ser ativado.    │
     │                                                                     │
     │ Valor entre 0 e 1:                                                  │
     │   0.0  → nunca (desativa completamente)                            │
     │   0.1  → 1 em cada 10 conversas  ← recomendado para iniciantes     │
     │   0.3  → 3 em cada 10 conversas                                    │
     │   0.5  → 1 em cada 2 conversas                                     │
     │   1.0  → sempre (toda conversa terá um cenário de teste)           │
     └─────────────────────────────────────────────────────────────────────┘ */
  frequencia_cenarios: 0.5,


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ SERVIÇOS QUE A OFICINA FAZ                                          │
     │ Clientes vão pedir esses serviços naturalmente durante o roleplay.  │
     └─────────────────────────────────────────────────────────────────────┘ */
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


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ SERVIÇOS QUE A OFICINA NÃO FAZ                                      │
     │ Clientes vão pedir esses de vez em quando para testar o atendente.  │
     └─────────────────────────────────────────────────────────────────────┘ */
  nao_faz: [
    "Alinhamento e balanceamento",
    "Ar condicionado (instalação ou manutenção)",
    "Autoelétrica em geral (som, alarme, vidros elétricos, faróis, chicotes)",
    "Funilaria e pintura",
    "Reprogramação de ECU / chip tuning",
    "Pneus (troca ou recapagem)",
  ],


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ POLÍTICAS DA OFICINA                                                │
     │                                                                     │
     │ Regras e posicionamentos que o atendente precisa saber defender.    │
     │ Os clientes vão questionar ou tentar contornar essas políticas.     │
     │                                                                     │
     │   regra   → o que a oficina não aceita ou como se posiciona        │
     │   motivo  → argumento que o atendente deve usar para justificar     │
     └─────────────────────────────────────────────────────────────────────┘ */
  politicas: [

    {
      regra: "A oficina NÃO instala peças trazidas pelo cliente.",
      motivo: `Não temos como garantir a procedência, qualidade ou compatibilidade
               da peça. Nossa garantia de serviço depende das peças que fornecemos.
               O atendente deve explicar isso com respeito, sem atacar o cliente,
               e oferecer uma cotação das peças corretas pela oficina.`,
    },

    {
      regra: "Não fazemos orçamento por foto ou WhatsApp — o carro precisa vir presencialmente.",
      motivo: `Diagnóstico correto exige ver e testar o veículo. Orçamento sem ver
               o carro gera surpresas e quebra confiança. O atendente deve convidar
               o cliente a trazer o carro e facilitar o agendamento.`,
    },

    {
      regra: "Não negociamos preço sob pressão ou ameaça.",
      motivo: `O preço reflete qualidade, mão de obra e garantia. Ceder sob pressão
               desvaloriza o trabalho e cria precedente ruim. O atendente deve
               manter firmeza com educação, argumentando valor, não preço.`,
    },

    {
      regra: "Não prometemos prazos sem diagnóstico completo.",
      motivo: `Comprometer prazo sem conhecer o real estado do veículo gera
               frustração. O correto é dar estimativa inicial e confirmar
               após o diagnóstico.`,
    },

    // ── Adicione novas políticas abaixo: ─────────────────────────────────
    //
    // {
    //   regra: "Descreva a política aqui",
    //   motivo: "Como o atendente deve argumentar",
    // },

  ],


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ CENÁRIOS DE TESTE                                                   │
     │                                                                     │
     │ Situações específicas que os clientes simulados vão provocar        │
     │ durante a conversa para testar como o atendente reage.              │
     │                                                                     │
     │ O cliente introduz a situação de forma natural, sem avisar          │
     │ que é um teste. Quanto mais difícil a persona, mais insistente.     │
     │                                                                     │
     │   situacao          → o que o cliente vai dizer ou fazer            │
     │   resposta_esperada → o que o atendente deveria responder           │
     │                                                                     │
     │ Deixe o array vazio [] para desativar.                              │
     └─────────────────────────────────────────────────────────────────────┘ */
  cenarios_teste: [

    {
      situacao: `Dizer que já comprou as peças e perguntar se a oficina instala.
                 Exemplos naturais: "Já comprei o amortecedor, vocês colocam?",
                 "Tenho as peças aqui em casa, é só a mão de obra",
                 "Achei mais barato na internet, podem instalar?".`,
      resposta_esperada: `Explicar educadamente que a oficina trabalha apenas com peças
                          próprias para garantir procedência e qualidade do serviço.
                          Não atacar a escolha do cliente. Oferecer cotação das peças
                          corretas e mostrar que o conjunto peça+garantia compensa.`,
    },

    {
      situacao: `Pedir desconto prometendo trazer clientes ou dar avaliação 5 estrelas.
                 Exemplos: "se eu vier sempre me dá um precinho?",
                 "tenho 50 pessoas no meu grupo que precisam de mecânico".`,
      resposta_esperada: `Agradecer a intenção sem prometer desconto como troca imediata.
                          Mencionar o programa de indicação (10% no primeiro serviço do
                          indicado). Não ceder à pressão.`,
    },

    {
      situacao: `Pedir parcelamento em muitas vezes (10x, 12x, 18x, boleto).
                 Exemplos: "tem como fazer em 12 vezes?", "aceita boleto parcelado?".`,
      resposta_esperada: `Informar as condições reais (cartão até 3x sem juros, Pix,
                          dinheiro). Não inventar condições inexistentes. Se pressionar,
                          sugerir priorizar o serviço mais urgente.`,
    },

    {
      situacao: `Pedir para falar diretamente com o mecânico ou questionar a experiência
                 da equipe. Exemplos: "quero falar com o mecânico", "esse cara tem
                 experiência?", "não quero qualquer um mexendo no meu carro".`,
      resposta_esperada: `Transmitir confiança na equipe com segurança. Reafirmar que o
                          atendente é o ponto de contato. Descrever brevemente a
                          qualificação da equipe sem prometer algo irreal.`,
    },

    {
      situacao: `Pedir para acompanhar o serviço dentro da oficina ou ver o carro
                 desmontado. Exemplos: "posso ficar aqui vendo?",
                 "quero acompanhar tudo que vão fazer".`,
      resposta_esperada: `Explicar a política de organização e segurança com cordialidade.
                          Oferecer como alternativa fotos e vídeos do processo enviados
                          por WhatsApp.`,
    },

    // ── Adicione novos cenários abaixo: ──────────────────────────────────
    //
    // {
    //   situacao: `Descreva o que o cliente vai dizer.
    //              Quanto mais detalhe, mais natural o cliente vai soar.`,
    //   resposta_esperada: `O que o atendente deveria fazer ou responder.`,
    // },

  ],


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ DIFERENCIAIS DA OFICINA                                             │
     │ Usados pelo coach para treinar argumentos de valor.                 │
     └─────────────────────────────────────────────────────────────────────┘ */
  diferenciais: [
    "Ambiente limpo e organizado — diferente das oficinas tradicionais",
    "Transparência total no orçamento antes de qualquer serviço",
    "Mão de obra qualificada com mecânicos certificados",
    "Uso de peças originais ou de qualidade equivalente certificada",
    "Garantia de 90 dias em todos os serviços realizados",
    "Fotos e vídeos do serviço enviados por WhatsApp durante o processo",
  ],


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ POLÍTICA DE PREÇO                                                   │
     └─────────────────────────────────────────────────────────────────────┘ */
  politica_preco: `
    Cobra acima da média, mas justifica pela qualidade, garantia e transparência.
    Desconto em pacotes ou clientes recorrentes — nunca sob pressão.
  `,


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ PRAZO MÉDIO POR TIPO DE SERVIÇO                                     │
     └─────────────────────────────────────────────────────────────────────┘ */
  prazo_medio: `
    Revisão simples (óleo + filtros): mesmo dia.
    Suspensão: 1 a 2 dias úteis.
    Motor: 2 a 5 dias úteis após diagnóstico.
    Diagnóstico eletrônico: laudo em até 24h.
  `,


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ FORMAS DE PAGAMENTO                                                 │
     └─────────────────────────────────────────────────────────────────────┘ */
  pagamento: "Pix, dinheiro, cartão de débito e crédito (até 3x sem juros).",


  /* ┌─────────────────────────────────────────────────────────────────────┐
     │ OBSERVAÇÕES GERAIS                                                  │
     └─────────────────────────────────────────────────────────────────────┘ */
  observacoes: `
    Frotas com mais de 3 veículos: atendimento prioritário e faturamento
    quinzenal — tratar com a gerência.

    Clientes indicados por outros clientes: 10% de desconto no primeiro serviço.
  `,

};
/* ════════════════════════════════════════════════════════════════════════════
   FIM DA CONFIGURAÇÃO — não edite abaixo desta linha
   ════════════════════════════════════════════════════════════════════════════ */
