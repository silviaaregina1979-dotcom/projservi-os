/**
 * Configurações centrais do sistema de agendamentos.
 * Mantenha aqui os nomes das abas e seus cabeçalhos.
 */

const APP_CONFIG = Object.freeze({
  NOME: 'Sistema de Agendamentos',
  VERSAO: '0.1.0',
  MENU: 'Agendamentos',
  ABAS: [
    {
      nome: 'CLIENTES',
      cor: '#1a73e8',
      cabecalhos: [
        'ID_CLIENTE', 'NOME', 'TELEFONE', 'EMAIL', 'CPF_CNPJ',
        'DATA_CADASTRO', 'STATUS', 'OBSERVACOES'
      ]
    },
    {
      nome: 'FUNCIONARIOS',
      cor: '#188038',
      cabecalhos: [
        'ID_FUNCIONARIO', 'NOME', 'TELEFONE', 'EMAIL',
        'ESPECIALIDADE', 'DATA_ADMISSAO', 'STATUS', 'OBSERVACOES'
      ]
    },
    {
      nome: 'SERVICOS',
      cor: '#9334e6',
      cabecalhos: [
        'ID_SERVICO', 'NOME', 'DESCRICAO', 'DURACAO_MIN',
        'PRECO', 'STATUS'
      ]
    },
    {
      nome: 'AGENDAMENTOS',
      cor: '#f9ab00',
      cabecalhos: [
        'ID_AGENDAMENTO', 'ID_CLIENTE', 'ID_FUNCIONARIO',
        'ID_SERVICO', 'DATA', 'HORA_INICIO', 'HORA_FIM',
        'STATUS', 'VALOR', 'OBSERVACOES', 'DATA_CRIACAO'
      ]
    },
    {
      nome: 'DISPONIBILIDADE',
      cor: '#12a594',
      cabecalhos: [
        'ID_DISPONIBILIDADE', 'ID_FUNCIONARIO', 'DIA_SEMANA',
        'HORA_INICIO', 'HORA_FIM', 'ATIVO'
      ]
    },
    {
      nome: 'BLOQUEIOS',
      cor: '#d93025',
      cabecalhos: [
        'ID_BLOQUEIO', 'ID_FUNCIONARIO', 'DATA',
        'HORA_INICIO', 'HORA_FIM', 'MOTIVO'
      ]
    },
    {
      nome: 'CONFIGURACOES',
      cor: '#5f6368',
      cabecalhos: ['CHAVE', 'VALOR', 'DESCRICAO']
    },
    {
      nome: 'LOGS',
      cor: '#80868b',
      cabecalhos: [
        'ID_LOG', 'DATA_HORA', 'NIVEL', 'MODULO',
        'MENSAGEM', 'DETALHES'
      ]
    }
  ]
});
