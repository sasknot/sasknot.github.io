var LOCALE = {
  'name': {
    'pt': 'Rafael Francisco Shiroma da Silva',
    'ja': '城間ダシルバ ラファエル'
  },
  'stack': {
    'pt': 'stack atual é',
    'ja': 'スタックは'
  },
  'projects': {
    'pt': 'projetos',
    'ja': 'プロジェクト'
  },
  'projects-repo': {
    'pt': 'Repositório Git',
    'ja': 'gitリポジトリ'
  },
  'projects-demo': {
    'pt': 'Demonstração',
    'ja': 'ライブデモ'
  },
  'projects-openai': {
    'pt': 'primeiro bootstrap com Vite + React, aprendendo API da OpenAI',
    'ja': 'Vite+Reactでの最初のブートストラップ、OpenAI APIの学習'
  },
  'projects-tokoro': {
    'pt': 'primeiro bootstrap com CRA, aprendendo integração com Mapbox',
    'ja': 'CRAでの最初のブートストラップ、Mapboxの学習'
  },
  'projects-agenda': {
    'pt': 'aprendendo conceitos e implementações de Vue 3 + Vite + TailwindCSS',
    'ja': 'Vue 3 + Vite + TailwindCSSのコンセプトや実現を勉強しています'
  },
  'projects-nlw': {
    'pt': 'Aprendendo ReactJS e React Native com a',
    'ja': 'ReactJSとReact Nativeの勉強しています。'
  },
  'projects-moveit': {
    'pt': 'complete desafios de exercícios físicos e se motive com suas vitórias.',
    'ja': '運動の挑戦を完了して優勝すると気合を入れます。'
  },
  'projects-happy': {
    'pt': '"Happy" é um meio para conectar orfanatos e quem os quer visitar. Está separada em 3 apss: api, web e mobile.',
    'ja': '「ハッピー」は、見に行きたい方と孤児院をつなぐ方法です。 3つのアプリに分かれています： api、web、モバイル。'
  },
  'projects-proffy': {
    'pt': '"Proffy" é um meio para conectar professores a alunos. Está separada em 3 apps: api, web e mobile.',
    'ja': '「プロフィー」は、教師と生徒をつなぐ方法です。 3つのアプリに分かれています： api、web、モバイル。'
  },
  'projects-sg': {
    'pt': 'uma rede social para gamers (em desenvolvimento)',
    'ja': 'ゲーマーへのソーシャルネットワーク（制作中）。'
  },
  'projects-gc': {
    'pt': 'um plugin jQuery muito antigo para colocar elementos em um grid',
    'ja': '要素をグリッドに配置するためのとても古いjQueryプラグイン。'
  },
  'thanks': {
    'pt': 'obrigado pela leitura!',
    'ja': '読んでくれてありがとうございました！'
  }
};

const LANGUAGE_DEFAULT = 'en';
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
