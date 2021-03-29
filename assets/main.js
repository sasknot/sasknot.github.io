var LOCALE = {
  'name': {
    'pt-BR': 'Rafael Francisco Shiroma da Silva',
    'ja-JP': '城間ダシルバ ラファエル'
  },
  'position': {
    'pt-BR': 'Desenvolvedor de Software',
    'ja-JP': 'ソフトウェア開発者'
  },
  'stack': {
    'pt-BR': 'stack atual é',
    'ja-JP': 'スタックは'
  },
  'projects': {
    'pt-BR': 'projetos',
    'ja-JP': 'プロジェクト'
  },
  'projects-repo': {
    'pt-BR': 'Repositório Git',
    'ja-JP': 'gitリポジトリ'
  },
  'projects-demo': {
    'pt-BR': 'Demonstração',
    'ja-JP': 'ライブデモ'
  },
  'projects-moveit': {
    'pt-BR': 'complete desafios de exercícios físicos e se motive com suas vitórias.',
    'ja-JP': '運動の挑戦を完了して優勝すると気合を入れます。'
  },
  'projects-happy': {
    'pt-BR': '"Happy" é um meio para conectar orfanatos e quem os quer visitar. Está separada em 3 apss: api, web e mobile.',
    'ja-JP': '「ハッピー」は、見に行きたい方と孤児院をつなぐ方法です。 3つのアプリに分かれています： api、web、モバイル。'
  },
  'projects-proffy': {
    'pt-BR': '"Proffy" é um meio para conectar professores a alunos. Está separada em 3 apps: api, web e mobile.',
    'ja-JP': '「プロフィー」は、教師と生徒をつなぐ方法です。 3つのアプリに分かれています： api、web、モバイル。'
  },
  'projects-sg': {
    'pt-BR': 'uma rede social para gamers (em desenvolvimento)',
    'ja-JP': 'ゲーマーへのソーシャルネットワーク（制作中）。'
  },
  'projects-gc': {
    'pt-BR': 'um plugin jQuery muito antigo para colocar elementos em um grid',
    'ja-JP': '要素をグリッドに配置するためのとても古いjQueryプラグイン。'
  },
  'thanks': {
    'pt-BR': 'obrigado pela leitura!',
    'ja-JP': '読んでくれてありがとうございました！'
  }
};

const LANGUAGE_DEFAULT = 'en-US';
const $refs = {};

Object.keys(LOCALE).forEach(function (refId) {
  const nodeList = document.querySelectorAll('[x-ref="' + refId + '"]');

  if (nodeList.length) {
    // Stores the strings of default language in LOCALE
    LOCALE[refId][LANGUAGE_DEFAULT] = nodeList[0].innerHTML.trim();

    // Stores node references and removes x-ref attribute
    $refs[refId] = [];
    nodeList.forEach(function (current) {
      $refs[refId].push(current);
      current.removeAttribute('x-ref');
    });
  }
});

document.querySelectorAll('.language_holder button').forEach(function (button) {
  button.addEventListener('click', function () {
    const language = this.dataset.lang;
    document.querySelector('html').lang = language

    // Iterate over references ids of LOCALE
    Object.keys(LOCALE).forEach(function (refId) {
      const nodeList = $refs[refId];

      // Iterates over references if it exists
      if (nodeList) {
        nodeList.forEach(function (current) {
          current.innerHTML = LOCALE[refId][language];
        });
      }
    });
  })
});
