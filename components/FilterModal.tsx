'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  allBiases: string[];
  selectedBiases: string[];
  onBiasToggle: (bias: string) => void;
  onClear: () => void;
  designCount: number;
  totalCount: number;
}

export default function FilterModal({
  isOpen,
  onClose,
  allBiases,
  selectedBiases,
  onBiasToggle,
  onClear,
  designCount,
  totalCount,
}: FilterModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Filtrar por Viés Cognitivo</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Selecione um ou mais vieses para filtrar os designs
            </p>

            <div className="flex flex-wrap gap-2">
              {allBiases.map((bias) => (
                <Badge
                  key={bias}
                  variant={selectedBiases.includes(bias) ? 'default' : 'secondary'}
                  className="cursor-pointer transition-all hover:scale-105 px-3 py-2 text-sm"
                  onClick={() => onBiasToggle(bias)}
                >
                  {bias}
                  {selectedBiases.includes(bias) && (
                    <X className="ml-1.5 h-3 w-3" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium">
                {selectedBiases.length > 0
                  ? `Mostrando ${designCount} de ${totalCount} exemplos`
                  : `Total de ${totalCount} exemplos`}
              </p>
              {selectedBiases.length > 0 && (
                <Button variant="ghost" size="sm" onClick={onClear}>
                  <X className="h-4 w-4 mr-2" />
                  Limpar filtros
                </Button>
              )}
            </div>

            <Button onClick={onClose} className="w-full">
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
