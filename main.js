var LOCALE = {
  'position': {
    'pt': 'Desenvolvedor de Software',
    'es': 'teste'
  },
  'description': {
    'pt': 'Sou uma pessoa que gosta de desafios. Estou preparado para aprender algo novo todos os dias, e gosto de aplicar este conhecimento que ganhei em tudo que preciso resolver. Eu trabalho com programação todos os dias, fazendo tudo que tenha a ver com web, e, tenho que admitir, não tem nada mais gratificante do que ver as pessoas envolvidas apreciando as coisas que você faz.'
  },
  'skills': {
    'pt': 'habilidades'
  },
  'works': {
    'pt': 'trabalhos'
  },
  'exp-title': {
    'pt': 'experiências'
  },
  'exp-crane': {
    'pt': 'Agência digital. Desenvolvi ainda mais meu conhecimento sobre task runners e frameworks MVC Front End. Fazia webapps, hotsites e manutenção em revistas online mensais.'
  },
  'exp-spume': {
    'pt': 'App Mobile para notícias e Analytics de BigData. Meu trabalho era desenvolvedor ferramentas para análise e relatórios de BigData relacionada às notícias que o algoritmo principal juntava.'
  },
  'exp-move': {
    'pt': 'Agência digital. Aprendi a usar frameworks MVC Front End. Customizei o CMS que já existia para a necessidade de cada cliente.'
  },
  'exp-moneto': {
    'pt': 'App Mobile e Web para processar pagamentos. Nós tínhamos um time para desenvolver o site principal, app web, app mobile e gateway para processar pagamentos. Inicialmente eu desenvolvia somente o site, mas acabei me envolvendo com todas as partes do produto por necessidade. Mais tarde, a empresa foi renomeada para "Moneto".'
  },
  'exp-phocus': {
    'pt': 'Agência digital. Aprendi a usar task runners quando eles começaram a se popularizar. Nós desenvolvemos uma ferramenta para composição de uma homepage com widgets customizados (parecido com o Visual Composer do WordPress).'
  },
  'exp-sp': {
    'pt': 'São Paulo, Brasil'
  },
  'exp-sjc': {
    'pt': 'São José dos Campos, Brasil'
  },
  'networks': {
    'pt': 'redes'
  },
  'thanks': {
    'pt': 'obrigado pela leitura!'
  }
};

var LANGUAGE_DEFAULT = 'en'
var $refs = {};

Object.keys(LOCALE).forEach(function(refId) {
  var elements = document.querySelectorAll('[x-ref="' + refId + '"]');

  if (elements.length) {
    LOCALE[refId][LANGUAGE_DEFAULT] = elements[0].innerHTML.trim();

    $refs[refId] = [];
    elements.forEach(function(current) {
      $refs[refId].push(current);
      current.removeAttribute('x-ref');
    });
  }
});

document.querySelectorAll('.language_holder button').forEach(function(button) {
  button.addEventListener('click', function() {
    var LANGUAGE = this.innerHTML.toLowerCase();

    Object.keys(LOCALE).forEach(function(refId) {
      var elements = $refs[refId];

      if (elements) {
        elements.forEach(function(current) {
          current.innerHTML = LOCALE[refId][LANGUAGE];
        });
      }
    });
  })
});
