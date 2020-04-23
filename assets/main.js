var LOCALE = {
  'name': {
    'pt': 'Rafael Francisco Shiroma da Silva',
    'jp': '城間ダシルバ ラファエル'
  },
  'position': {
    'pt': 'Desenvolvedor de Software',
    'jp': 'ソフトウェアデベロッパー'
  },
  'description': {
    'pt': 'Sou uma pessoa que gosta de desafios. Estou preparado para aprender algo novo todos os dias, e gosto de aplicar este conhecimento que ganhei em tudo que preciso resolver. Eu trabalho com programação todos os dias, fazendo tudo que tenha a ver com web, e, tenho que admitir, não tem nada mais gratificante do que ver as pessoas envolvidas apreciando as coisas que você faz.',
    'jp': '私は挑戦が好きな人です。 私は毎日何かを学ぶ準備ができており、解決する必要があるすべてのもので得たこの知識を適用したいと思っています。 私は毎日プログラミングに取り組み、Webに関連するものは何でも作ります。そして、認めなければならないのは、関係する人々が自分の作品を楽しんでいるのを見ることほどやりがいがあります。',
  },
  'skills': {
    'pt': 'habilidades',
    'jp': 'スキル'
  },
  'stack': {
    'pt': 'minha stack é',
    'jp': 'スタックは'
  },
  'stack-also': {
    'pt': 'mas eu também faço',
    'jp': '私もこれをします'
  },
  'works': {
    'pt': 'trabalhos',
    'jp': '作品'
  },
  'thanks': {
    'pt': 'obrigado pela leitura!',
    'jp': '読んでくれてありがとうございました！'
  }
};

var LANGUAGE_DEFAULT = 'en';
var $refs = {};

Object.keys(LOCALE).forEach(function(refId) {
  var nodeList = document.querySelectorAll('[x-ref="' + refId + '"]');

  if (nodeList.length) {
    // Stores the strings of default language in LOCALE
    LOCALE[refId][LANGUAGE_DEFAULT] = nodeList[0].innerHTML.trim();

    // Stores node references and removes x-ref attribute
    $refs[refId] = [];
    nodeList.forEach(function(current) {
      $refs[refId].push(current);
      current.removeAttribute('x-ref');
    });
  }
});

document.querySelectorAll('.language_holder button').forEach(function(button) {
  button.addEventListener('click', function() {
    var language = this.innerHTML.toLowerCase();

    // Iterate over references ids of LOCALE
    Object.keys(LOCALE).forEach(function(refId) {
      var nodeList = $refs[refId];

      // Iterates over references if it exists
      if (nodeList) {
        nodeList.forEach(function(current) {
          current.innerHTML = LOCALE[refId][language];
        });
      }
    });
  })
});
