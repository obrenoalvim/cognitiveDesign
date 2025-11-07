export interface Design {
  id: string;
  title: string;
  biases: string[];
  description: string;
  explanation: string;
  htmlCode: string;
  cssCode: string;
}

export const designsData: Design[] = [
  {
    id: 'efeito-chamariz',
    title: 'Efeito Chamariz (Decoy Effect)',
    biases: ['Efeito Chamariz', 'Ancoragem'],
    description: 'Cards de preço com três planos onde um plano intermediário (chamariz) torna o plano premium mais atraente.',
    explanation: 'O Efeito Chamariz funciona introduzindo uma terceira opção que é assimetricamente dominada por uma das opções originais. Neste exemplo, o plano "Pro" serve como chamariz, tornando o plano "Premium" mais atraente em comparação. O usuário percebe maior valor no Premium ao compará-lo com o Pro, em vez de apenas considerar o custo absoluto.',
    htmlCode: `<div class="pricing-container">
  <div class="pricing-card">
    <h3 class="pricing-title">Básico</h3>
    <div class="pricing-price">
      <span class="currency">R$</span>
      <span class="amount">29</span>
      <span class="period">/mês</span>
    </div>
    <ul class="pricing-features">
      <li>✓ 10 projetos</li>
      <li>✓ 5GB armazenamento</li>
      <li>✓ Suporte email</li>
    </ul>
    <button class="pricing-button">Começar</button>
  </div>

  <div class="pricing-card pricing-decoy">
    <h3 class="pricing-title">Pro</h3>
    <div class="pricing-price">
      <span class="currency">R$</span>
      <span class="amount">79</span>
      <span class="period">/mês</span>
    </div>
    <ul class="pricing-features">
      <li>✓ 25 projetos</li>
      <li>✓ 15GB armazenamento</li>
      <li>✓ Suporte email</li>
    </ul>
    <button class="pricing-button">Começar</button>
  </div>

  <div class="pricing-card pricing-popular">
    <div class="pricing-badge">Popular</div>
    <h3 class="pricing-title">Premium</h3>
    <div class="pricing-price">
      <span class="currency">R$</span>
      <span class="amount">99</span>
      <span class="period">/mês</span>
    </div>
    <ul class="pricing-features">
      <li>✓ Projetos ilimitados</li>
      <li>✓ 100GB armazenamento</li>
      <li>✓ Suporte prioritário</li>
      <li>✓ API Access</li>
    </ul>
    <button class="pricing-button pricing-button-popular">Começar</button>
  </div>
</div>`,
    cssCode: `.pricing-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.pricing-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.pricing-decoy {
  opacity: 0.85;
  border-color: #cbd5e1;
}

.pricing-popular {
  border-color: #3b82f6;
  border-width: 3px;
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.2);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
}

.currency {
  font-size: 1.25rem;
  font-weight: 600;
  color: #64748b;
}

.amount {
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0.25rem;
}

.period {
  font-size: 1rem;
  color: #64748b;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.pricing-features li {
  padding: 0.5rem 0;
  color: #475569;
  font-size: 0.95rem;
}

.pricing-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  border: 2px solid #3b82f6;
  background: white;
  color: #3b82f6;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pricing-button:hover {
  background: #3b82f6;
  color: white;
}

.pricing-button-popular {
  background: #3b82f6;
  color: white;
}

.pricing-button-popular:hover {
  background: #2563eb;
  border-color: #2563eb;
}`,
  },
  {
    id: 'prova-social',
    title: 'Prova Social (Social Proof)',
    biases: ['Prova Social', 'Efeito Halo'],
    description: 'Card de produto com avaliações, contagem de reviews e badge "Mais vendido" para aumentar credibilidade.',
    explanation: 'A Prova Social aproveita a tendência humana de seguir o comportamento dos outros, especialmente em situações de incerteza. Quando vemos que muitas pessoas compraram ou avaliaram positivamente um produto, isso reduz nosso risco percebido e aumenta a confiança na decisão. Badges como "Mais vendido" e contadores de avaliações funcionam como sinais de validação social.',
    htmlCode: `<div class="product-card">
  <div class="product-image">
    <img src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Produto">
    <span class="product-badge">Mais vendido</span>
  </div>

  <div class="product-content">
    <h3 class="product-title">Curso Completo de UX Design</h3>
    <p class="product-description">
      Aprenda a criar experiências incríveis do zero ao avançado
    </p>

    <div class="product-rating">
      <div class="stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
      </div>
      <span class="rating-text">4.9</span>
      <span class="rating-count">(2.847 avaliações)</span>
    </div>

    <div class="product-stats">
      <div class="stat">
        <span class="stat-value">15.234</span>
        <span class="stat-label">alunos</span>
      </div>
      <div class="stat">
        <span class="stat-value">42h</span>
        <span class="stat-label">de conteúdo</span>
      </div>
    </div>

    <div class="product-footer">
      <div class="product-price">
        <span class="price-old">R$ 497</span>
        <span class="price-current">R$ 197</span>
      </div>
      <button class="product-button">Inscrever-se agora</button>
    </div>
  </div>
</div>`,
    cssCode: `.product-card {
  max-width: 400px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.product-content {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.product-description {
  color: #64748b;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stars {
  display: flex;
  gap: 0.125rem;
}

.star {
  color: #fbbf24;
  font-size: 1.25rem;
}

.rating-text {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.125rem;
}

.rating-count {
  color: #64748b;
  font-size: 0.875rem;
}

.product-stats {
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

.product-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.price-old {
  text-decoration: line-through;
  color: #94a3b8;
  font-size: 1rem;
}

.price-current {
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
}

.product-button {
  width: 100%;
  padding: 1rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.product-button:hover {
  background: #2563eb;
  transform: scale(1.02);
}`,
  },
  {
    id: 'efeito-escassez',
    title: 'Escassez (Scarcity)',
    biases: ['Escassez'],
    description: 'Componente de e-commerce mostrando quantidade limitada e urgência através de indicadores visuais.',
    explanation: 'O viés de escassez funciona criando uma percepção de limitação que aumenta o valor e a urgência. Quando vemos mensagens como "apenas 3 itens restantes" ou "oferta acaba em 2 horas", nosso medo de perder a oportunidade nos motiva a agir mais rapidamente. Indicadores visuais como barras de progresso amplificam esse efeito.',
    htmlCode: `<div class="product-container">
  <div class="product">
    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Produto" class="product-img">

    <div class="product-info">
      <h3 class="product-name">Fone Bluetooth Premium</h3>
      <p class="product-price">R$ 299,90</p>

      <div class="scarcity-info">
        <div class="stock-bar">
          <div class="stock-fill" style="width: 15%;"></div>
        </div>
        <p class="stock-text">Apenas 3 unidades restantes</p>
      </div>

      <div class="urgency-box">
        <span class="urgency-icon">⏱</span>
        <p class="urgency-text">Oferta termina em <strong>2 horas</strong></p>
      </div>

      <div class="demand-info">
        <span class="demand-badge">18 pessoas visualizando agora</span>
      </div>

      <button class="add-button">Adicionar ao carrinho</button>
      <p class="guarantee">✓ Garantia de 12 meses</p>
    </div>
  </div>
</div>`,
    cssCode: `.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.product {
  max-width: 420px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 2rem;
  font-weight: 800;
  color: #10b981;
  margin-bottom: 1rem;
}

.scarcity-info {
  margin-bottom: 1.5rem;
}

.stock-bar {
  height: 6px;
  background: #e2e8f0;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.stock-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  transition: width 0.3s ease;
}

.stock-text {
  font-size: 0.875rem;
  color: #ef4444;
  font-weight: 600;
}

.urgency-box {
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 0.875rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.urgency-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.urgency-text {
  font-size: 0.95rem;
  color: #78350f;
  margin: 0;
}

.demand-info {
  text-align: center;
  margin-bottom: 1.5rem;
}

.demand-badge {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
}

.add-button {
  width: 100%;
  padding: 1rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 0.75rem;
}

.add-button:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.guarantee {
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
}`,
  },
  {
    id: 'efeito-ancoragem',
    title: 'Ancoragem (Anchoring)',
    biases: ['Ancoragem'],
    description: 'Preço original destacado com desconto para criar percepção de valor maior.',
    explanation: 'O efeito de Ancoragem funciona quando o primeiro número que vemos (a âncora) influencia nossa percepção de preço justo. Mostrar o preço original alto primeiro faz o preço com desconto parecer muito melhor. Mesmo que o desconto seja pequeno, a comparação com o preço inicial cria uma sensação de economia.',
    htmlCode: `<div class="pricing-comparison">
  <div class="price-card original">
    <h4 class="card-label">Preço Original</h4>
    <p class="original-price">R$ 1.200</p>
  </div>

  <div class="arrow">→</div>

  <div class="price-card discounted">
    <h4 class="card-label">Preço Agora</h4>
    <p class="discounted-price">R$ 599</p>
    <span class="discount-badge">-50%</span>
    <p class="savings">Você economiza R$ 601</p>
  </div>
</div>

<div class="product-deal">
  <img src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Produto" class="deal-image">
  <div class="deal-content">
    <h3 class="deal-title">Smart Watch Série 7</h3>
    <p class="deal-description">Relógio inteligente com monitor cardíaco, GPS e bateria de 2 dias</p>

    <div class="price-section">
      <span class="price-before">R$ 1.200</span>
      <span class="price-now">R$ 599</span>
    </div>

    <div class="time-limited">
      <span class="flash-badge">Flash Sale</span>
      <p class="time-remaining">Termina em 23:45:12</p>
    </div>

    <button class="buy-button">Aproveitar Oferta</button>
  </div>
</div>`,
    cssCode: `.pricing-comparison {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.price-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 2px solid #e2e8f0;
}

.price-card.original {
  opacity: 0.7;
}

.price-card.discounted {
  border-color: #3b82f6;
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.15);
  position: relative;
}

.card-label {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.original-price {
  font-size: 1.875rem;
  color: #94a3b8;
  margin: 0;
  text-decoration: line-through;
}

.discounted-price {
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
  margin: 0.5rem 0;
}

.discount-badge {
  display: inline-block;
  background: #10b981;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0.5rem 0;
}

.savings {
  font-size: 0.95rem;
  color: #10b981;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
}

.arrow {
  font-size: 2rem;
  color: #94a3b8;
  display: none;
}

@media (min-width: 768px) {
  .arrow {
    display: block;
  }
}

.product-deal {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
}

.deal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.deal-content {
  padding: 2rem;
}

.deal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.75rem 0;
}

.deal-description {
  color: #64748b;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.price-before {
  font-size: 1.25rem;
  color: #94a3b8;
  text-decoration: line-through;
  font-weight: 600;
}

.price-now {
  font-size: 2.5rem;
  font-weight: 800;
  color: #10b981;
}

.time-limited {
  background: #fef3c7;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.flash-badge {
  display: inline-block;
  background: #f59e0b;
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.time-remaining {
  color: #78350f;
  margin: 0.5rem 0 0 0;
  font-weight: 600;
  font-size: 1rem;
}

.buy-button {
  width: 100%;
  padding: 1rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.buy-button:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
}`,
  },
  {
    id: 'efeito-halo',
    title: 'Efeito Halo (Halo Effect)',
    biases: ['Efeito Halo'],
    description: 'Perfil de especialista onde credibilidade em uma área influencia percepção geral.',
    explanation: 'O Efeito Halo ocorre quando uma característica positiva forte influencia a percepção geral de uma pessoa ou produto. Por exemplo, um especialista com muitos prêmios é automaticamente visto como competente em todas as áreas. Badges, certificações e evidências de sucesso são poderosos gatilhos para este efeito.',
    htmlCode: `<div class="expert-profile">
  <div class="profile-header">
    <img src="https://images.pexels.com/photos/3774519/pexels-photo-3774519.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Expert" class="profile-photo">
    <div class="profile-badges">
      <span class="badge badge-featured">Especialista em Destaque</span>
    </div>
  </div>

  <div class="profile-body">
    <h2 class="expert-name">Dr. Marina Silva</h2>
    <p class="expert-title">Consultora de UX & Design Estratégico</p>

    <div class="credentials">
      <div class="credential">
        <span class="icon">🏆</span>
        <p><strong>15+ anos</strong> de experiência</p>
      </div>
      <div class="credential">
        <span class="icon">⭐</span>
        <p><strong>50+ projetos</strong> de sucesso</p>
      </div>
      <div class="credential">
        <span class="icon">📚</span>
        <p><strong>5 livros</strong> publicados</p>
      </div>
    </div>

    <div class="achievements">
      <p class="achievements-title">Reconhecimento</p>
      <div class="awards">
        <span class="award">Design Award 2023</span>
        <span class="award">Forbes 30 Under 40</span>
        <span class="award">Tech Leader Award</span>
      </div>
    </div>

    <p class="bio">Consultora estratégica em experiência do usuário com foco em transformação digital.</p>

    <button class="consult-button">Agendar Consulta</button>
  </div>
</div>`,
    cssCode: `.expert-profile {
  max-width: 480px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.profile-header {
  position: relative;
  height: 240px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.profile-photo {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 6px solid white;
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.profile-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.badge {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.profile-body {
  padding: 5rem 2rem 2rem;
  text-align: center;
}

.expert-name {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.expert-title {
  color: #667eea;
  font-weight: 600;
  font-size: 1.025rem;
  margin: 0 0 2rem 0;
}

.credentials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.credential {
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
}

.icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.credential p {
  margin: 0;
  font-size: 0.9rem;
  color: #475569;
}

.credential strong {
  color: #667eea;
  font-weight: 700;
}

.achievements {
  margin-bottom: 2rem;
}

.achievements-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #64748b;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.awards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.award {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

.bio {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.consult-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consult-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}`,
  },
  {
    id: 'vieses-multiplos',
    title: 'Múltiplos Vieses (Newsletter Signup)',
    biases: ['Prova Social', 'Escassez', 'Efeito Halo'],
    description: 'Formulário de inscrição em newsletter combinando múltiplos vieses cognitivos.',
    explanation: 'Este exemplo combina três vieses poderosos: Prova Social (10k+ inscritos), Escassez (acesso limitado), e Efeito Halo (credibilidade de marca). Quando múltiplos vieses trabalham juntos, o efeito é muito mais forte. As pessoas se sentem motivadas a agir por várias razões psicológicas simultâneas.',
    htmlCode: `<div class="newsletter-container">
  <div class="newsletter-card">
    <div class="newsletter-header">
      <h2 class="newsletter-title">Receba Insights Exclusivos</h2>
      <p class="newsletter-subtitle">Junte-se a mais de 50.000 designers que recebem nossa newsletter semanal</p>
    </div>

    <div class="social-proof">
      <div class="avatars">
        <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" class="avatar">
        <img src="https://images.pexels.com/photos/1181743/pexels-photo-1181743.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" class="avatar">
        <img src="https://images.pexels.com/photos/1182842/pexels-photo-1182842.jpeg?auto=compress&cs=tinysrgb&w=100" alt="User" class="avatar">
        <span class="avatar-count">+47.997</span>
      </div>
      <p class="social-text">Juntam-se a nós diariamente</p>
    </div>

    <form class="newsletter-form">
      <div class="form-group">
        <input type="email" placeholder="seu@email.com" class="form-input" required>
        <button type="submit" class="form-button">Inscrever-se</button>
      </div>

      <div class="exclusive-box">
        <span class="exclusive-badge">Oferta Exclusiva</span>
        <p class="exclusive-text">Primeiros 100 inscritos recebem acesso ao Kit Premium de Design gratuitamente</p>
      </div>

      <p class="form-disclaimer">Sem spam. Você pode cancelar a qualquer momento.</p>
    </form>

    <div class="featured-in">
      <p class="featured-label">Como visto em</p>
      <div class="logos">
        <span class="logo">Design Weekly</span>
        <span class="logo">UX Today</span>
        <span class="logo">Tech Insider</span>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `.newsletter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #f3e8ff 100%);
  min-height: 600px;
}

.newsletter-card {
  max-width: 520px;
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.newsletter-header {
  text-align: center;
  margin-bottom: 2rem;
}

.newsletter-title {
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.75rem 0;
}

.newsletter-subtitle {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

.social-proof {
  text-align: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
}

.avatars {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-right: -12px;
}

.avatar:last-of-type {
  margin-right: 0.5rem;
}

.avatar-count {
  background: #3b82f6;
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.social-text {
  margin: 0;
  color: #475569;
  font-weight: 600;
  font-size: 0.95rem;
}

.newsletter-form {
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.form-input {
  flex: 1;
  padding: 0.875rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-button {
  padding: 0.875rem 1.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.form-button:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.exclusive-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%);
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.exclusive-badge {
  display: inline-block;
  background: #f59e0b;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.exclusive-text {
  margin: 0;
  color: #78350f;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
}

.form-disclaimer {
  text-align: center;
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0;
}

.featured-in {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.featured-label {
  font-size: 0.85rem;
  color: #94a3b8;
  margin: 0 0 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.logos {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.logo {
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 600;
}`,
  },
  {
    id: 'vieses-multiplos-cta',
    title: 'CTA com Múltiplos Vieses',
    biases: ['Urgência', 'FOMO', 'Prova Social'],
    description: 'Botão de call-to-action combinando urgência, FOMO e indicadores sociais para máxima conversão.',
    explanation: 'Este padrão combina urgência (countdown), FOMO - Fear of Missing Out (acesso limitado) e Prova Social (número de usuários). Quando um usuário vê que outros estão agindo rapidamente e que o tempo está acabando, o sentimento de perda potencial motiva ação imediata. É um dos padrões mais eficazes em marketing.',
    htmlCode: `<div class="cta-container">
  <div class="cta-card">
    <h3 class="cta-title">Comece Seu Trial Gratuito</h3>
    <p class="cta-subtitle">Acesso completo por 14 dias, sem cartão de crédito</p>

    <div class="cta-metrics">
      <div class="metric">
        <span class="metric-icon">👥</span>
        <p class="metric-text"><strong>2,847 pessoas</strong> se inscreveram esta semana</p>
      </div>
      <div class="metric">
        <span class="metric-icon">⏰</span>
        <p class="metric-text">Slots disponíveis: <strong>12 de 50</strong></p>
      </div>
    </div>

    <div class="countdown-box">
      <p class="countdown-text">Promo termina em:</p>
      <div class="countdown">
        <span class="countdown-unit">
          <span class="countdown-number">02</span>
          <span class="countdown-label">dias</span>
        </span>
        <span class="countdown-separator">:</span>
        <span class="countdown-unit">
          <span class="countdown-number">14</span>
          <span class="countdown-label">horas</span>
        </span>
        <span class="countdown-separator">:</span>
        <span class="countdown-unit">
          <span class="countdown-number">37</span>
          <span class="countdown-label">min</span>
        </span>
      </div>
    </div>

    <button class="cta-button">Comece Agora</button>
    <p class="cta-disclaimer">✓ Cancelável a qualquer momento. Sem compromisso.</p>
  </div>
</div>`,
    cssCode: `.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  min-height: 500px;
}

.cta-card {
  max-width: 420px;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid #fbbf24;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  text-align: center;
}

.cta-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
  margin: 0 0 1.5rem 0;
}

.cta-metrics {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  space: 1rem;
}

.metric {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.metric:last-child {
  margin-bottom: 0;
}

.metric-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.metric-text {
  margin: 0;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.4;
}

.metric-text strong {
  color: #10b981;
  font-weight: 700;
}

.countdown-box {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 2px solid #fca5a5;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.countdown-text {
  font-size: 0.875rem;
  color: #7c2d12;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
}

.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Courier New', monospace;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: #dc2626;
  line-height: 1;
}

.countdown-label {
  font-size: 0.65rem;
  color: #991b1b;
  font-weight: 600;
  margin-top: 0.25rem;
  text-transform: uppercase;
}

.countdown-separator {
  font-size: 1.5rem;
  color: #7c2d12;
  margin: 0 0.25rem;
}

.cta-button {
  width: 100%;
  padding: 1.125rem;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.025rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 0.75rem;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.4);
}

.cta-disclaimer {
  text-align: center;
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}`,
  },
  {
    id: 'contraste-visual',
    title: 'Contraste Visual e Hierarquia',
    biases: ['Efeito Halo', 'Ancoragem'],
    description: 'Uso estratégico de cores, tamanhos e espaçamento para direcionar atenção ao elemento principal.',
    explanation: 'O Contraste Visual explora a tendência humana de focar em elementos que se destacam visualmente. Usando cores contrastantes, tamanho diferenciado e espaçamento estratégico, direcionamos a atenção do usuário para a opção desejada. Combina com Ancoragem quando colocamos a opção principal em uma posição de destaque.',
    htmlCode: `<div class="contrast-container">
  <div class="options-grid">
    <div class="option-card basic">
      <p class="option-label">Básico</p>
      <p class="option-price">R$ 49</p>
      <ul class="option-list">
        <li>✓ 5 usuários</li>
        <li>✓ 10GB</li>
        <li>✓ Suporte email</li>
      </ul>
      <button class="option-button">Selecionar</button>
    </div>

    <div class="option-card featured">
      <div class="featured-badge">MAIS POPULAR</div>
      <p class="option-label">Profissional</p>
      <p class="option-price">R$ 149</p>
      <ul class="option-list">
        <li>✓ 25 usuários</li>
        <li>✓ 100GB</li>
        <li>✓ Suporte prioritário</li>
        <li>✓ Analytics avançado</li>
      </ul>
      <button class="option-button featured-button">Selecionar</button>
    </div>

    <div class="option-card advanced">
      <p class="option-label">Empresa</p>
      <p class="option-price">R$ 449</p>
      <ul class="option-list">
        <li>✓ Ilimitado</li>
        <li>✓ 1TB</li>
        <li>✓ Suporte dedicado</li>
      </ul>
      <button class="option-button">Selecionar</button>
    </div>
  </div>
</div>`,
    cssCode: `.contrast-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f8fafc;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
}

.option-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  position: relative;
}

.option-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.option-card.basic,
.option-card.advanced {
  opacity: 0.85;
}

.option-card.featured {
  border-color: #3b82f6;
  border-width: 3px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  transform: scale(1.06);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.2);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.option-label {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0.5rem 0 0.75rem 0;
}

.option-price {
  font-size: 2rem;
  font-weight: 800;
  color: #3b82f6;
  margin: 0 0 1rem 0;
}

.option-card.featured .option-price {
  color: #0284c7;
}

.option-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.option-list li {
  font-size: 0.9rem;
  color: #475569;
  padding: 0.4rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.option-list li:last-child {
  border-bottom: none;
}

.option-button {
  width: 100%;
  padding: 0.75rem;
  background: white;
  color: #64748b;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option-button:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.featured-button {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
  font-weight: 700;
}

.featured-button:hover {
  background: #2563eb;
  border-color: #2563eb;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}`,
  },
  {
    id: 'consenso-social',
    title: 'Consenso Social em Ação',
    biases: ['Prova Social', 'Bandwagon Effect'],
    description: 'Mostrar quem escolheu uma opção para criar efeito de consenso e validação social.',
    explanation: 'O Bandwagon Effect (efeito manada) ocorre quando seguimos uma ação porque muitos outros o fazem. Quando vemos avatares de pessoas reais que escolheram algo, ou nomes de usuários conhecidos usando um produto, automaticamente percebemos como mais confiável e desejável. A prova social é especialmente poderosa quando mostra pessoas similares a nós.',
    htmlCode: `<div class="consensus-container">
  <div class="consensus-card">
    <h2 class="consensus-title">Preferência dos Usuários</h2>

    <div class="consensus-options">
      <div class="consensus-item popular">
        <div class="item-header">
          <h3 class="item-name">Plano Anual</h3>
          <span class="popular-badge">Mais escolhido</span>
        </div>

        <div class="users-choosing">
          <p class="users-label">7.432 pessoas escolheram isto</p>
          <div class="user-avatars">
            <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" class="avatar-small">
            <img src="https://images.pexels.com/photos/1181743/pexels-photo-1181743.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" class="avatar-small">
            <img src="https://images.pexels.com/photos/1182842/pexels-photo-1182842.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" class="avatar-small">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" class="avatar-small">
            <span class="avatar-count">+7.428</span>
          </div>
        </div>

        <p class="item-price">R$ 99/ano</p>
        <p class="savings-badge">Economize 40%</p>
        <button class="consensus-button active">Selecionar</button>
      </div>

      <div class="consensus-item">
        <div class="item-header">
          <h3 class="item-name">Plano Mensal</h3>
        </div>

        <div class="users-choosing">
          <p class="users-label">892 pessoas escolheram isto</p>
          <div class="user-avatars">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" class="avatar-small">
            <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=50" alt="User" class="avatar-small">
            <span class="avatar-count">+890</span>
          </div>
        </div>

        <p class="item-price">R$ 12/mês</p>
        <p class="no-badge">&nbsp;</p>
        <button class="consensus-button">Selecionar</button>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `.consensus-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f8fafc;
}

.consensus-card {
  max-width: 600px;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.consensus-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 2rem 0;
  text-align: center;
}

.consensus-options {
  space: 1.5rem;
}

.consensus-item {
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.consensus-item.popular {
  border-color: #10b981;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-width: 3px;
}

.consensus-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.item-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.popular-badge {
  background: #10b981;
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
}

.users-label {
  font-size: 0.9rem;
  color: #475569;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
}

.user-avatars {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar-small {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
  margin-right: -10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.avatar-count {
  background: #e2e8f0;
  color: #475569;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

.item-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0.5rem 0 0.25rem 0;
}

.savings-badge {
  background: #dcfce7;
  color: #166534;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.no-badge {
  margin-bottom: 1rem;
}

.consensus-button {
  width: 100%;
  padding: 0.875rem;
  background: white;
  color: #64748b;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.consensus-button:hover {
  border-color: #10b981;
  color: #10b981;
}

.consensus-button.active {
  background: #10b981;
  color: white;
  border-color: #10b981;
  font-weight: 700;
}

.consensus-button.active:hover {
  background: #059669;
  border-color: #059669;
}`,
  },
  {
    id: 'fomo-timer',
    title: 'FOMO com Timer (Fear of Missing Out)',
    biases: ['Escassez', 'FOMO', 'Urgência'],
    description: 'Elemento de time-sensitive offer que cria sensação de urgência através de contagem regressiva.',
    explanation: 'FOMO (Fear of Missing Out) é um viés poderoso baseado no medo de perder uma oportunidade. Combinar com uma contagem regressiva cria ansiedade e motiva ação imediata. Usuários veem o tempo passando e sentem urgência em agir antes que seja tarde demais. Este padrão é especialmente eficaz em ofertas por tempo limitado.',
    htmlCode: `<div class="fomo-container">
  <div class="fomo-banner">
    <div class="fomo-content">
      <h2 class="fomo-title">Black Friday - 70% OFF</h2>
      <p class="fomo-subtitle">Oferta termina em:</p>

      <div class="timer-display">
        <div class="timer-unit">
          <div class="timer-circle">
            <svg class="timer-svg" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" class="timer-bg"></circle>
              <circle cx="60" cy="60" r="54" class="timer-progress"></circle>
            </svg>
            <span class="timer-value">08</span>
          </div>
          <span class="timer-label">HORAS</span>
        </div>

        <div class="timer-separator">:</div>

        <div class="timer-unit">
          <div class="timer-circle">
            <svg class="timer-svg" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" class="timer-bg"></circle>
              <circle cx="60" cy="60" r="54" class="timer-progress"></circle>
            </svg>
            <span class="timer-value">42</span>
          </div>
          <span class="timer-label">MIN</span>
        </div>

        <div class="timer-separator">:</div>

        <div class="timer-unit">
          <div class="timer-circle">
            <svg class="timer-svg" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" class="timer-bg"></circle>
              <circle cx="60" cy="60" r="54" class="timer-progress"></circle>
            </svg>
            <span class="timer-value">37</span>
          </div>
          <span class="timer-label">SEG</span>
        </div>
      </div>

      <button class="fomo-button">Garantir Minha Oferta</button>
      <p class="fomo-note">⚠ Apenas alguns itens restantes no estoque!</p>
    </div>
  </div>
</div>`,
    cssCode: `.fomo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f8fafc;
}

.fomo-banner {
  width: 100%;
  max-width: 700px;
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.3);
  text-align: center;
  color: white;
}

.fomo-title {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.fomo-subtitle {
  font-size: 1.125rem;
  margin: 0 0 1.5rem 0;
  opacity: 0.95;
}

.timer-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.timer-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer-circle {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
}

.timer-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.timer-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 4;
}

.timer-progress {
  fill: none;
  stroke: white;
  stroke-width: 4;
  stroke-dasharray: 340;
  stroke-dashoffset: 85;
  stroke-linecap: round;
  animation: countdown 3s linear infinite;
}

@keyframes countdown {
  0% {
    stroke-dashoffset: 85;
  }
  100% {
    stroke-dashoffset: 340;
  }
}

.timer-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 900;
  color: white;
}

.timer-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.9;
}

.timer-separator {
  font-size: 1.5rem;
  font-weight: 800;
  opacity: 0.7;
}

.fomo-button {
  display: inline-block;
  padding: 1.25rem 2.5rem;
  background: white;
  color: #dc2626;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.fomo-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
}

.fomo-note {
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 600;
}`,
  },
  {
    id: 'efeito-endownment',
    title: 'Efeito Posse (Endowment Effect)',
    biases: ['Efeito Posse', 'Status Quo'],
    description: 'Trial com “já é seu” e destaque de personalizações salvas para aumentar apego e reduzir churn.',
    explanation: 'O Efeito Posse diz que valorizamos mais aquilo que percebemos como já nosso. Ao comunicar que o usuário “já tem” o trial ativo e mostrar personalizações salvas, criamos apego, o que reduz a desistência e aumenta a chance de conversão.',
    htmlCode: `<div class="endowment-card">
  <div class="endowment-header">
    <span class="posse-badge">Já é seu</span>
    <h3 class="endowment-title">Seu workspace está pronto</h3>
    <p class="endowment-subtitle">Mantivemos suas preferências e 3 layouts salvos</p>
  </div>

  <div class="endowment-assets">
    <div class="asset">
      <span class="asset-icon">🎛️</span>
      <div>
        <p class="asset-title">Tema escuro</p>
        <p class="asset-desc">Ativado e sincronizado</p>
      </div>
    </div>
    <div class="asset">
      <span class="asset-icon">📁</span>
      <div>
        <p class="asset-title">3 dashboards salvos</p>
        <p class="asset-desc">Marketing, Produto, Financeiro</p>
      </div>
    </div>
    <div class="asset">
      <span class="asset-icon">🔗</span>
      <div>
        <p class="asset-title">Integrações conectadas</p>
        <p class="asset-desc">Google Analytics, HubSpot</p>
      </div>
    </div>
  </div>

  <div class="endowment-cta">
    <button class="keep-button">Manter minhas configurações</button>
    <p class="keep-note">Ao continuar, suas preferências permanecem intactas.</p>
  </div>
</div>`,
    cssCode: `.endowment-card {
  max-width: 560px;
  background: #ffffff;
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  padding: 2rem;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  margin: 0 auto;
}
.endowment-header { text-align: center; margin-bottom: 1.5rem; }
.posse-badge {
  display: inline-block; background: #10b981; color: #fff; font-weight: 700;
  padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; margin-bottom: 0.75rem;
}
.endowment-title { margin: 0; font-size: 1.6rem; color: #1e293b; font-weight: 800; }
.endowment-subtitle { margin: 0.25rem 0 0; color: #64748b; }
.endowment-assets {
  display: grid; grid-template-columns: 1fr; gap: 0.75rem; margin: 1.25rem 0 1.75rem;
}
.asset {
  display: flex; gap: 0.75rem; align-items: center; padding: 0.75rem;
  border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc;
}
.asset-icon { font-size: 1.25rem; }
.asset-title { margin: 0; font-weight: 700; color: #0f172a; }
.asset-desc { margin: 0; font-size: 0.9rem; color: #64748b; }
.keep-button {
  width: 100%; padding: 0.9rem 1.25rem; background: #10b981; color: #fff; border: 0;
  border-radius: 10px; font-weight: 800; cursor: pointer; transition: 0.2s;
}
.keep-button:hover { background: #059669; transform: translateY(-1px); }
.keep-note { text-align: center; font-size: 0.85rem; color: #64748b; margin: 0.75rem 0 0; }`,
  },
  {
    id: 'efeito-ikea',
    title: 'Efeito IKEA (IKEA Effect)',
    biases: ['Efeito IKEA', 'Compromisso e Coerência'],
    description: 'Onboarding com passos curtos onde o usuário “constrói” seu setup, aumentando valor percebido.',
    explanation: 'Quando participamos da criação de algo, passamos a valorizá-lo mais. Pequenas etapas de “construção” durante o onboarding geram sensação de autoria e aumentam o comprometimento, elevando a percepção de valor e a propensão a pagar.',
    htmlCode: `<div class="ikea-setup">
  <h3 class="ikea-title">Monte seu espaço de trabalho</h3>
  <p class="ikea-subtitle">Faltam 2 passos para concluir</p>

  <div class="ikea-steps">
    <div class="step done">
      <span class="step-check">✓</span>
      <div>
        <p class="step-title">Defina seu objetivo</p>
        <p class="step-desc">Selecionado: Aumentar conversão</p>
      </div>
    </div>

    <div class="step active">
      <span class="step-number">2</span>
      <div>
        <p class="step-title">Escolha um layout</p>
        <div class="layout-options">
          <button class="layout-btn selected">Performance</button>
          <button class="layout-btn">Crescimento</button>
          <button class="layout-btn">Retenção</button>
        </div>
      </div>
    </div>

    <div class="step">
      <span class="step-number">3</span>
      <div>
        <p class="step-title">Personalize widgets</p>
        <p class="step-desc">Adicione métricas e KPIs</p>
      </div>
    </div>
  </div>

  <button class="ikea-cta">Continuar construindo</button>
</div>`,
    cssCode: `.ikea-setup {
  max-width: 560px; margin: 0 auto; background: #fff; border: 2px solid #e2e8f0;
  border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}
.ikea-title { margin: 0; font-size: 1.4rem; font-weight: 800; color: #0f172a; }
.ikea-subtitle { margin: 0.25rem 0 1rem; color: #64748b; }
.ikea-steps { display: grid; gap: 0.75rem; margin-bottom: 1rem; }
.step { display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.75rem; border: 1px solid #e2e8f0; border-radius: 12px; }
.step.done { background: #ecfdf5; border-color: #bbf7d0; }
.step.active { background: #eff6ff; border-color: #bfdbfe; }
.step-check { background: #10b981; color: #fff; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; }
.step-number { background: #3b82f6; color: #fff; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; }
.step-title { margin: 0 0 0.25rem; font-weight: 800; color: #0f172a; }
.step-desc { margin: 0; color: #64748b; font-size: 0.9rem; }
.layout-options { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.25rem; }
.layout-btn { padding: 0.4rem 0.75rem; border: 1px solid #cbd5e1; background: #fff; border-radius: 9999px; cursor: pointer; font-weight: 700; color: #334155; }
.layout-btn.selected { background: #3b82f6; color: #fff; border-color: #3b82f6; }
.ikea-cta { width: 100%; padding: 0.9rem; background: #0ea5e9; color: #fff; border: 0; border-radius: 10px; font-weight: 800; cursor: pointer; }
.ikea-cta:hover { background: #0284c7; }`,
  },
  {
    id: 'reciprocidade-bonus',
    title: 'Reciprocidade com Bônus Inicial',
    biases: ['Reciprocidade', 'Prova Social'],
    description: 'Entrega de bônus gratuito imediato para estimular reciprocidade e próxima ação.',
    explanation: 'Ao dar algo de valor primeiro (um bônus, template ou crédito), ativamos o viés de reciprocidade: as pessoas sentem-se motivadas a retribuir, por exemplo, completando o cadastro ou realizando a compra.',
    htmlCode: `<div class="gift-card">
  <div class="gift-header">
    <span class="gift-badge">Presente</span>
    <h3 class="gift-title">Template Premium liberado</h3>
    <p class="gift-subtitle">Baixe agora e comece a usar</p>
  </div>

  <ul class="gift-benefits">
    <li>✓ 3 variações exclusivas</li>
    <li>✓ Atualizações mensais</li>
    <li>✓ Sem custo adicional</li>
  </ul>

  <div class="gift-social">
    <span class="gift-avatars">👤👤👤</span>
    <p class="gift-note">Mais de 4.200 pessoas aproveitaram hoje</p>
  </div>

  <button class="gift-button">Baixar e Continuar</button>
</div>`,
    cssCode: `.gift-card {
  max-width: 420px; margin: 0 auto; background: #fff; border-radius: 16px; border: 2px solid #e2e8f0;
  padding: 1.5rem; box-shadow: 0 12px 28px rgba(0,0,0,0.08);
}
.gift-header { text-align: center; }
.gift-badge { background: #f59e0b; color: #fff; padding: 0.25rem 0.75rem; border-radius: 9999px; font-weight: 800; font-size: 0.8rem; }
.gift-title { margin: 0.5rem 0 0; font-size: 1.4rem; color: #111827; font-weight: 900; }
.gift-subtitle { margin: 0.25rem 0 1rem; color: #6b7280; }
.gift-benefits { list-style: none; padding: 0; margin: 1rem 0; color: #374151; }
.gift-benefits li { padding: 0.35rem 0; }
.gift-social { display: flex; gap: 0.5rem; align-items: center; justify-content: center; color: #6b7280; font-size: 0.9rem; margin: 0.5rem 0 1rem; }
.gift-button {
  width: 100%; padding: 0.9rem; background: #10b981; color: #fff; border: 0; border-radius: 10px; font-weight: 800; cursor: pointer;
}
.gift-button:hover { background: #059669; }`,
  },
  {
    id: 'compromisso-progresso',
    title: 'Compromisso e Coerência com Barra de Progresso',
    biases: ['Compromisso e Coerência', 'Efeito Goal-Gradient'],
    description: 'Form com barra de progresso e “faltam X%” para incentivar conclusão.',
    explanation: 'Quando já investimos esforço, queremos ser consistentes e finalizar a tarefa. O efeito goal-gradient aumenta a motivação conforme nos aproximamos do fim. Exibir progresso claro e etapas restantes incentiva a conclusão.',
    htmlCode: `<div class="progress-form">
  <h3 class="progress-title">Complete seu perfil</h3>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 70%;"></div>
  </div>
  <p class="progress-text">Faltam 30% para desbloquear relatórios avançados</p>

  <div class="progress-actions">
    <button class="progress-btn primary">Adicionar foto</button>
    <button class="progress-btn">Conectar integração</button>
  </div>
</div>`,
    cssCode: `.progress-form {
  max-width: 520px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.5rem; box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}
.progress-title { margin: 0; font-size: 1.25rem; font-weight: 800; color: #111827; }
.progress-bar { height: 10px; background: #f3f4f6; border-radius: 9999px; margin: 0.75rem 0; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg,#3b82f6,#06b6d4); transition: width .25s ease; }
.progress-text { margin: 0 0 1rem; color: #6b7280; font-size: 0.95rem; }
.progress-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.progress-btn { padding: 0.7rem 1rem; border-radius: 10px; border: 1px solid #d1d5db; background: #fff; font-weight: 700; color: #374151; cursor: pointer; }
.progress-btn.primary { background: #3b82f6; border-color: #3b82f6; color: #fff; }
.progress-btn.primary:hover { background: #2563eb; }`,
  },
  {
    id: 'efeito-escada-de-precos',
    title: 'Escada de Preços com Compromisso',
    biases: ['Ancoragem', 'Compromisso e Coerência'],
    description: 'Upsell gradativo com degraus de preço, reduzindo atrito e aumentando ticket médio.',
    explanation: 'Apresentar melhorias incrementais com preços graduais ancora a percepção de valor e favorece aceitar o próximo degrau (“já que estou aqui, mais um upgrade”). Isso aproveita coerência e ancoragem em sequência.',
    htmlCode: `<div class="ladder-container">
  <h3 class="ladder-title">Evolua seu plano</h3>
  <div class="ladder-steps">
    <div class="ladder-step done">
      <span class="ladder-dot">1</span>
      <div>
        <p class="ladder-name">Starter</p>
        <p class="ladder-desc">R$ 29/mês</p>
      </div>
    </div>
    <div class="ladder-step active">
      <span class="ladder-dot">2</span>
      <div>
        <p class="ladder-name">Pro</p>
        <p class="ladder-desc">R$ 59/mês • +Relatórios</p>
      </div>
      <button class="ladder-cta">Atualizar</button>
    </div>
    <div class="ladder-step">
      <span class="ladder-dot">3</span>
      <div>
        <p class="ladder-name">Premium</p>
        <p class="ladder-desc">R$ 99/mês • +Automação</p>
      </div>
    </div>
  </div>
</div>`,
    cssCode: `.ladder-container { max-width: 520px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; }
.ladder-title { margin: 0 0 0.75rem; font-weight: 900; color: #0f172a; }
.ladder-steps { display: grid; gap: 0.75rem; }
.ladder-step { display: grid; grid-template-columns: auto 1fr auto; gap: 0.75rem; align-items: center; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb; }
.ladder-step.done { opacity: 0.75; }
.ladder-step.active { border-color: #3b82f6; background: #eff6ff; }
.ladder-dot {
  width: 28px; height: 28px; border-radius: 50%; background: #e5e7eb; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; color: #111827;
}
.ladder-step.active .ladder-dot { background: #3b82f6; color: #fff; }
.ladder-name { margin: 0; font-weight: 800; color: #111827; }
.ladder-desc { margin: 0; color: #6b7280; font-size: 0.9rem; }
.ladder-cta { padding: 0.55rem 0.9rem; border-radius: 10px; border: 0; background: #3b82f6; color: #fff; font-weight: 800; cursor: pointer; }`,
  },
  {
    id: 'aversion-perda',
    title: 'Aversão à Perda (Loss Aversion)',
    biases: ['Aversão à Perda', 'Escassez'],
    description: 'Destaque do que será perdido se não agir: recursos bloqueados em X horas.',
    explanation: 'As pessoas sentem mais intensamente a dor de perder algo do que o prazer de ganhar. Mostrar explicitamente os benefícios que serão perdidos (com tempo) aumenta a urgência e a taxa de ação.',
    htmlCode: `<div class="loss-card">
  <h3 class="loss-title">Não perca estes recursos</h3>
  <ul class="loss-list">
    <li>Acesso a relatórios históricos</li>
    <li>Exportação ilimitada</li>
    <li>Suporte prioritário</li>
  </ul>
  <div class="loss-timer">
    <span class="loss-icon">⏳</span>
    <p class="loss-text">Expira em 05:12:47</p>
  </div>
  <button class="loss-button">Garantir agora</button>
</div>`,
    cssCode: `.loss-card {
  max-width: 420px; margin: 0 auto; background: #fff; border: 2px solid #fecaca; border-radius: 16px; padding: 1.25rem;
  box-shadow: 0 10px 24px rgba(220,38,38,0.12); background-image: linear-gradient(180deg,#fff, #fff5f5);
}
.loss-title { margin: 0 0 0.75rem; color: #7f1d1d; font-size: 1.25rem; font-weight: 900; }
.loss-list { margin: 0 0 1rem; padding-left: 1.25rem; color: #7f1d1d; }
.loss-timer { display: flex; gap: 0.5rem; align-items: center; background: #fee2e2; border: 1px solid #fecaca; padding: 0.6rem 0.8rem; border-radius: 10px; margin-bottom: 0.9rem; }
.loss-icon { font-size: 1.1rem; }
.loss-text { margin: 0; font-weight: 800; color: #991b1b; }
.loss-button { width: 100%; padding: 0.9rem; background: #dc2626; color: #fff; border: 0; border-radius: 10px; font-weight: 800; cursor: pointer; }
.loss-button:hover { background: #b91c1c; }`,
  },
  {
    id: 'curiosidade-gap',
    title: 'Curiosidade e Informação Incompleta',
    biases: ['Curiosity Gap', 'Zeigarnik'],
    description: 'Teaser com conteúdo parcialmente oculto para estimular clique e completar a ação.',
    explanation: 'O “gap” de curiosidade e o efeito Zeigarnik (tendência a lembrar tarefas incompletas) levam o usuário a querer fechar o ciclo. Mostrar um preview tentador mas incompleto motiva o clique para ver o restante.',
    htmlCode: `<div class="teaser-card">
  <h3 class="teaser-title">O erro comum que reduz sua conversão em 32%...</h3>
  <p class="teaser-snippet">A maioria dos times ignora este detalhe simples na página de pricing. Quando você corrige, acontece...</p>
  <div class="teaser-blur">Conteúdo exclusivo para membros</div>
  <button class="teaser-button">Desbloquear agora</button>
</div>`,
    cssCode: `.teaser-card {
  max-width: 520px; margin: 0 auto; background: #fff; border-radius: 16px; padding: 1.25rem; border: 2px solid #e5e7eb;
  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
}
.teaser-title { margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 900; color: #0f172a; }
.teaser-snippet { margin: 0 0 0.75rem; color: #475569; }
.teaser-blur {
  height: 120px; border-radius: 12px; background: linear-gradient(135deg,#e5e7eb,#cbd5e1);
  display: grid; place-items: center; color: #1f2937; font-weight: 800; letter-spacing: 0.02em; margin-bottom: 0.9rem;
  filter: blur(1px);
}
.teaser-button { width: 100%; padding: 0.9rem; background: #3b82f6; color: #fff; border: 0; border-radius: 10px; font-weight: 800; cursor: pointer; }
.teaser-button:hover { background: #2563eb; }`,
  },
  {
    id: 'autoridade-selo',
    title: 'Autoridade e Sinais de Confiança',
    biases: ['Autoridade', 'Efeito Halo', 'Prova Social'],
    description: 'Landing com selos oficiais, certificações e depoimentos de especialistas.',
    explanation: 'Sinais de autoridade (certificações, auditorias, especialistas) reduzem risco percebido e emprestam credibilidade. Combinado com prova social, cria-se uma heurística forte de “pode confiar”.',
    htmlCode: `<div class="trust-landing">
  <div class="trust-header">
    <h2 class="trust-title">Plataforma certificada e auditada</h2>
    <p class="trust-subtitle">Conforme normas ISO 27001 • Auditoria anual independente</p>
    <div class="trust-seals">
      <span class="seal">ISO 27001</span>
      <span class="seal">SOC 2</span>
      <span class="seal">GDPR Ready</span>
    </div>
  </div>

  <div class="trust-testimonials">
    <div class="t-card">
      <p class="t-quote">“A única solução que aprovamos sem ressalvas.”</p>
      <p class="t-author">Dra. Ana Souza, CISO</p>
    </div>
    <div class="t-card">
      <p class="t-quote">“Melhor prática de segurança entre as plataformas que avaliamos.”</p>
      <p class="t-author">Comitê de Conformidade</p>
    </div>
  </div>

  <button class="trust-cta">Começar com segurança</button>
</div>`,
    cssCode: `.trust-landing {
  max-width: 720px; margin: 0 auto; background: #fff; border-radius: 20px; padding: 2rem;
  border: 2px solid #e2e8f0; box-shadow: 0 16px 36px rgba(0,0,0,0.08);
}
.trust-header { text-align: center; }
.trust-title { margin: 0; font-size: 1.8rem; font-weight: 900; color: #0f172a; }
.trust-subtitle { margin: 0.5rem 0 1rem; color: #475569; }
.trust-seals { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.25rem; }
.seal { background: #111827; color: #fff; padding: 0.4rem 0.75rem; border-radius: 9999px; font-weight: 800; font-size: 0.85rem; }
.trust-testimonials { display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 0.75rem; margin-bottom: 1.25rem; }
.t-card { background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem; }
.t-quote { margin: 0 0 0.5rem; font-weight: 700; color: #0f172a; }
.t-author { margin: 0; color: #64748b; font-size: 0.9rem; }
.trust-cta { width: 100%; padding: 1rem; background: #0ea5e9; color: #fff; border: 0; border-radius: 12px; font-weight: 900; cursor: pointer; }
.trust-cta:hover { background: #0284c7; }`,
  },
  {
    id: 'simplicidade-paradoxo',
    title: 'Paradoxo da Escolha (Menos é Mais)',
    biases: ['Paradoxo da Escolha', 'Foco'],
    description: 'Redução de opções a uma escolha principal com alternativa secundária discreta.',
    explanation: 'Muitas opções geram paralisia. Destacar uma opção recomendada e reduzir “ruído” aumenta a taxa de escolha. A alternativa secundária fica disponível, porém visualmente menos saliente.',
    htmlCode: `<div class="choice-card">
  <h3 class="choice-title">Escolha recomendada</h3>
  <div class="choice-options">
    <div class="choice primary">
      <p class="c-name">Plano Foco</p>
      <p class="c-price">R$ 79/mês</p>
      <button class="c-btn primary">Selecionar</button>
    </div>
    <div class="choice secondary">
      <p class="c-name">Ver outras opções</p>
      <button class="c-btn">Explorar</button>
    </div>
  </div>
</div>`,
    cssCode: `.choice-card {
  max-width: 480px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 24px rgba(0,0,0,0.06);
}
.choice-title { margin: 0 0 0.75rem; font-weight: 900; color: #0f172a; }
.choice-options { display: grid; gap: 0.75rem; }
.choice { border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem; background: #f9fafb; }
.choice.primary { border-color: #10b981; background: #ecfdf5; }
.c-name { margin: 0; font-weight: 800; color: #0f172a; }
.c-price { margin: 0.25rem 0 0.5rem; color: #065f46; font-weight: 800; }
.c-btn { padding: 0.7rem 1rem; border-radius: 10px; border: 1px solid #cbd5e1; background: #fff; font-weight: 800; cursor: pointer; }
.c-btn.primary { background: #10b981; color: #fff; border-color: #10b981; }
.c-btn.primary:hover { background: #059669; }`,
  },
  {
    id: 'status-quo-preferencia',
    title: 'Preferência pelo Status Quo',
    biases: ['Status Quo', 'Inércia'],
    description: 'Plano recomendado já pré-selecionado e copy que incentiva “manter como está”.',
    explanation: 'Pessoas tendem a preferir a opção padrão para evitar esforço de mudança. Pré-selecionar uma alternativa segura e comunicar “você já está pronto assim” reduz atrito e aproveita a inércia decisória.',
    htmlCode: `<div class="sq-card">
  <h3 class="sq-title">Você já está no plano ideal</h3>
  <p class="sq-subtitle">Sem necessidade de mudanças agora</p>

  <div class="sq-options">
    <label class="sq-option active">
      <input type="radio" name="plan" checked>
      <div class="sq-content">
        <p class="sq-name">Plano Atual (Recomendado)</p>
        <p class="sq-desc">Cobre seu uso típico com melhor custo-benefício</p>
      </div>
    </label>

    <label class="sq-option">
      <input type="radio" name="plan">
      <div class="sq-content">
        <p class="sq-name">Mudar para Pro</p>
        <p class="sq-desc">Mais recursos, mas pode ser além do necessário</p>
      </div>
    </label>
  </div>

  <button class="sq-button">Continuar assim</button>
</div>`,
    cssCode: `.sq-card { max-width: 520px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 24px rgba(0,0,0,0.06); }
.sq-title { margin: 0; font-size: 1.35rem; font-weight: 900; color: #0f172a; }
.sq-subtitle { margin: 0.25rem 0 1rem; color: #475569; }
.sq-options { display: grid; gap: 0.75rem; }
.sq-option { display: grid; grid-template-columns: auto 1fr; gap: 0.75rem; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb; cursor: pointer; }
.sq-option input { margin: 0.25rem 0 0; }
.sq-option.active { border-color: #10b981; background: #ecfdf5; }
.sq-name { margin: 0; font-weight: 800; color: #0f172a; }
.sq-desc { margin: 0.25rem 0 0; color: #64748b; font-size: 0.9rem; }
.sq-button { width: 100%; padding: 0.9rem; background: #10b981; color: #fff; border: 0; border-radius: 10px; font-weight: 900; cursor: pointer; }
.sq-button:hover { background: #059669; }`,
  },
  {
    id: 'status-quo-cancelamento',
    title: 'Status Quo no Cancelamento (Salvar Preferências)',
    biases: ['Status Quo', 'Aversão à Perda'],
    description: 'Tela de cancelamento oferecendo pausar/alternar em vez de cancelar, com destaque ao que será perdido.',
    explanation: 'Manter o status quo é mais fácil do que mudar. Ao oferecer opções de “pausar” ou “manter acesso básico” e listar perdas potenciais, o usuário tende a adiar o cancelamento e preservar o estado atual.',
    htmlCode: `<div class="cancel-card">
  <h3 class="cancel-title">Antes de cancelar, que tal manter o essencial?</h3>
  <ul class="cancel-losses">
    <li>Perderá relatórios históricos</li>
    <li>Projetos arquivados serão fechados</li>
    <li>Suporte prioritário será removido</li>
  </ul>
  <div class="cancel-actions">
    <button class="btn primary">Manter Plano Básico</button>
    <button class="btn secondary">Pausar por 60 dias</button>
    <button class="btn ghost">Prosseguir com cancelamento</button>
  </div>
</div>`,
    cssCode: `.cancel-card { max-width: 560px; margin: 0 auto; background: #fff; border: 2px solid #fecaca; border-radius: 16px; padding: 1.25rem; box-shadow: 0 8px 20px rgba(220,38,38,0.08); }
.cancel-title { margin: 0 0 0.75rem; color: #7f1d1d; font-weight: 900; }
.cancel-losses { margin: 0 0 1rem; padding-left: 1.25rem; color: #7f1d1d; }
.cancel-actions { display: grid; gap: 0.5rem; }
.btn { padding: 0.85rem 1rem; border-radius: 10px; font-weight: 800; cursor: pointer; border: 1px solid #e5e7eb; background: #fff; }
.btn.primary { background: #10b981; border-color: #10b981; color: #fff; }
.btn.secondary { background: #fef3c7; border-color: #f59e0b; color: #7c2d12; }
.btn.ghost { background: transparent; border: 1px dashed #cbd5e1; color: #64748b; }`,
  },
  {
    id: 'preferencia-defaults',
    title: 'Defaults Inteligentes',
    biases: ['Status Quo', 'Arquitetura de Escolha'],
    description: 'Formulário com campos pré-preenchidos e opção “recomendada” como padrão.',
    explanation: 'Defaults moldam decisões. Ao definir escolhas recomendadas como padrão, aproveitamos a inércia: usuários aceitam a configuração já “correta” e prosseguem com menos atrito.',
    htmlCode: `<div class="defaults-form">
  <h3 class="df-title">Configuração recomendada</h3>
  <label class="df-row">
    <span>Backup automático</span>
    <input type="checkbox" checked>
  </label>
  <label class="df-row">
    <span>Notificações resumidas (recomendado)</span>
    <input type="radio" name="notif" checked>
  </label>
  <label class="df-row">
    <span>Notificações detalhadas</span>
    <input type="radio" name="notif">
  </label>
  <button class="df-btn">Continuar</button>
</div>`,
    cssCode: `.defaults-form { max-width: 420px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
.df-title { margin: 0 0 1rem; font-weight: 900; color: #0f172a; }
.df-row { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid #e5e7eb; }
.df-row:last-child { border-bottom: none; }
.df-btn { width: 100%; margin-top: 1rem; padding: 0.85rem; border-radius: 10px; background: #3b82f6; color: #fff; border: 0; font-weight: 900; cursor: pointer; }`,
  },
  {
    id: 'prova-social-inercia',
    title: 'Inércia Social (O que a maioria faz)',
    biases: ['Status Quo', 'Prova Social', 'Bandwagon Effect'],
    description: 'Mensagem reforçando que a maioria mantém a configuração atual.',
    explanation: 'Quando mostramos que “a maioria mantém assim”, unimos prova social com status quo, reforçando que a decisão padrão é a mais comum e segura.',
    htmlCode: `<div class="inertia-banner">
  <p class="inertia-text">87% dos usuários mantêm as configurações recomendadas.</p>
  <button class="inertia-btn">Manter como está</button>
</div>`,
    cssCode: `.inertia-banner { max-width: 560px; margin: 0 auto; background: #ecfdf5; border: 2px solid #bbf7d0; color: #065f46; border-radius: 16px; padding: 1rem; display: grid; grid-template-columns: 1fr auto; gap: 0.75rem; align-items: center; }
.inertia-text { margin: 0; font-weight: 800; }
.inertia-btn { padding: 0.7rem 1rem; background: #10b981; color: #fff; border: 0; border-radius: 10px; font-weight: 900; cursor: pointer; }`,
  },
  {
    id: 'efeito-familiaridade',
    title: 'Efeito de Familiaridade (Mero Exposição)',
    biases: ['Familiaridade', 'Status Quo'],
    description: 'Layout que reflete padrões familiares do usuário, reduzindo atrito de mudança.',
    explanation: 'Tendemos a preferir o que já conhecemos. Usar padrões familiares (navegação, ícones, copy) diminui a resistência a adotar o produto e incentiva manter a configuração atual.',
    htmlCode: `<div class="familiar-card">
  <h3 class="fam-title">Layout no estilo que você já usa</h3>
  <p class="fam-desc">Menus à esquerda, atalhos no topo e ações à direita — tudo como de costume.</p>
  <button class="fam-btn">Continuar com este layout</button>
</div>`,
    cssCode: `.familiar-card { max-width: 520px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 24px rgba(0,0,0,0.06); }
.fam-title { margin: 0 0 0.25rem; font-weight: 900; color: #0f172a; }
.fam-desc { margin: 0 0 0.75rem; color: #475569; }
.fam-btn { width: 100%; padding: 0.9rem; border-radius: 10px; background: #0ea5e9; color: #fff; border: 0; font-weight: 900; cursor: pointer; }`,
  },
  {
    id: 'compromisso-agendamento',
    title: 'Compromisso Público (Agendamento)',
    biases: ['Compromisso e Coerência', 'Status Quo'],
    description: 'Convidar o usuário a “reservar um horário” cria compromisso leve que favorece manter o plano.',
    explanation: 'Após um compromisso inicial, buscamos ser consistentes. Agendar algo pequeno gera inércia para seguir adiante e manter as escolhas previamente feitas.',
    htmlCode: `<div class="schedule-card">
  <h3 class="sch-title">Reserve 15 min para concluir seu setup</h3>
  <div class="sch-slots">
    <button class="slot-btn">Hoje • 16:00</button>
    <button class="slot-btn">Hoje • 18:00</button>
    <button class="slot-btn">Amanhã • 09:30</button>
  </div>
  <button class="sch-cta">Reservar horário</button>
</div>`,
    cssCode: `.schedule-card { max-width: 520px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
.sch-title { margin: 0 0 0.75rem; font-weight: 900; color: #0f172a; }
.sch-slots { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
.slot-btn { padding: 0.6rem 0.9rem; border: 1px solid #cbd5e1; border-radius: 9999px; background: #fff; font-weight: 800; cursor: pointer; }
.sch-cta { width: 100%; padding: 0.9rem; background: #3b82f6; color: #fff; border: 0; border-radius: 10px; font-weight: 900; cursor: pointer; }`,
  },
  {
    id: 'esforco-sunk-cost',
    title: 'Sunk Cost + Continuidade',
    biases: ['Custo Afundado', 'Status Quo', 'Goal-Gradient'],
    description: 'Mostrar tempo/itens já investidos para estimular continuidade e manter o curso atual.',
    explanation: 'Ao destacar o que já foi investido (tempo, dados importados, passos concluídos), aumentamos a tendência a continuar para “não desperdiçar” o esforço, reforçando o status quo.',
    htmlCode: `<div class="sunk-card">
  <h3 class="sunk-title">Você já avançou bastante</h3>
  <p class="sunk-desc">3 integrações conectadas • 72% do onboarding concluído</p>
  <div class="sunk-bar"><div class="sunk-fill" style="width:72%"></div></div>
  <button class="sunk-btn">Concluir agora</button>
</div>`,
    cssCode: `.sunk-card { max-width: 520px; margin: 0 auto; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1.25rem; box-shadow: 0 10px 24px rgba(0,0,0,0.06); }
.sunk-title { margin: 0; font-weight: 900; color: #0f172a; }
.sunk-desc { margin: 0.4rem 0; color: #475569; }
.sunk-bar { height: 10px; background: #f3f4f6; border-radius: 9999px; overflow: hidden; margin: 0.5rem 0 0.9rem; }
.sunk-fill { height: 100%; background: linear-gradient(90deg,#10b981,#06b6d4); }
.sunk-btn { width: 100%; padding: 0.9rem; background: #10b981; color: #fff; border: 0; border-radius: 10px; font-weight: 900; cursor: pointer; }`,
  },
  {
    id: 'friccao-mudanca',
    title: 'Fricção de Mudança Visível',
    biases: ['Status Quo', 'Aversão ao Risco'],
    description: 'Comparação clara dos passos e impactos de mudar versus manter como está.',
    explanation: 'Evidenciar o custo de mudança (tempo, riscos, reconfiguração) torna a opção atual mais atraente por inércia e aversão ao risco.',
    htmlCode: `<div class="friction-compare">
  <div class="col keep">
    <h4>Manter como está</h4>
    <ul>
      <li>0 min de ajuste</li>
      <li>Configurações preservadas</li>
      <li>Sem risco de indisponibilidade</li>
    </ul>
    <button class="keep-btn">Continuar</button>
  </div>
  <div class="col change">
    <h4>Mudar agora</h4>
    <ul>
      <li>~45 min de reconfiguração</li>
      <li>Revisar permissões</li>
      <li>Possível curva de aprendizado</li>
    </ul>
    <button class="change-btn">Prosseguir com mudança</button>
  </div>
</div>`,
    cssCode: `.friction-compare { display: grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap: 1rem; background: #fff; border: 2px solid #e5e7eb; border-radius: 16px; padding: 1rem; max-width: 720px; margin: 0 auto; }
.col { border: 1px solid #e5e7eb; border-radius: 12px; padding: 1rem; background: #f9fafb; }
.col.keep { border-color: #bbf7d0; background: #ecfdf5; }
h4 { margin: 0 0 0.5rem; font-weight: 900; color: #0f172a; }
ul { margin: 0 0 0.75rem 1rem; color: #475569; }
.keep-btn, .change-btn { width: 100%; padding: 0.8rem; border-radius: 10px; font-weight: 900; border: 0; cursor: pointer; }
.keep-btn { background: #10b981; color: #fff; }
.change-btn { background: #e5e7eb; color: #111827; }`,
  }
];
