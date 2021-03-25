var LOCALE = {
  'name': {
    'pt': 'Rafael Francisco Shiroma da Silva',
    'jp': '城間ダシルバ ラファエル'
  },
  'position': {
    'pt': 'Desenvolvedor de Software',
    'jp': 'ソフトウェアデベロッパー'
  },
  'stack': {
    'pt': 'minha stack é',
    'jp': 'スタックは'
  },
  'stack-also': {
    'pt': 'mas eu também faço',
    'jp': 'でもこれもできる'
  },
  'works': {
    'pt': 'trabalhos',
    'jp': '作品'
  },
  'projects': {
    'pt': 'projetos',
    'jp': 'プロジェクト'
  },
  'projects-nlw4': {
    'pt': 'complete desafios de exercícios físicos e se motive com suas vitórias.',
    'jp': '運動の挑戦を完了して優勝すると気合を入れます。'
  },
  'projects-nlw3': {
    'pt': '"Happy" é um meio para conectar orfanatos e quem os quer visitar. Está separada em 3 apss: api, web e mobile.',
    'jp': '「ハッピー」は、見に行きたい方と孤児院をつなぐ方法です。 3つのアプリに分かれています： api、web、モバイル。'
  },
  'projects-nlw2': {
    'pt': '"Proffy" é um meio para conectar professores a alunos. Está separada em 3 apps: api, web e mobile.',
    'jp': '「プロフィー」は、教師と生徒をつなぐ方法です。 3つのアプリに分かれています： api、web、モバイル。'
  },
  'projects-sg': {
    'pt': 'uma rede social para gamers (em desenvolvimento)',
    'jp': 'ゲーマーへのソーシャルネットワーク（制作中）。'
  },
  'projects-gc': {
    'pt': 'um plugin jQuery muito antigo para colocar elementos em um grid',
    'jp': '要素をグリッドに配置するためのとても古いjQueryプラグイン。'
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
