const flowers = [
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Handroanthus_serratifolius.jpg",
    name: "Ipê-amarelo",
    scientificName: "Handroanthus albus",
    description: "O Ipê-amarelo é uma árvore icônica do Brasil, conhecida por suas vibrantes flores amarelas que florescem durante o inverno. Ela é famosa por criar um espetáculo dourado nas paisagens, especialmente quando suas flores caem, formando um tapete dourado no solo.",
    origin: "Regiões tropicais do Brasil.",
    floweringPeriod: "Inverno.",
    cultivation: "Cultivado em áreas com bastante sol e solo bem drenado.",
    tag: "flor árvore inverno amarelo brasil tropical",
    infoLink: "https://pt.wikipedia.org/wiki/Ip%C3%AA-amarelo-flor-de-algod%C3%A3o",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hibiscus_rosa-sinensis_flower_in_private_Austrian_garden_on_2016-03-20.jpg/420px-Hibiscus_rosa-sinensis_flower_in_private_Austrian_garden_on_2016-03-20.jpg",
    name: "Hibisco",
    scientificName: "Hibiscus rosa-sinensis",
    description: "O Hibisco possui flores grandes e coloridas, sendo amplamente usado em paisagismo e para a produção de chás medicinais. Suas flores são geralmente vermelhas, mas podem ser encontradas em outras cores, como rosa, branco e amarelo.",
    origin: "Ásia e adaptado ao Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Precisa de sol pleno e rega frequente para crescer saudavelmente.",
    tag: "flor arbusto primavera verão paisagismo chá",
    infoLink: "https://pt.wikipedia.org/wiki/Hibiscus",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cattleya_labiata_Orchi_1013.jpg/1280px-Cattleya_labiata_Orchi_1013.jpg",
    name: "Orquídea Cattleya",
    scientificName: "Cattleya labiata",
    description: "A Cattleya é conhecida como a rainha das orquídeas, com flores exuberantes e perfumadas. É muito apreciada em decoração e coleções, sendo uma das orquídeas mais icônicas e populares.",
    origin: "Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Requer clima quente e úmido, com boa drenagem e luz indireta.",
    tag: "orquídea flor tropical primavera verão decoração",
    infoLink: "https://pt.wikipedia.org/wiki/Cattleya",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/BROMELIA.JPG/800px-BROMELIA.JPG",
    name: "Bromélia",
    scientificName: "Bromeliaceae",
    description: "Com suas flores exóticas e folhas espinhosas, a bromélia é uma planta adaptada a climas tropicais, sendo uma das favoritas para compor jardins tropicais. Sua capacidade de armazenar água entre suas folhas a torna única.",
    origin: "Brasil.",
    floweringPeriod: "Variável.",
    cultivation: "Prefere solos bem drenados e necessita de rega moderada.",
    tag: "flor tropical exótica jardim bromélia água",
    infoLink: "https://pt.wikipedia.org/wiki/Brom%C3%A9lia",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Caesalpinia_echinata-flor.jpg",
    name: "Flor de Pau-brasil",
    scientificName: "Caesalpinia echinata",
    description: "As flores do Pau-brasil são pequenas, com pétalas amarelas e vermelhas. Esta árvore é símbolo da história e identidade do Brasil, além de ser valorizada por sua madeira resistente e utilizada na fabricação de instrumentos musicais.",
    origin: "Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Necessita de clima tropical e solo bem drenado.",
    tag: "flor árvore símbolo brasil madeira tropical",
    infoLink: "https://pt.wikipedia.org/wiki/Pau-brasil",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sempre-viva_da_Serra_do_Cip%C3%B3.jpg/1280px-Sempre-viva_da_Serra_do_Cip%C3%B3.jpg",
    name: "Sempre-viva",
    scientificName: "Eriocaulaceae",
    description: "A Sempre-viva é conhecida por manter sua cor e forma mesmo após ser colhida, sendo usada em arranjos florais secos. Ela cresce em campos abertos, adaptada a condições adversas, o que a torna símbolo de resistência.",
    origin: "Brasil.",
    floweringPeriod: "Verão.",
    cultivation: "Prefere clima seco e solo bem drenado.",
    tag: "flor resistência seca decoração arranjos",
    infoLink: "https://pt.wikipedia.org/wiki/Sempre-viva",
  },
  {
    imageUrl: "https://live.staticflickr.com/1125/5148968745_4b4005eb37_b.jpg",
    name: "Flor de Jatobá",
    scientificName: "Hymenaea courbaril",
    description: "As flores do jatobá são perfumadas e pequenas, geralmente brancas ou amarelas. Esta árvore é importante não só por sua madeira, mas também pelos frutos comestíveis que produzem, utilizados na culinária e na medicina tradicional.",
    origin: "Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Sol pleno e solo bem drenado.",
    tag: "flor árvore madeira culinária medicinal",
    infoLink: "https://pt.m.wikipedia.org/wiki/Ficheiro:Flor-do-jatoba.jpg",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vitregias02.jpg",
    name: "Victoria Regia",
    scientificName: "Victoria amazonica",
    description: "A Victoria Regia é uma das plantas aquáticas mais impressionantes, com folhas enormes e flores que abrem à noite. Esta planta é um símbolo da Amazônia e suas flores têm um ciclo peculiar de mudança de cor.",
    origin: "Amazônia, Brasil.",
    floweringPeriod: "Verão.",
    cultivation: "Requer águas rasas e tranquilas, com clima quente e úmido.",
    tag: "flor aquática amazônia noite verão",
    infoLink: "https://pt.wikipedia.org/wiki/Victoria_amazonica",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cereus_jamacaru.JPG/800px-Cereus_jamacaru.JPG",
    name: "Mandacaru",
    scientificName: "Cereus jamacaru",
    description: "O Mandacaru é um cacto típico do sertão brasileiro. Suas flores grandes e brancas florescem à noite, sendo um sinal de esperança de chuva em regiões áridas. É muito usado em paisagismo no semiárido.",
    origin: "Nordeste, Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Precisa de sol pleno e rega mínima, adaptado a solos secos.",
    tag: "flor cacto sertão nordeste semiárido paisagismo",
    infoLink: "https://pt.wikipedia.org/wiki/Cereus_jamacaru",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Passiflora_edulis_forma_flavicarpa.jpg",
    name: "Flor de Maracujá",
    scientificName: "Passiflora edulis",
    description: "A Flor de Maracujá possui uma beleza exótica com suas pétalas brancas e filamentos roxos, sendo também a flor que dá origem ao fruto do maracujá, amplamente utilizado na alimentação e na produção de sucos.",
    origin: "Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Precisa de sol pleno e solo fértil e bem drenado.",
    tag: "flor exótica suco maracujá alimentação",
    infoLink: "https://pt.wikipedia.org/wiki/Passiflora_edulis",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Clusia_fluminensis.jpg/1280px-Clusia_fluminensis.jpg",
    name: "Clúsia",
    scientificName: "Clusia fluminensis",
    description: "A Clúsia é uma planta tropical com flores brancas e folhas espessas. Ela é muito resistente e é usada frequentemente no paisagismo para formar cercas vivas ou preencher grandes espaços devido à sua folhagem densa.",
    origin: "Mata Atlântica, Brasil.",
    floweringPeriod: "Verão.",
    cultivation: "Prefere sol pleno e solos bem drenados.",
    tag: "flor paisagismo cerca viva tropical resistência",
    infoLink: "https://pt.wikipedia.org/wiki/Clusia",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Paepalanthus_eriophaeus.jpg/1280px-Paepalanthus_eriophaeus.jpg",
    name: "Paepalanthus",
    scientificName: "Paepalanthus",
    description: "Paepalanthus é uma planta característica de regiões rupestres, conhecida por suas flores esféricas e delicadas, que se destacam em ambientes rochosos e áridos, trazendo uma beleza sutil a essas paisagens.",
    origin: "Campos rupestres, Brasil.",
    floweringPeriod: "Ano todo, dependendo da espécie.",
    cultivation: "Sol pleno, solos arenosos e bem drenados.",
    tag: "flor rupestre esférica delicada rochoso árido",
    infoLink: "https://pt.wikipedia.org/wiki/Paepalanthus",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ribeir%C3%A3o_Grande_-_Mapillary_%28PP5pdVYDpz_nJEsofbaceg%29.jpg/1280px-Ribeir%C3%A3o_Grande_-_Mapillary_%28PP5pdVYDpz_nJEsofbaceg%29.jpg",
    name: "Cambará",
    scientificName: "Lantana camara",
    description: "O Cambará é um arbusto muito resistente, conhecido por suas flores pequenas e coloridas, que variam entre amarelo, laranja e vermelho. É frequentemente utilizado em paisagismo por sua facilidade de cultivo e durabilidade.",
    origin: "América Tropical.",
    floweringPeriod: "Ano todo.",
    cultivation: "Sol pleno, solos pobres e bem drenados.",
    tag: "arbusto resistente flores coloridas paisagismo",
    infoLink: "https://pt.wikipedia.org/wiki/Cambar%C3%A1_(%C3%A1rvore)",
  },
  {
    imageUrl: "https://i0.wp.com/institutoagro.com.br/wp-content/uploads/heliconia-instituto-agro.jpg?fit=1024%2C534&ssl=1",
    name: "Helicônia",
    scientificName: "Heliconia rostrata",
    description: "A Helicônia, com suas brácteas vermelhas e amarelas, é uma planta exótica que atrai beija-flores e adiciona um toque vibrante a jardins tropicais.",
    origin: "Florestas tropicais.",
    floweringPeriod: "Ano todo em condições ideais.",
    cultivation: "Sol pleno ou meia-sombra, solos ricos e úmidos.",
    tag: "planta exótica vibrante beija-flores tropical",
    infoLink: "https://pt.wikipedia.org/wiki/Helic%C3%B4nia",
  },
  {
    imageUrl: "https://www.floresefolhagens.com.br/wp-content/uploads/2015/11/manaca-da-serra-tibouchina-mutabilis-1-2.jpg",
    name: "Manacá-da-serra",
    scientificName: "Tibouchina mutabilis",
    description: "O Manacá-da-serra é um arbusto ornamental cujas flores mudam de cor, começando brancas e evoluindo para rosa e roxo, criando um efeito visual encantador.",
    origin: "Mata Atlântica, Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Sol pleno, solos ricos e bem drenados.",
    tag: "arbusto ornamental flores mudam cor mata atlântica",
    infoLink: "https://pt.wikipedia.org/wiki/Tibouchina_mutabilis",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Erythrina_crista-galli1.jpg",
    name: "Corticeira",
    scientificName: "Erythrina crista-galli",
    description: "A Corticeira é conhecida por suas flores vermelhas brilhantes e atrai aves com seu vibrante colorido. É uma das mais belas da flora brasileira.",
    origin: "Brasil e Argentina.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Sol pleno, solos ricos e úmidos.",
    tag: "flor vermelha brilhante aves beleza brasileira",
    infoLink: "https://pt.wikipedia.org/wiki/Corticeira",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/White_Five_Petal_Star_2.JPG",
    name: "Jasmim-manga",
    scientificName: "Plumeria rubra",
    description: "O Jasmim-manga é uma planta tropical com flores perfumadas que variam do branco ao vermelho, popular no paisagismo e símbolo de beleza.",
    origin: "América Central, popular no Brasil.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Sol pleno, solos bem drenados e pouca rega.",
    tag: "flor perfumada tropical paisagismo beleza",
    infoLink: "https://pt.wikipedia.org/wiki/Jasmim-manga",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Morning_glory_6b.jpg/1280px-Morning_glory_6b.jpg",
    name: "Glória-da-manhã",
    scientificName: "Ipomoea indica",
    description: "A Glória-da-manhã é uma trepadeira com flores azuis e roxas que se abrem pela manhã e murcham ao entardecer, ideal para cobrir cercas e pergolados.",
    origin: "América do Sul.",
    floweringPeriod: "Primavera a outono.",
    cultivation: "Sol pleno, solos bem drenados e úmidos.",
    tag: "trepadeira flores azuis roxas cercas pergolados",
    infoLink: "https://pt.wikipedia.org/wiki/Gl%C3%B3ria-da-manh%C3%A3",
  },
  {
    imageUrl: "https://live.staticflickr.com/3378/3263395382_934e34852d_b.jpg",
    name: "Flor-de-pachira",
    scientificName: "Pachira aquatica",
    description: "A Flor-de-pachira é conhecida como árvore da fortuna, com grandes flores brancas e estames longos, simbolizando prosperidade.",
    origin: "América Central e do Sul.",
    floweringPeriod: "Verão.",
    cultivation: "Sol pleno ou meia-sombra, solos úmidos.",
    tag: "flor árvore fortuna flores grandes prosperidade",
    infoLink: "https://pt.wikipedia.org/wiki/Pachira_aquatica",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/SpathiphyllumWallisii.jpg/800px-SpathiphyllumWallisii.jpg",
    name: "Lírio-da-paz",
    scientificName: "Spathiphyllum wallisii",
    description: "O Lírio-da-paz é popular em ambientes internos, com brácteas brancas envolvendo uma espiga de flores minúsculas, representando paz e pureza.",
    origin: "América Tropical.",
    floweringPeriod: "Ano todo.",
    cultivation: "Meia-sombra, solos ricos e úmidos.",
    tag: "flor interna paz pureza brácteas brancas",
    infoLink: "https://pt.wikipedia.org/wiki/Spathiphyllum_wallisii",
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Paphiopedilum_concolor_Orchi_01.jpg/1024px-Paphiopedilum_concolor_Orchi_01.jpg",
    name: "Sapatinho-de-dama",
    scientificName: "Paphiopedilum grandiflorum",
    description: "O Sapatinho-de-dama é uma orquídea exótica com flores que se assemelham a sapatos elegantes, conhecida por suas cores variadas e padrões distintos.",
    origin: "Nativa das florestas tropicais da Ásia.",
    floweringPeriod: "Primavera e verão.",
    cultivation: "Meia-sombra, solos bem drenados e úmidos.",
    tag: "orquídea exótica sapatos elegantes cores variadas",
    infoLink: "https://pt.wikipedia.org/wiki/Paphiopedilum",
  },
];

function formatString(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function search() {
  const query = formatString(document.getElementById('searchInput').value);
  
  const filteredFlowers = flowers.filter(flower => 
    formatString(flower.name).includes(query) ||
    formatString(flower.scientificName).includes(query) ||
    formatString(flower.tag).includes(query)
  );

  updateFlower(filteredFlowers);
}

function renderFlower(flower) {
  return `
    <div class="flower-card">
      <div class="card-hidden">
        <div class="image-container">
          <img src="${flower.imageUrl}" alt="${flower.name}" class="image glass-card"/>
        </div>
        <div class="labels">
          <div class="names">
            <h2 class="font-xl">${flower.name}</h2>
            <p class="font-caption-w">${flower.scientificName}</p>
          </div>
          <p class="font-caption">${flower.description}</p>
        </div>
      </div>
      
      <div class="card-preview glass-card">
        <div class="image-container">
          <img src="${flower.imageUrl}" alt="${flower.name}" class="image glass-card"/>
        </div>
        <div class="labels">
          <div class="names">
            <h2 class="font-xl">${flower.name}</h2>
            <p class="font-caption-w">${flower.scientificName}</p>
          </div>
          <p class="font-caption">${flower.description}</p>
          <div class="information">
            <p class="font-caption"><span class="font-caption-w">Origem:</span> ${flower.origin}</p>
            <p class="font-caption"><span class="font-caption-w">Floração:</span> ${flower.floweringPeriod}</p>
            <p class="font-caption"><span class="font-caption-w">Cultivo:</span> ${flower.cultivation}</p>
          </div>
          <a href="${flower.infoLink}" target="_blank" class="button-wiki glass-secundary">Saiba mais</a>
        </div>
      </div>
    </div>
    
    <div class="overlay"></div>
  `;
}

function updateFlower(flowers) {
  const section = document.getElementById("results");
  
  const sortedFlowers = flowers.sort((a, b) => a.name.localeCompare(b.name));

  if (sortedFlowers.length === 0) {
    section.innerHTML = `<p class="font-caption">Nada foi encontrado. Tente outra busca.</p>`;
  } else {
    section.innerHTML = sortedFlowers.map(renderFlower).join('');
    attachCardToggle();
  }
}

function handleSearchOnEnter(event) {
  if (event.key === 'Enter') {
    search();
    event.preventDefault();
  }
}

document.getElementById('searchInput').addEventListener('keydown', handleSearchOnEnter);

function attachCardToggle() {
  document.querySelectorAll('.flower-card').forEach(card => {
    card.addEventListener('click', (event) => {
      event.stopPropagation();
      
      const previewCard = card.querySelector('.card-preview');
      const overlay = document.querySelector('.overlay');
      
      if (previewCard.style.display === 'block') {
        previewCard.style.display = 'none';
        overlay.style.display = 'none';
      } else {
        previewCard.style.display = 'block';
        overlay.style.display = 'block';
      }
    });
  });
  
  document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelectorAll('.card-preview').forEach(previewCard => {
      previewCard.style.display = 'none';
    });
    document.querySelector('.overlay').style.display = 'none';
  });
}

updateFlower(flowers);