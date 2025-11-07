'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DesignCard from '@/components/DesignCard';
import FilterModal from '@/components/FilterModal';
import { designsData } from '@/lib/designs-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sliders, X } from 'lucide-react';

export default function DesignsPage() {
  const [selectedBiases, setSelectedBiases] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allBiases = useMemo(() => {
    const biasSet = new Set<string>();
    designsData.forEach((design) => {
      design.biases.forEach((bias) => biasSet.add(bias));
    });
    return Array.from(biasSet).sort();
  }, []);

  const filteredDesigns = useMemo(() => {
    if (selectedBiases.length === 0) {
      return designsData;
    }
    return designsData.filter((design) =>
      selectedBiases.some((bias) => design.biases.includes(bias))
    );
  }, [selectedBiases]);

  const toggleBias = (bias: string) => {
    setSelectedBiases((prev) =>
      prev.includes(bias) ? prev.filter((b) => b !== bias) : [...prev, bias]
    );
  };

  const clearFilters = () => {
    setSelectedBiases([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Exemplos de Design
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore componentes que aplicam vieses cognitivos. Cada exemplo inclui visualização,
              explicação e código HTML/CSS copiável.
            </p>
          </div>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-3">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="gap-2"
              >
                <Sliders className="h-4 w-4" />
                Filtrar por viés
              </Button>

              {selectedBiases.length > 0 && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Limpar
                </Button>
              )}
            </div>

            {selectedBiases.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {filteredDesigns.length} de {designsData.length} exemplos
              </p>
            )}
          </div>

          {selectedBiases.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {selectedBiases.map((bias) => (
                <Badge key={bias} variant="default" className="gap-1 px-3 py-1">
                  {bias}
                  <X
                    className="h-3 w-3 cursor-pointer hover:opacity-70"
                    onClick={() => toggleBias(bias)}
                  />
                </Badge>
              ))}
            </div>
          )}

          {filteredDesigns.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Nenhum exemplo encontrado com os filtros selecionados.
              </p>
              <Button onClick={clearFilters}>Limpar filtros</Button>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredDesigns.map((design) => (
                <DesignCard key={design.id} design={design} />
              ))}
            </div>
          )}
        </div>
      </main>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        allBiases={allBiases}
        selectedBiases={selectedBiases}
        onBiasToggle={toggleBias}
        onClear={clearFilters}
        designCount={filteredDesigns.length}
        totalCount={designsData.length}
      />

      <Footer />
    </div>
  );
}
