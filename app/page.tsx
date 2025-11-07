import Link from 'next/link';
import { ArrowRight, Brain, Code, Eye, Users, Target, Zap, TrendingUp, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedDesignCard from '@/components/FeaturedDesignCard';

const cognitiveBiases = [
  {
    name: 'Efeito Chamariz',
    description: 'Introduz uma opção assimétrica para tornar outra opção mais atraente.',
    icon: Target,
  },
  {
    name: 'Ancoragem',
    description: 'A primeira informação (âncora) influencia a percepção de valor das seguintes.',
    icon: Brain,
  },
  {
    name: 'Prova Social',
    description: 'As pessoas tendem a seguir comportamentos ou escolhas validadas por outros.',
    icon: Users,
  },
  {
    name: 'Escassez',
    description: 'Limitações de tempo/quantidade aumentam a percepção de valor e urgência.',
    icon: Eye,
  },
  {
    name: 'Efeito Halo',
    description: 'Uma característica positiva se estende para a percepção do todo.',
    icon: Code,
  },
  {
    name: 'Viés de Confirmação',
    description: 'Tendência de buscar, interpretar e lembrar informações que confirmem crenças prévias, ignorando evidências contrárias.',
    icon: Search,
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main>
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary">
              Design & Psicologia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Design com Vieses Cognitivos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aprenda a aplicar princípios da psicologia cognitiva para criar interfaces mais eficazes e persuasivas
            </p>
            <Link href="/designs">
              <Button size="lg" className="group">
                Explorar designs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              O que são vieses cognitivos?
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Vieses cognitivos são atalhos mentais que influenciam como percebemos informações e tomamos decisões.
              No design e UX, compreender esses vieses ajuda a criar interfaces mais claras, persuasivas e alinhadas
              às expectativas dos usuários.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cognitiveBiases.map((bias) => {
                const Icon = bias.icon;
                return (
                  <Card key={bias.name} className="transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{bias.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{bias.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Por que vieses cognitivos importam?
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                Entender e aplicar corretamente esses princípios transforma não apenas a experiência do usuário,
                mas também os resultados do seu negócio
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Aumento de Conversão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Aplicar vieses cognitivos corretamente pode aumentar suas taxas de conversão em até 30-40%,
                      enquanto melhora a satisfação dos usuários com decisões mais alinhadas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Melhor UX</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Interfaces que respeitam como o cérebro humano funciona naturalmente criam experiências
                      mais intuitivas, reduzindo a carga cognitiva do usuário.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Clareza e Ação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Hierarquia visual e padrões de design baseados em psicologia ajudam usuários a entender
                      rapidamente o que fazer e por quê.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>Construir Confiança</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Prova social, credibilidade e consistência geram confiança. Usuários que confiam fazem
                      mais transações e se tornam defensores da marca.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Como este site funciona
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Navegue por exemplos</h3>
                  <p className="text-muted-foreground">
                    Explore designs prontos que aplicam diferentes vieses cognitivos
                  </p>
                </div>
                <div>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Entenda o efeito</h3>
                  <p className="text-muted-foreground">
                    Cada design mostra o visual, explicação do efeito psicológico aplicado
                  </p>
                </div>
                <div>
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Copie o código</h3>
                  <p className="text-muted-foreground">
                    Acesse blocos de código HTML/CSS copiáveis que reproduzem o padrão visual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Exemplos em destaque
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Explore como vieses cognitivos podem ser aplicados em componentes reais
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <FeaturedDesignCard
                title="Efeito Chamariz (Decoy Effect)"
                biases={['Efeito Chamariz']}
                description="Adicionar um plano com valor intermediário mal posicionado pode 'empurrar' a escolha para o plano que você deseja destacar."
                slug="efeito-chamariz"
              />
              <FeaturedDesignCard
                title="Prova Social (Social Proof)"
                biases={['Prova Social']}
                description="Avaliações, contadores e rótulos 'Mais vendido' sinalizam valor percebido e reduzem incerteza."
                slug="prova-social"
              />
            </div>

            <div className="text-center">
              <Link href="/designs">
                <Button variant="outline" size="lg">
                  Ver mais designs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
